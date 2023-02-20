import Sound from 'react-sound';
import { useState } from 'react';

import m from '../../musik/miley_cyrus_-lowers.mp3';
import s from './SoundM.module.css';

const SoundM = () => {
  const [music, setMusic] = useState(Sound.status.PAUSED);
  const [positionMusic, setpositionMusic] = useState(100);

  function play() {
    if (music === 'PLAYING') {
      new Audio(m).play();
    }
  }

  return (
    <>
      <div className={s.box_btn}>
        <button
          disabled={music === Sound.status.PLAYING}
          className={s.btn}
          onClick={() => {
            setMusic(Sound.status.PLAYING);
            // setpositionMusic(position);
          }}
        >
          Play
        </button>
        <button
          disabled={music === 'STOPPED' || music === 'PAUSED'}
          className={s.btn}
          onClick={() => {
            setMusic(Sound.status.PAUSED);
          }}
        >
          Paused
        </button>
        <button
          disabled={music === 'STOPPED' || music === 'PAUSED'}
          className={s.btn}
          onClick={() => {
            setMusic(Sound.status.STOPPED);
          }}
        >
          Stop
        </button>
      </div>
      <Sound
        url={m}
        playStatus={music}
        playFromPosition={0}
        //   onPlaying={setpositionMusic}
        //   onLoading={this.handleSongLoading}
        //   onPlaying={this.handleSongPlaying}
        //   onFinishedPlaying={this.handleSongFinishedPlaying}
      />
      <div className={s.box2_btn}>
        <button
          disabled={music === Sound.status.PLAYING}
          className={s.btn}
          onClick={() => {
            setMusic(Sound.status.PLAYING);
            play();
          }}
        >
          Play2
        </button>
      </div>
    </>
  );
};

export default SoundM;
