import React from 'react';

export const NewAuthor = (props) => {
    let formFields = {}
   
    return(
      <React.Fragment>
        <h1>Add author</h1>
        
        <form onSubmit={ (e) => { props.handleFormSubmit(formFields.fullName.value, formFields.email.value); e.target.reset();}
}>
          <input ref={input => formFields.fullName = input} placeholder='Enter your full name'/><br/>
          <input ref={input => formFields.email = input} placeholder='Enter your email'/><br/>
          <button>Submit</button>
        </form>
      </React.Fragment>
      
    )
  }