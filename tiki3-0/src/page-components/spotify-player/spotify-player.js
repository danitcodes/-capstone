import React from 'React';

function SpotifyPlayer() {
  return (
    <React.Fragment>
      <div align="center" style={{ paddingBottom: '30px' }}>
        <iframe
          src="https://open.spotify.com/embed/playlist/5wiP5B51Bn9Q9Fb3HwUbJ0"
          width="300"
          height="80"
          frameBorder="0"
          allowtransparency="true"
          allow="encrypted-media"
        ></iframe>
      </div>
    </React.Fragment>
  );
}

export default SpotifyPlayer;
