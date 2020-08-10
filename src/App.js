import React, { useState } from 'react';

import Header from './components/Header/Header';
import Input from './components/UI/Input/Input';
import TrackList from './components/TrackList/TrackList.js';
import Button from './components/UI/Buttons/Button';
import classes from './App.module.css';

function App() {

  const [inputState, setInputState] = useState({
    artist: "",
    song: "",
    error: null,
    isSubmitted: false
  });

  const inputChangedHandler = (event, inputName) => {
    if(inputName === 'song') {
      setInputState({
        ...inputState,
        song: event.target.value,
        isSubmitted: false
      });
    }
    else {
      setInputState(
        {
          ...inputState,
          artist: event.target.value,
          isSubmitted: false
        });
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();
    setInputState({
      ...inputState,
      isSubmitted: true
    });
  };

  return (
    <div className={classes.App}>
      <Header />
      <div className={classes.AppBody}>
        <p>
          Enter the name of a song you like along with the artist and find songs
          that are similar to it!
        </p>
        <form className={classes.form} onSubmit={submitHandler}>
          <Input type="text" name="song" placeholder="Song Name" value={inputState.song}  changed={(event) => inputChangedHandler(event, "song")}/>
          <Input type="text" name="artist" placeholder="Artist Name" value={inputState.artist}  changed={(event) => inputChangedHandler(event, "artist")}/>
          <Button>Enter</Button>
        </form>
        {inputState.isSubmitted ? <TrackList track={inputState.song} artist={inputState.artist}/> : null}
      </div>
    </div>
  );
}

export default App;
