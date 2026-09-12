import {useState} from "react";
export default function Counter(){
    let [count,setcount]=useState(0);

    function iscount(){
        setcount(count+1);
        // console.log("count");
    }

    return(
        <div>
            <h3>count ={count}</h3>
            <button onClick={iscount}>Increase count</button>
        </div>
    )
}