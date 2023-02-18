import Sound from "react-sound";

const SoundM = () => {
  return (
    <>
      {/* <button> */}
      <Sound
        url="miley_cyrus_-lowers.mp3"
        playStatus={Sound.status.PLAYING}
        playFromPosition={300}
        //   onLoading={this.handleSongLoading}
        //   onPlaying={this.handleSongPlaying}
        //   onFinishedPlaying={this.handleSongFinishedPlaying}
      />
      {/* </button> */}
    </>
  );
};

export default SoundM;
