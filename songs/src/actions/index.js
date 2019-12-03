
// Action creator or name of the Action creator
export const selectSong = (song) => {
  // Return an action
  return {
    type: 'SONG_SELECTED',
    payload: song
  };
};

// export default selectSong;
