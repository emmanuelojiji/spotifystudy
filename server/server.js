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
        clientId:'0d76e8d73e444adcb46564aa27fdd2ea',
        clientSecret:'10cb2ad04dee4b94880739b9dec70edf'

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