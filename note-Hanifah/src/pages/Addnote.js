import "../css/addNote.css";
import React, { useEffect, useState } from "react";
import axios from "axios";

function Addnote () {
    const [post, setPost] = useState ({
      title: '',
      body: ''
    })

    // useEffect(() => {
    //     axios.get('https://note-be-blush.vercel.app/api/v1/note/7').then(res => console.log(res.data.data))
    // }, [])

    const handleInput = (event) => {
      setPost({...post, [event.target.name]: event.target.value})
    }  
    
    function handleSubmit(event) {
        event.preventDefault()
        console.log(post)
        axios.post('https://note-be-blush.vercel.app/api/v1/note', {post})
        .then(res => console.log(res.data.data))
        .catch(err => console.log('Eror', err))
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
          <label for="lname">Description:</label><br/>
          <input type="text" onChange={handleInput} name="description" placeholder="type..."/><br/><br/>
          <br/>
          <input className="submit" type="submit" value="Submit"/>
        </form> 
        </div>
      </div>
      </>
    );
  }
  
  export default Addnote;