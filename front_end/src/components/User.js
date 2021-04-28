import React from 'react';

export default function User({Comment, id, feeling,thought,experience,deleteUser}){

    // const {name, id, dept} =props;
 
    //const {name, id, dept,email} =props.user;
 
     // const name= "shafayet";
     // const id= "12";
     // const dept= "CS";
 
     return(
         <div className='usermain'>
         {/* <h1> Name: {props.name}</h1>
         <p>  ID:  {props.id}</p>
         <p>  Dept:  {props.dept} </p> */}
 
        <h3>ID: {id}</h3>
			<p>
            Comment: {comment} <br/>
				feeling: {feeling} <br/>
				Thought: {thought} <br/>
                Experience: {experience} <br/>
			</p>	

 
          {/* <button onClick={myname}>Click</button> */}
          <button onClick={()=>deleteUser(id)}>Delete</button>
         </div>  
     )
 };