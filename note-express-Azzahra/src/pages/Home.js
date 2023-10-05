import "../css/home.css";
import { React, useEffect, useState} from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../css/home.css";
import {BsSearchHeart, BsTrashFill } from 'react-icons/bs';
import {MdDateRange} from 'react-icons/md';
import { 
  Button,
  Card,
  Col,
  Form,
  Container,
  InputGroup,
  Row,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";


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

  const [noteData, setNoteData] = useState([]);

  
  useEffect(() => {
    axios.get('http://localhost:5000/notes')
    .then(result => {
        console.log('data API', result);
        setNoteData(result.data)
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
    axios.delete(`http://localhost:5000/notes/${id}`)
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

    const [src, setSrc] = useState("");

    return( 

      <>

        {/* <Form className="d-flex my-5 px-3">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              onChange={(e) => {
                setSrc(e.target.value);
              }}
              aria-label="Search"
            />
          </Form> */}

      {/* <Form inline className="my-5 px-3">
        <Row>
          <Col xs="auto">
            <Form.Control
              type="text"
              placeholder="Search note..."
              onChange={(e) => {
                setSrc(e.target.value);
              }}
              className=" mr-sm-2"
            />
            
          </Col>
         
        </Row>
      </Form> */}

      {/* <Container>
      <Container>
    <Container>*/}
      <Container>
      <Row>
       {/* <Form className="my-5 d-flex">
       
            <Form.Control
              type="text"
              placeholder="Search note..."
              onChange={(e) => {
                setSrc(e.target.value);
              }}
              className=" mr-sm-2"
            />
            
          
              <BsSearchHeart />
         
      </Form> */}
      <Col>
      <Form inline className="my-5">
      <InputGroup>
        <InputGroup.Text id="basic-addon1">
          <BsSearchHeart />
        </InputGroup.Text>
        <Form.Control
          placeholder="Search Note..."
          aria-label="Search Note..."
          aria-describedby="basic-addon1"
          onChange={(e) => {
            setSrc(e.target.value);
          }}
        />
      </InputGroup>
      
      </Form>
      </Col>
      
      </Row>
      </Container>
      {/*</Container>
      </Container>
      </Container> */}

      <hr/>
        <Container>
        <Row xs={1} md={3} className="g-4">
        {noteData.filter((note) => {
          if (src == "") {
            return note;
          } else if (note.title.toLowerCase().includes(src.toLocaleLowerCase())){
            return note;
          }
        }).map((note, index) => {
        return (
        <>
        {/* <div className="note">
          <h3>{note.title}</h3>
          <hr/>
          <p>{note.description}</p>
          <div className="note__footer" style={{ justifyContent: "flex-end" }}>
            <Link to={`/editnote/${note.id}`}><Button className="note__delete">Edit</Button></Link>
            <a><Button className="note__delete" onClick={() => deleteById(note.id)}>Delete</Button></a>
          </div>
        </div>
        <br/>
        <br/> */}

          
{/*          
            <Card style={{ width: '18rem'}}>
              <Card.Body>
                <Card.Title>{note.title}</Card.Title>
                <Card.Text>
                  {note.description}
                </Card.Text>
                <Button variant="secondary">Go somewhere</Button>
              </Card.Body>
            </Card> */}
            <Col>
            <Card>
              <Card.Header as="h5">{note.title}</Card.Header>
              <Card.Body>
                <blockquote className="blockquote mb-0">
                  <p>
                    {' '}
                    {note.description}
                    {' '}
                  </p>
                  <footer className="blockquote-footer">
                     {/* <cite title="Source Title">{note.createdAt}</cite> */}
                     <MdDateRange size="16px" />{note.createdat}
                  </footer>
                </blockquote>
              </Card.Body>
              <Card.Footer className="text-muted">
              <Link to={`/editnote/${note.id}`}><Button variant="outline-primary">Edit</Button></Link>{' '}
              <a><Button variant="outline-danger" onClick={() => deleteById(note.id)}>Delete</Button></a>
              </Card.Footer>
            </Card>
            </Col>

        </>
        )})}
        </Row>
        </Container>
      </>
    )
  };
