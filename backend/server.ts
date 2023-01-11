const express = require('express');

const app = express();
const PORT = 5005;

app.use(express.json());
app.get('/', (req:any, res:any) => {
    res.send(`Welcome to typescript backend!`)
})

app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`))

