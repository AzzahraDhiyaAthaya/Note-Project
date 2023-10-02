const express = require("express");
const app = express();
const noteController = require("./controller/noteController");

app.use(express.json())


app.post("/notes", noteController.createNote);

app.get("/notes", noteController.getAllNotes);

app.get("/notes/:id", noteController.getOneNote);

app.put("/notes/:id", noteController.updateOneNote);

app.delete("/notes/:id", noteController.deleteOneNote);


app.listen(2000,() =>{
    console.log("Server is running on port 2000")
})