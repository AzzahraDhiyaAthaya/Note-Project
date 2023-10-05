const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

//middleware
app.use(cors());
app.use(express.json());

//routes

//create / post
app.post("/notes", async(req, res) => {
    try {
      const {title, description} = req.body;
      const newNote = await pool.query("INSERT INTO notes (title,description) VALUES($1,$2) RETURNING *",[title, description]);
      res.status(201).json({
          message: "success",
          data: newNote.rows[0]
      });
    } catch (err) {
        console.error(err.message);
    }
})

// get all notes
app.get("/notes", async(req, res) => {
    try {
        const allNotes = await pool.query("SELECT * FROM notes");
        res.json(allNotes.rows)
    } catch (err) {
        console.error(err.message);
    }
})

//get one note 
app.get("/notes/:id", async(req, res) => {
    try {
        const {id} = req.params;
        const note = await pool.query("SELECT * FROM notes WHERE id = $1", [id]);
        
        res.json(note.rows[0])
    } catch (err) {
        console.error(err.message);
    }
})

//update note
app.put("/notes/:id", async(req, res) => {
    try {
        const {id} = req.params;
        const {title, description} = req.body;
        const updateNote = await pool.query("UPDATE notes SET title = $1, description = $2 WHERE id = $3 RETURNING *", [title, description, id]);
        res.json("Note Has Been Updated!")
    } catch (err) {
        console.error(err.message);
    }
})

//delete a note
app.delete("/notes/:id", async(req, res) => {
    try {
        const {id} = req.params;
        const deleteNote = await pool.query("DELETE FROM notes WHERE id = $1", [id]);
        res.json("Note Has Been Deleted!")
    } catch (err) {
        console.error(err.message);
    }
})

app.listen(5000, () => {
    console.log("server has started on port 5000");
})