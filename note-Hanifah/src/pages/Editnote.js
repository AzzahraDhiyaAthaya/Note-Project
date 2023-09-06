import "../css/addNote.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function Editnote() {
  const navigation = useNavigate();
  const { id } = useParams();
    const [post, setPost] = useState ({
      id: 0,
      title: '',
      description: ''
    })

    useEffect(() => {
      console.log(id);
      axios.get(`https://note-be-blush.vercel.app/api/v1/note/${id}`)
        .then((res) => {
          console.log(res.data.data)
          setPost(res.data.data)
        });
    }, []);
       

    const handleInput = (event) => {
      setPost({...post, [event.target.name]: event.target.value})
    }  
    
    function handleSubmit(event) {
        event.preventDefault()
        console.log(post)
        axios.patch(`https://note-be-blush.vercel.app/api/v1/note/${post.id}`,{
          title: post.title,
          description: post.description,
        })
        .then(res =>{
          console.log('data API', res);
            alert("Note has update");
            navigation("/");
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
          <input value={post.title} type="text" onChange={handleInput} name="title" placeholder="type..."/><br/>
          <br/>
          {/* <label for="name">Body :</label><br/>
          <input type="text" onChange={handleInput} name="body" placeholder="type.."/><br/> */}
          <br/>
          <label for="lname">Description:</label><br/>
          <input value={post.description} type="text" onChange={handleInput} name="description" placeholder="type..."/><br/><br/>
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