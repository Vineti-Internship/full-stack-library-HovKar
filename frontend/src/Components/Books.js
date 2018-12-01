import React from 'react';
import './App.css';

export class Books extends React.PureComponent {
    state = {
      books: []
    }
  
    async componentDidMount() {
      const result = await fetch('http://localhost:4000/books');
      this.setState({books: await result.json()});
    }
  
    render() {
      const { books } = this.state;
  
      return (
        
        <React.Fragment>
           
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
  