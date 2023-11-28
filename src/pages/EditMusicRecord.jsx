import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getMusicRecord, updateMusicRecord } from "../redux/appReducer/action";

const EditMusicRecord = () => {
  const { id } = useParams();
  const musicRecord = useSelector((store) => store.appReducer.musicRecords);
  const [musicName, setMusicName] = useState("");
  const [newArtist, setNewArtist] = useState('')
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Use if musicRecord data is available or not after refres
  useEffect(() => {
    if (musicRecord.length === 0) {
      dispatch(getMusicRecord());
    }
  }, []);

  // Use to find the music album of current id
  useEffect(() => {
    if (id) {
      const currentMusic = musicRecord.find((album) => album.id === id);
      console.log(currentMusic);
      if (currentMusic) {
        setMusicName(currentMusic.name);
        setNewArtist(currentMusic.artist)
      }
    }
  }, [id, musicRecord]);


  // Function to submit update 
  const handleSubmit = (e) => {
    e.preventDefault();
    if (musicName || newArtist) {
      const payload = {
        name: musicName,
        artist: newArtist
      };
      dispatch(updateMusicRecord(id, payload)).then((res) => {
        // dispatch(getMusicRecord());
        navigate("/");
      });
    }
  };

  return (
    <div   style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginTop: "5rem",
    }}>
      <form  style={{
        height: "fit-content",
        width: "300px",
        border: "1px solid lightgray",
        borderRadius: "10px",
        padding: "1rem",
      }} onSubmit={handleSubmit}>
          <h1>EDIT MUSIC</h1>
          <br />
        <div>
          <label htmlFor="">Edit Music Name</label>
          <input
             style={{
              border: "none",
              outline: "none",
              backgroundColor: "lightgray",
              padding: "1rem",
              width: "90%",
              borderRadius: "5px",
              marginTop: "10px",
            }}
            type="text"
            value={musicName}
            onChange={(e) => setMusicName(e.target.value)}
          />
        </div>
        <br />
        <div>
          <label htmlFor="">Edit Music Artist</label>
          <input
             style={{
              border: "none",
              outline: "none",
              backgroundColor: "lightgray",
              padding: "1rem",
              width: "90%",
              borderRadius: "5px",
              marginTop: "10px",
            }}
            type="text"
            value={newArtist}
            onChange={(e) => setNewArtist(e.target.value)}
          />
        </div>
        <br />
        <button
          style={{
            border: "none",
            cursor: 'pointer',
            borderRadius: "5px",
            marginTop: "1rem",
            backgroundColor: "black",
            color: "white",
            fontSize: "20px",
            padding: "8px 20px",
            width: "100%",
          }}
          type="submit"
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default EditMusicRecord;
