import React, { useState, useEffect } from 'react';

import Track from './Track/Track.js';
import axios from 'axios';
import classes from './TrackList.module.css'

const TrackList = (props) => {

    const [listState, setListState] = useState({trackList: [], response: false});
    useEffect(() => {
        axios.get('https://find-new-music-api.herokuapp.com/getSimilarTracks?track=' + props.track + '&artist=' + props.artist)
            .then(response => {
                setListState({trackList: response.data.data, response: true});
            })
            .catch(err => {
                setListState({...listState, response: true});
            });
    } , [props.artist, props.track]);

    let content = listState.trackList.length === 0
      ? <p>Loading...</p>
      : listState.trackList.map((track, index) => (
          <Track
            key = {index}
            track={track.name}
            artist={track.artist}
            url={track.url}
          />
      ));

    let inputClasses = "";
    if(listState.trackList.length === 0 && listState.response) {
        content = 
        <p> 
            Sorry, no information could be found! 
            Please make sure you've entered a correct song and artist or choose another song :) 
        </p>;
        inputClasses = classes.List;
    }

    return (
        <div className={inputClasses}>
          {content}
        </div>
    );
};

export default TrackList;