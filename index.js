const express = require('express');
const app = express();
var cors = require('cors');

app.use(
    cors({
        credentials: true,
        origin: true
    })
);
app.use(express.json())
app.options('*', cors());

app.get('/result4/', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers','Content-Type, Access-Control-Allow-Headers, x-test');
    res.setHeader('Content-Type', 'application/json');
    res.json({
        message: 'neveraskedfor',
        'x-body': req.body,
        'x-result': req.header('x-test')
    });
});

app.listen(process.env.PORT || 3000, function() {
    console.log('server running on port 3000', '');
});
