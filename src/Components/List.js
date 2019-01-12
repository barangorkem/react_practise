import React, { Component } from 'react';



const List=(props)=>{
return(
    <div>
   {props.user.map(x=>{
       return(
        <h5 key={x.id}> {x.name}--{x.username}</h5>
       )
   })}
    </div>
)
}

export default List;
