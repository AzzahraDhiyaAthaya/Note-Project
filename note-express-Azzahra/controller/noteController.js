const pool = require("../db")

//Create a note
exports.createNote = async(req, res) => {
    try {
        const { title, description } = req.body;
        const newNote = await pool.query("INSERT INTO notes (title,description) VALUES($1) RETURNING *", [title, description])
        res.json(newNote.rows[0]);
    } catch (err) {
        console.error(err.message)
    }
}

//Get all Notes

exports.getAllNotes = async(req,res) => {
    try {
        const allNotes =  await pool.query("SELECT * FROM notes");
        res.json(allNotes.rows);
        
    } catch (err) {
        console.error(err.message)
    }
}
//Get One note
exports.getOneNote = async(req,res) => {
    try {
        const { id } = req.params;
        const oneNote =  await pool.query("SELECT * FROM notes WHERE id = $1", [id]);
        res.json(oneNote.rows[0]);
        
    } catch (err) {
        console.error(err.message)
    }
}

//Update a note

exports.updateOneNote = async(req, res) => {
    try {

        const {id} = req.params;
        const {title, description} = req.body

        const updatedNote = await pool.query("UPDATE notes SET description = $1 WHERE id= $2", [id, title, description])
        
        res.json("Note has been updated")
    } catch (err) {
        console.error(err.message)
        
    }
};

//Delete a note

exports.deleteOneNote = async(req, res) => {
    try {
        const {id} = req.params;
        const deleteNote = await pool.query("DELETE FROM notes WHERE id = $1", [id]);
        res.json("Note has been deleted");
    } catch (err) {
        console.error(err.message)
        
    }
}