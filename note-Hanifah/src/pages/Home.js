import "../css/home.css";
import { React, useEffect, useState} from "react";
import axios from "axios";


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

    function deleteRecord() {
        axios.delete('https://note-be-blush.vercel.app/api/v1/note/7')
        .then(() => {
            alert("data has deleted")
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
              <button className="note__delete" onClick={deleteRecord}>Delete</button>
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
