// React setup
import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap'; // Removed Jumbotron and CardColumns
// Import the 'auth' setup
import Auth from '../utils/auth';

const SavedBooks = ({ savedBooks, handleBookDelete }) => {
  return (
    <Container fluid className='text-light bg-dark'>
      <Container>
        <h1>Saved Books</h1>
        <Row>
          {savedBooks.length ? (
            savedBooks.map((book) => (
              <Col key={book.bookId} md={4} className='mb-4'>
                <Card border='dark'>
                  {book.image ? (
                    <Card.Img src={book.image} alt={`The cover for ${book.title}`} variant='top' />
                  ) : null}
                  <Card.Body>
                    <Card.Title>{book.title}</Card.Title>
                    <p className='small'>Authors: {book.authors.join(', ')}</p>
                    <Card.Text>{book.description}</Card.Text>
                    <Button
                      variant='danger' // Updated for Button variant usage
                      className='btn-block'
                      onClick={() => handleBookDelete(book.bookId)}>
                      Delete this Book!
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))
          ) : (
            <p>No saved books to display</p>
          )}
        </Row>
      </Container>
    </Container>
  );
};

export default SavedBooks;
