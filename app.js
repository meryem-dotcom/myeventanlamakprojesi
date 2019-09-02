const express = require('express');
const baseClass = require('./base/base');
const app = express();

app.get('/', (req, res) => {
    res.send('çalıştı. ');
});

app.listen(8084, () => {
    console.log('localhost:8082');
    //event oluşçak loglayayacak
    baseClass.emit('mincir', 'Uygulama şu tarihte ayağa kaltı: ');
});
