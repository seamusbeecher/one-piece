import express from 'express';
import Cors from 'cors';
import request from 'request';

//APP Config
const app = express();
const port = process.env.PORT || 8001;
const connection_url = 'https://onepiececover.com/api/chapters/';

//MiddleWare
app.use(express.json())
app.use(Cors());

//API ENDPOINTS
app.get('/', (req, res) => {
    responce.status(200).send('HELLO FROM SEAMUS')
})

app.get(`/onepiece`, (req, res) => {
    request(`${connection_url}${req.query.input}`, (err, responce, body) => {
        if (!err && responce.statusCode == 200) {
            const parsedBody = JSON.parse(body)
            const title = parsedBody["title"]
            const chapter = parsedBody["chapter"]
            const summary = parsedBody["summary"]
            const characters = parsedBody["characters"]
            const cover_images = parsedBody["cover_images"]
            res.send({ title, chapter, summary, characters, cover_images });
        }
    })
})


//Listner
app.listen(port, () => {
    console.log(`listening on loaclhost: ${port}`)
})