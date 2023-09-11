import { useState } from "react";
import "../css/addNote.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Editnote () {

    const navigation = useNavigate();
    const [noteData, setNoteData] = useState([])
      const [post, setPost] = useState({
        title: '',
        description: ''
      })

    // useEffect(() => {
    //   axios.get('https://note-be-blush.vercel.app/api/v1/note/7').then(res => console.log(res.data.data))
    // }, [])

    const handleInput = (e) => {
      setPost({...post, [e.target.name]: e.target.value})
    }

    function handleSubmit(e) {
      e.preventDefault()
      console.log(post)
      axios.post('https://note-be-blush.vercel.app/api/v1/note', post)
      .then(result => {
        console.log('data API', result);
        alert("Note has Post");
        navigation('/')
      })
      .catch(err => {
        alert(err.response.data.error)
      })
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
          <input type="text" onChange={handleInput} name="description" placeholder="type..."/><br/><br/>
          <br/>
          <input className="submit" type="submit" value="Submit"/>
        </form> 
        </div>
      </div>
      </>
    );
  }
  
  export default Editnote;