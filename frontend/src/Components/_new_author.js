import React from 'react';

export const NewAuthor = (props) => {
    let formFields = {}
   
    return(
      <React.Fragment>
        <h1>Add author</h1>
        <form>
        <input ref={input => formFields.name = input} placeholder='Enter your full name'/><br/>
        <input ref={input => formFields.email = input} placeholder='Enter your email'/><br/>
        <button>Submit</button>
        </form>
      </React.Fragment>
      
    )
  }
