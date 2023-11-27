import React from "react";
import styled from "styled-components";
import FilterSort from "../components/FilterSort";
import MusicAlbum from "../components/MusicAlbum";

const MusicRecords = () => {
  return (
    <Wrapper>
      <WrapperFilterSort><FilterSort/></WrapperFilterSort>
      <WrapperMusicAlbum><MusicAlbum/></WrapperMusicAlbum>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  overflow: scroll;
`;

const WrapperFilterSort = styled.div`
  height: 100vh;
  width: 20%;
  padding: 1rem;
  position: sticky;
  left:0;
  top:0;
  text-align: left;


`;
const WrapperMusicAlbum = styled.div`
  height: 100vh;
  width: 80%;
  padding: 0 1rem;
  display:grid;
  margin:auto;
  grid-template-columns: repeat(auto-fit, minmax(250px, max-content));
  justify-content:center;
  gap:1rem;  
  padding: 1rem
`;

export default MusicRecords;
