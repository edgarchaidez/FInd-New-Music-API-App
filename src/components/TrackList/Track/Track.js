import React from 'react';

import classes from './Track.module.css';
import MusicImage from '../../../assets/music-note-logo.png';

const Track = (props) => {
    return (
      <div className={classes.Track}>
        <img src={MusicImage} alt="Music Note"/>
        <h1>{props.track}</h1>
        <h2>{props.artist}</h2>
        <a className={classes.TrackLink} href={props.url} target="_blank" rel="noopener noreferrer">
          {props.url}
        </a>
      </div>
    );
};

export default Track;