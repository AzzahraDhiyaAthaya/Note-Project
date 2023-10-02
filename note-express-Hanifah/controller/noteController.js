const pool = require("../db")

exports.createNote = async(req, res) => {
    try{
        const { description } = req.body;
        const newNote = await pool.query("INSERT INTO nyoba (description) VALUES($1) RETURNING *", [description])
        res.json(newNote.rows[0]);
    } catch (err) {
        console.error(err.message)
    }
    
}

//Get all Notes
exports.getAllNotes = async(req,res) => {
    try {
        const allNotes =  await pool.query("SELECT * FROM nyoba");
        res.json(allNotes.rows);
        
    } catch (err) {
        console.error(err.message)
    }
}

//Get One note
exports.getOneNote = async(req,res) => {
    try {
        const { id } = req.params;
        const oneNote =  await pool.query("SELECT * FROM nyoba WHERE note_id = $1", [id]);
        res.json(oneNote.rows[0]);
        
    } catch (err) {
        console.error(err.message)
    }
}

//Update a note
exports.updateOneNote = async(req, res) => {
    try {

        const {id} = req.params;
        const {description} = req.body

        const updatedNote = await pool.query("UPDATE nyoba SET description = $1 WHERE note_id= $2", [description, id])
        
        res.json("Note has been updated")
    } catch (err) {
        console.error(err.message)
        
    }
};

//delete a note
exports.deleteOneNote = async(req, res) => {
    try {
        const {id} = req.params;
        const deleteNote = await pool.query("DELETE FROM nyoba WHERE note_id = $1", [id]);
        res.json("Note has been deleted");
    } catch (err) {
        console.error(err.message)
        
    }
}