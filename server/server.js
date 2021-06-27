const express = require('express')
const cors = require('cors')
const SpotifyWebApi = require('spotify-web-api-node')


const app = express();

app.use(cors())
app.use(bodyParser.json())

app.post('/typeOfWork', (req, res) => {
    const code = req.body.code
    const spotifyApi = new SpotifyWebApi({
        redirectUri:'http://localhost:3000/typeOfWork/',
        clientId:'cf93bf76d9084537bca4e8c3b10c7208',
        clientSecret:'4492ca9d686f43babda545c099680e01'

    })

    spotifyApi.authorizationCodeGrant(code).then(data => {
        res.json({
            accessToken: data.body.access_token,
            refreshToken: data.body.refresh_token,
            expiresIn: data.body.expires_in
    })
}).catch(() => { 
    res.sendStatus(404)
})

})

app.listen(3001)