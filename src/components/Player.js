import "./Player.scss";

export default function Player() {
  return (
    <>
      <div className="player-container">
        <figure className="song-cover-container">
          <img
            className="song-cover"
            src="https://i.scdn.co/image/ab67616d0000b27360e232dede80f62f9bfc8eda"
            alt="song-cover"
          />
        </figure>
        <div>
          <h1 className="song-title">JA ARA E</h1>
          <p className="artist">Burna Boy</p>
        </div>
      </div>
    </>
  );
}
