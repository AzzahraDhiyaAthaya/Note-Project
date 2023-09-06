import "../css/home.css";
import { React, useEffect, useState} from "react";
import axios from "axios";
import { Link } from "react-router-dom";


export default function Home() {

  

  const [noteData, setNoteData] = useState([])
  
  useEffect(() => {
    axios.get('https://note-be-blush.vercel.app/api/v1/note')
    .then(response => {
        console.log('data API', response);
        setNoteData(response.data.data)
    })
    .catch(err => {
        console.log('error: ', err);
    })
  }, [])

  // function Delete(){
  //   useEffect(() => {
  //       axios.get('https://note-be-blush.vercel.app/api/v1/note/1').then(res => console.log(res.data))
  //   })

    // function deleteRecord() {
    //     axios.delete('https://note-be-blush.vercel.app/api/v1/note')
    //     .then(() => {
    //         alert("data has deleted")
    //     })
    // }

    // const editById = id => {
    //   const newNote = noteData.map((note) => {

    //     if (note.id === id) {
    //       return {...note,
    //         title: prompt ("Title Baru :", note.title),
    //         description: prompt ("Description Baru :", note.description)
    //       }
    //     }

    //     return note;

    //   });

    //   setNoteData(newNote);

    // };

    const deleteById = id => {
      console.log(id)
      axios.delete('https://note-be-blush.vercel.app/api/v1/note/46')
      .then(() => {
        alert("Note Has Deleted")
        const newNote = noteData.filter ((note) => {
          return note.id !== id;
        });
        setNoteData(newNote);
      }).catch(err => {
        console.log('error:', err);
        alert("error : ", err)
      })
    }


    return( 

      // <Note post = {post}/>
      <>
      <hr/>
      <div className="bs">
        <br/>
        {noteData.map((note, index) => {
        return (
        <>
        <div className="note">
          <h3>{note.title}</h3>
          <hr/>
          <p>{note.description}</p>
          <div className="note__footer" style={{ justifyContent: "flex-end" }}>
            <Link to={`/editnote/${note.id}`}><button className="note__delete">Edit</button></Link>            
            <button className="note__delete" onClick={() => deleteById(note.id)}>Delete</button>
          </div>
        </div>
        <br/>
        <br/>
        </>
        )})}
      </div>
      </>
    )
  };
