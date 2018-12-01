import React from 'react';

export const NewBook = (props) => {
    let formFields = {}
   
    return(
        <React.Fragment>
            <h1>Add book</h1>
            <form>
                <input ref={input => formFields.author_id = input} placeholder="Enter your ID"/><br/>
                <input ref={input => formFields.title = input} placeholder="Enter book's title"/><br/>
                <input ref={input => formFields.description = input} placeholder="Enter book's description"/><br/>
                <input ref={input => formFields.rating = input} placeholder="Enter book's rating (optional)"/><br/>
                <button>Submit</button>
            </form>

        </React.Fragment>

      
    )
  }
