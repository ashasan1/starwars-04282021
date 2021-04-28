const express = require('express');


const PORT = process.env.PORT || 3000;

//data
const characters = [
    {
        name: 'Yoda',
        role: 'Jedi MAster',
        age: 900,
        forcePoints: 2000,
        nickname: 'yoda'
    },
    {
        name: 'Darth Maul',
        role: 'Sith Apprentice',
        age: 200,
        forcePoints: 80,
        nickname: 'darthmaul'
    },
    {
        name: 'Obi Wan Kenobi',
        role: 'Jedi Master',
        age: 55,
        forcePoints: 200,
        nickname: 'obi'
    }
]
const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json())

app.use(express.static('./public'));


app.get('/characters/:character/:nickname', (request, response) => {
    console.log(`You are requesting character ${request.params.nickname}`)
    const requestedCharacter = characters.find(x => x.nickname === req.params.nicknames) > -l ? characters.find(x => x.nickname === req.params.nickname) : {name: 'No character found'}
    response.json(requestedCharacter)
});
app.get('/', function (req, res) {
    res.sendFile(`${__dirname}/public/views/index.html`);
});

app.get('/add', function (req, res) {
    res.sendFile(`${__dirname}/public/views/add.html`);
});

// app.get('/', function (req, res) {
//     res.send('Welcome to my Star wars App!')
// });

app.get('/api/characters', (req, res) => {
    console.log(`Sucessfully send characters to client`)
    res.json(characters)
})

app.post('/api/characters', (request, response) => {
    console.log('Creating new characater (stanman)');
    const newCharacter = request.body;
    characters.push(newCharacter);
    response.json(newCharacter);
    response.send('New Character Created....')
})

app.listen(PORT, function () {
    console.log(`Server is successfully running on http://localhost:${PORT}`);
})

