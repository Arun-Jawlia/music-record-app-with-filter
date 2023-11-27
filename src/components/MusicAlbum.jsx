import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMusicRecord } from "../redux/appReducer/action";
import { useLocation, useSearchParams } from "react-router-dom";

const MusicAlbum = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const { isLoading, isError, musicRecords } = useSelector(
    (state) => state.appReducer
  );
  const location = useLocation();
//   console.log(location)

console.log(musicRecords)

  useEffect(() => {
    if (location || musicRecords.length === 0) {
      const genre = searchParams.getAll("genre");
      const sortBy = searchParams.get("sortBy");
      const queryParams= {
          params: {
              genre:genre,
              _sort:sortBy && 'year',
              _order:sortBy

          }
      }

      dispatch(getMusicRecord(queryParams));
    }
  }, [location.search]);

  return (
    <>
      {isLoading ? (
        <div>Loading....</div>
      ) : (
        musicRecords.length > 0 &&
        musicRecords?.map((album) => {
          return (
            <div
              style={{
                border: "1px solid lightgray",
                borderRadius: "10px",
                textAlign: "center",
                fontWeight: "600",
              }}
              key={album.id}
            >
              <h2>{album.name}</h2>
              <div>
                <img src={album.img} alt={album.name} />
              </div>
              <p>Artist: {album.artist}</p>
              <p>{album.genre}</p>
              <p>{album.year}</p>
            </div>
          );
        })
      )}
    </>
  );
};

export default MusicAlbum;
