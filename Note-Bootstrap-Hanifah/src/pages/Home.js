import "../css/home.css";
import { React, useEffect, useState} from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Button, Card, Col, Row, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";


export default function Home() {
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


  // const deleteById = id => {
  //   setNoteData(oldData => {
  //     return oldData.filter(note => note.id !== id)
      
  //   })
  //   alert("Note Has Deleted")
  // }

  const deleteById = id => {
    axios.delete('https://note-be-blush.vercel.app/api/v1/note/55')
    .then(() => {
      alert("Note Has Deleted")
      const newNote = noteData.filter((note) => {
        return note.id !== id;
      });
      setNoteData(newNote);
    })
    .catch(err => {
      console.log('error: ', err);
      alert("error: ", err)
    })
  }

    return( 

      <>
      <div className="bs">
        <br/>
        {noteData.map((note, index) => {
        return (
        <>
        {/* <div className="note">
          <h3>{note.title}</h3>
          <hr/>
          <p>{note.description}</p>
          <div className="note__footer" style={{ justifyContent: "flex-end" }}>
            <Link to={`/editnote/${note.id}`}><button className="note__delete">Edit</button></Link>
            <a><button className="note__delete" onClick={() => deleteById(note.id)}>Delete</button></a>
          </div>
        </div> */}

        <Container>
          <Row>
            <Col>
              <Card>
                <Card.Header as="h5">{note.title}</Card.Header>
                <Card.Body>
                  <Card.Title>{note.description}</Card.Title>
                  <Card.Text>
                    {note.createdAt}
                  </Card.Text>
                  <Link to={`/editnote/${note.id}`}><Button variant="outline-primary">Edit Note</Button></Link>{' '}
                  <Button variant="outline-primary" onClick={() => deleteById(note.id)}>Delete</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
        <br/>
        <br/>
        </>
        )})}
      </div>
      </>
    )
  };
