import React from 'react';
import { NewAuthor } from './_new_author';
import './App.css';

export class Authors extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      authors: []
    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
    this.addNewAuthor = this.addNewAuthor.bind(this)
  }
  handleFormSubmit(fullName, email){
    let body = JSON.stringify({author: {fullName: fullName, email: email} })
    fetch('http://localhost:4000/authors', {
      method: 'POST',
      headers: {
      'Content-Type': 'application/json'
      },
      body: body,
      }).then((response) => {return response.json()})
      .then((author)=>{
        this.addNewAuthor(author)
      })
    }
  addNewAuthor(author){
    this.setState({
      authors: this.state.authors.concat(author)
    })
  }  
  async componentDidMount() {
    const result = await fetch('http://localhost:4000/authors');
    this.setState({authors: await result.json()});
  }
  
  render() {
    const { authors } = this.state;  
      return (
        
        <React.Fragment>
            <NewAuthor handleFormSubmit={this.handleFormSubmit}/>
            <h1>Authors</h1>
            <table style = {{width: '90%'}}>
            <tr> 
                <th style={{border: '1px solid black', textAlign: 'center'}}>ID</th>
                <th style={{border: '1px solid black', textAlign: 'center'}}>Full Name</th> 
                <th style={{border: '1px solid black', textAlign: 'center'}}>email</th>
            </tr>
            {authors.map(author => (

             <React.Fragment>
             <tr>
                <td style={{border: '1px solid black', textAlign: 'center'}}>{author.id}</td>
                <td style={{border: '1px solid black', textAlign: 'center'}}>{author.fullName}</td>
                <td style={{border: '1px solid black', textAlign: 'center'}}>{author.email}</td>
             </tr>
             </React.Fragment>

            ))}
            </table>
          
        </React.Fragment>
      );
    }
  }