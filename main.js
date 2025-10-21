import express from "express";


const app = express();
const PORT = 5173;



app.get('/', (req, res) => {
    res.json({ msg: "Hello students!" })
})


// CRUD functon of movies

// R - For Reading
app.get('/movies', () => {

})

// C - For creating movies
app.post('./movies', () => {

    })
    // U -For Updating movies
app.put('/movies/id', () => {

})

// D- For Deleting movies

app.delete('./movies/id', () => {

})
app.listen(PORT, () => {
    console.log(`The server is Running at http://localhost:${5173}`);


})