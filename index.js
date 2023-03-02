const Express = require('express');
const {join} = require('path');

const app = Express();

app.set('port', process.env.PORT || 3000);

app.use(Express.json());

app.get('/', (req, res) => {
    res.sendFile(join(__dirname + '/public' + '/ONE-PIECE-API-DATA.xlsx'));
});

app.listen(app.get('port'), () => {
    console.log(`Server running on port ${app.get('port')}`);
});