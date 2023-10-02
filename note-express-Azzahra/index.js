const express = require("express");
const app = express();
const noteController = require("./controller/noteController");

//MIDDLEWARE
app.use(express.json())

// app.get("/", (req, res) => {
//     res.render('pages/index')
// })

app.post("/notes", noteController.createNote);



app.get("/notes", noteController.getAllNotes);

app.get("/notes/:id", noteController.getOneNote);

app.put("/notes/:id", noteController.updateOneNote);

app.delete("/notes/:id", noteController.deleteOneNote);

//PORT
app.listen(4500, () => {
    console.log("Server is running on port 4500")
})