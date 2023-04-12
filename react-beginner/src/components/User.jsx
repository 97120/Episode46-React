
import { memo } from "react";

const User = ({id,userName,age,gender,email}) =>
{
    console.log( "Render User Component.", age );
    const newAge = age + Math.round( Math.random() );
    return (
        <div>
            Hello Myanmar
        <h1>id: {id}</h1>
        <h1>Name: {userName}</h1>
        <h1>age: {age}</h1>
        <h1>gender: {gender}</h1>
            <h1>email: {email}</h1>
            
    </div>) 
}

export default memo( User );

