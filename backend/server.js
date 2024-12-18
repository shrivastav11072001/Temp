const express = require('express');
const path = require('path');
const app = express();

const dirname = path.resolve();

app.use(express.static(path.join(dirname,"/frontend/dist")));

app.get("*", (req, res) => {
    res.sendFile(path.join(dirname,"frontend","dist","index.html")); // replace with your index.html file path
})

app.get('/', (req, res) => {
    console.log("Hello");
    
}
)
app.listen("5000",()=>{{
    console.log("Server is running on port 5000")
 }});
