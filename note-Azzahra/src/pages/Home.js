import "../css/home.css";
import { React, useEffect, useState} from "react";
import axios from "axios";
import Layout from "./Layout";
import { useParams } from "react-router-dom";


export default function Home() {

  // const [post, setPost] = useState();
  // // const {id} = useParams()

  // const baseURL = "https://jsonplaceholder.typicode.com/posts/1";


  // useEffect(() => {

  //   // if(id) {
  //   //   axios.get('https://jsonplaceholder.typicode.com/posts/${id}')
  //   //   .then(res => {
  //   //     console.log(res)
  //   //     setPost(res.data)
  //   //   })
  //   //   .catch(err => {
  //   //     console.log(err)
  //   //   })
  //   // }

  //   axios.get(baseURL).then((response) => {
  //     setPost(response.data);
  //   });

  // //   getAllPosts();
  // }, []);

  // // const getAllPosts = () => {
  // //   axios.get(`${baseURL}past`)
  // //   .then((response) => {
  // //       const allPosts = response.data.posts;
  // //       setPost(allPosts);
  // //   })
  // //   .catch(error => console.error(`Error ${error}`));
  // // }

  // if (!post) return null

  const [noteData, setNoteData] = useState([])
  
  useEffect(() => {
    axios.get('https://note-be-blush.vercel.app/api/v1/note')
    .then(result => {
        console.log('data API', result);
        setNoteData(result.data.data)
    })
    .catch(err => {
        console.log('error: ', err);
    })
  }, [])

  // function deleteRecord() {
  //       axios.delete('https://note-be-blush.vercel.app/api/v1/note/7')
  //       .then(() => {
  //           alert("data has deleted")
  //       })
  //   }

  const editById = id => {
    const newNote = noteData.map((note) => {

      if (note.id === id) {
        return {...note, 
          title: prompt ("title Baru : ", note.title),
          description: prompt ("Description Baru : ", note.description)
        
        }
      }

      return note;

    });

    setNoteData(newNote);
  };


  const deleteById = id => {
    setNoteData(oldData => {
      return oldData.filter(note => note.id !== id)
      
    })
    alert("Note Has Deleted")
  }

    return( 

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
            <button className="note__delete" onClick={() => editById(note.id)}>Edit</button>
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
