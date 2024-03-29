import SpotifyWebApi from "spotify-web-api-node";

const scopes = [
  "user-read-eamil",
  "playlist-read-private",
  "playlist-read-collaborative",
  "steamming",
  "user-read-private",
  "user-library-read",
  "user-top-read",
  // "user-library-modify",
  "user-read-plaback-state",
  "user-modify-playback-state",
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-follow-read",
].join(",");

const params = {
  scope: scopes,
};

const queryParamsString = new URLSearchParams(params);

const LOGIN_URL =
  "https://acounts.spotify.com/authorized?" + queryParamsString.toString();

const spotifyAPI = new SpotifyWebApi({
  clientId: process.env.SPOTIFY_CLIENT_ID,
  clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
});

export default spotifyAPI;

export { LOGIN_URL };
