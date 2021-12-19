import React from 'react'

function Feedback() {
    return (
        <div>
            <br/>
            <h3>Please leave your valuable feedback</h3><br/>
            <form action="">
                Name: <input type="text" maxLength="50" name="Name" placeholder="Enter your name"></input><br/><br/>
                Email: <input type="text" maxLength="50" name="email" placeholder="Email"></input><br/><br/>
                <textarea name="feedback" rows="10" cols="40" placeholder="type feedback here"></textarea><br/><br/>  
                <button type="submit" class="btn btn-success">Submit</button><br/><br/>
            </form>
        </div>
    )
}

export default Feedback
