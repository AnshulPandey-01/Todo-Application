const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb://localhost:27017/TODO_DB', {
    useNewUrlParser: true, useUnifiedTopology: true
}).then(() => {
    console.log('Connected to DB');
}).catch((error) => {
    console.log(error);
});

app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));
app.set("view engine", "ejs");

app.use(require('./routes/index'));
app.use(require('./routes/todo'));

const PORT = process.env.PORT || 3003;
app.listen(PORT, () => {
    console.log(`sever listening on port: ${PORT}`);
});