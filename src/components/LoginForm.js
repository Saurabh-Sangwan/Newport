import React from 'react'
import {useState} from 'react'
import User from './User'
function LoginForm() {
    const [username, changeUser] = useState("default")
    console.log({username})
    return (
        
            <div class="jumbotron">
                <pre>
          <form >
              <br/>
                       Username: <input className='username'
                 type="text" 
                  placeholder='username'
                  onChange={(a) => changeUser(a.target.value) }></input>
                   
                          <p> <br/>     
                <button class="btn btn-primary btn-lg" type="submit" >SUBMIT</button>
                </p>
   </form>
            <User name={`${username}`}>
            </User>
            </pre>
</div>
            
       
    )
}

export default LoginForm
 