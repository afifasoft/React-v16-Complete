import React from 'react';
// import actions from '../actions'; // if file name is index.js inside action folder that time no need to mention file name
// bcz webpack will pick it automatically

// import { selectSong } from '../actions';  //   { selectSong } - this is a name export so curly bases required
                                          // selectSong - if export is default  no need a curly bases
import SongList from './SongList';
import SongDetail from './SongDetail';


const App = () => {
  return (
      <div className="ui container grid">
        <div className="ui row">
          <div className="column eight wide">
            <SongList />
          </div>
          <div className="column eight wide">
            <SongDetail />
          </div>
      </div>
    </div>
  );
};


export default App;
