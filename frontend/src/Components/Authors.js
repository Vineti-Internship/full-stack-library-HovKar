import React from 'react';
import './App.css';

export class Authors extends React.PureComponent {
    state = {
      authors: []
    }
  
    async componentDidMount() {
      const result = await fetch('http://localhost:4000/authors');
      this.setState({authors: await result.json()});
    }
  
    render() {
      const { authors } = this.state;
  
      return (
        
        <React.Fragment>
           
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