export const authEndpoint = 'https://accounts.spotify.com/authorize'; 

const redirectUri = 'http://localhost:3000/typeOfWork/'; // Page the user will be redirected to when they log in.
const clientId = 'cf93bf76d9084537bca4e8c3b10c7208'; // Client ID from Spotify API dashboard

const scopes = [ // Array holding the scope of the limitations of what the app will be able to do.
    'user-read-currently-playing',
    'user-read-recently-played',
    'user-read-playback-state',
    'user-top-read',
    'user-modify-playback-state'
];


export const getTokenFromUrl = () => {
    return window.location.hash
      .substring(1)
      .split("&")
      .reduce((initial, item) => {
        var parts = item.split("=");
        initial[parts[0]] = decodeURIComponent(parts[1]);
  
        return initial;
      }, {});
  };

//Log in URL with values from above ^^^ which will be passed to the Log in link href.
export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join('%20')}&response_type=token&show_dialogue=true`;  