import { useEffect, useState } from "react";
import "../css/addNote.css";
import axios from "axios";

function Addnote () {

  
    const [noteData, setNoteData] = useState([]);
    const [post, setPost] = useState({
      title: '',
      body: ''
    })

    // useEffect(() => {
    //   axios.get('https://note-be-blush.vercel.app/api/v1/note/7').then(res => console.log(res.data.data))
    // }, [])

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

    const handleInput = (e) => {
      setPost({...post, [e.target.name]: e.target.value})
    }

    function handleSubmit(event) {
      event.preventDefault()
      console.log(post)
      axios.post('https://note-be-blush.vercel.app/api/v1/note', {post})
      .then(result => {
        console.log('data API', result);
        setPost(result.data.data)
      })
      .catch(err => console.log(err))
    }

    return(
      <>
      <hr/>
      <div className="addNote">
        <h1>Add new note...</h1>
        <hr/>
        <div>
        <form onSubmit={handleSubmit}>
          <label for="fname">Title :</label><br/>
          <input type="text" onChange={handleInput} name="title" placeholder="type..."/><br/>
          <br/>
          <br/>
          <label for="lname">Description :</label><br/>
          <input type="text" onChange={handleInput} name="body" value={noteData.description} placeholder="type..."/><br/><br/>
          <br/>
          <input className="submit" type="submit" value="Submit"/>
        </form> 
        </div>
      </div>
      </>
    );
  }
  
  export default Addnote;