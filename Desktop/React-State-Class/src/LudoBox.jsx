import {useState} from "react";
export default function LudoBox(){
    let[moves,setmoves]=useState({blue:0,red:0,yellow:0,green:0})

    let updateblue=()=>{
        setmoves((prevmoves)=>{
           return {...prevmoves, blue:prevmoves.blue+1};
    })
}

        let updateyellow=()=>{
        setmoves((prevmoves)=>{
           return {...prevmoves, yellow:prevmoves.yellow+1};
    })
        }
        let updategreen=()=>{
        setmoves((prevmoves)=>{
           return {...prevmoves, green:prevmoves.green+1};
    })
}

        let updatered=()=>{
        setmoves((prevmoves)=>{
           return {...prevmoves, red:prevmoves.red+1};
    })

}

    return(
        <div>
            <p>Game Begin!</p>
            <p>Blue Moves={moves.blue}</p>
            <button style={{backgroundColor:"blue"}} onClick={updateblue}>+1</button>
            <p>Yellow Moves={moves.yellow}</p>
            <button style={{backgroundColor:"yellow"}} onClick={updateyellow}>+1</button>
            <p>Green Moves={moves.green}</p>
            <button style={{backgroundColor:"green"}} onClick={updategreen}>+1</button>
             <p>Red Moves={moves.red}</p>
            <button style={{backgroundColor:"red"}} onClick={updatered}>+1</button>
        </div>
    )
}