import {useState} from "react";
export default function LikeButton(){
    let [isLiked,setisLiked]=useState(false)
    let toggle=() =>{
        setisLiked(!isLiked);
    }

    let likeStyle={color:"red"}
    return(
        <div>
            <p onClick={toggle}>
                {isLiked ? ( <i class="fa-regular fa-heart" style={likeStyle}></i>
                ): (
                    <i class="fa-solid fa-heart"></i>
                )
                }
            </p>
        </div>
    )
}