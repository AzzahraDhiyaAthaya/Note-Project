import "../css/addNote.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Editnote() {
  const navigation = useNavigate();
    const [post, setPost] = useState ({
      title: '',
      description: ''
    })

    useEffect(() => {
        axios.get('https://note-be-blush.vercel.app/api/v1/note/44').then(res => console.log(res.data.data))
    }, [])

    const handleInput = (event) => {
      setPost({...post, [event.target.name]: event.target.value})
    }  
    
    function handleSubmit(event) {
        event.preventDefault()
        console.log(post)
        axios.put('https://note-be-blush.vercel.app/api/v1/not/44', post)
        .then(res =>{
          console.log('data API', res);
            alert("Note has update")
            navigation('/')
        })
        .catch(err =>{
            alert(err.res.data.eror)
        })
    }

    return(
      <>
      <hr/>
      <div className="addNote">
        <h1>Update your note...</h1>
        <hr/>
        <div>
        <form onSubmit={handleSubmit}>
          <label for="fname">Title :</label><br/>
          <input type="text" onChange={handleInput} name="title" placeholder="type..."/><br/>
          <br/>
          {/* <label for="name">Body :</label><br/>
          <input type="text" onChange={handleInput} name="body" placeholder="type.."/><br/> */}
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

// const Editnote= () => {
//     return (
//       <>
//         <hr/>
//         <h1>Contact Me</h1>
//       </>
//     )
//   };
  
  export default Editnote;