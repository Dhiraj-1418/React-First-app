import { useState } from "react";

function FollowButton(){

    const [btnTxt,SetBtnTxt]=useState("Follow")

    return  <button id="btn" className="btn btn-primary " onClick={() => SetBtnTxt("Following") }>{btnTxt}</button>

    
   
}
export default FollowButton;