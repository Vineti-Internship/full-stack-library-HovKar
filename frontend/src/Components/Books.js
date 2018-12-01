import React from 'react';
import { NewBook } from './_new_book';
import './App.css';

export class Books extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          books: []
        };
        this.handleFormSubmit = this.handleFormSubmit.bind(this)
        this.addNewBook = this.addNewBook.bind(this)
      }
    handleFormSubmit(author_id, title, description, rating){
    let body = JSON.stringify({'book': {author_id: author_id, title: title, description: description, rating: rating} })
    fetch('http://localhost:4000/books', {
      method: 'POST',
      headers: {
      'Content-Type': 'application/json'
      },
      body: body,
      }).then((response) => {return response.json()})
      .then((book)=>{
        this.addNewBook(book)
      })
    }
    addNewBook(book){
    this.setState({
      books: this.state.books.concat(book)
    })
  }  
    async componentDidMount() {
      const result = await fetch('http://localhost:4000/books');
      this.setState({books: await result.json()});
    }
  
    render() {
      const { books } = this.state;
  
      return (
        
        <React.Fragment>
            <NewBook handleFormSubmit={this.handleFormSubmit}/>      
            <h1>Books</h1>
            <table style = {{width: '90%'}}>            
                <tr>
                    <th style={{border: '1px solid black', textAlign: 'center'}}>Author ID</th>
                    <th style={{border: '1px solid black', textAlign: 'center'}}>Title</th>
                    <th style={{border: '1px solid black', textAlign: 'center'}}>Description</th>
                    <th style={{border: '1px solid black', textAlign: 'center'}}>Rating</th>
                </tr>
             
            {books.map(book => (

                <React.Fragment>
            
                    <tr>
                        <td style={{border: '1px solid black', textAlign: 'center'}}>{book.author_id}</td>
                        <td style={{border: '1px solid black', textAlign: 'center'}}>{book.title}</td>
                        <td style={{border: '1px solid black', textAlign: 'center'}}>{book.description}</td>
                        <td style={{border: '1px solid black', textAlign: 'center'}}>{book.rating}</td>
                    </tr>
           
                </React.Fragment>

                ))}

            </table>
          
        </React.Fragment>
      );
    }
  }
  