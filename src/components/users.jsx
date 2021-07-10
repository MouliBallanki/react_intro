import React, { useState , useEffect } from "react";



const User = (props) =>{
    const [planet , setplanet] = useState("Earth")
    
    // componentDidMount
    useEffect(() =>{
        // heavy computation
        console.log("component mounting..");

        // componentWillUnmount
        return console.log("bye bye...")
    },[]);

    // compomentDidUpdate
    // shouldComponentUpdate
    useEffect(() =>{
        console.log("planet was changed ...");
    },[planet]);

    
   return (
        <div>
            <h1>
                {props.name}
            </h1>
            <p>
                {props.desc}
            </p>
            <button onClick = {() => setplanet("jupiter")}> {planet}</button>
        </div>
    );
};

export default User;