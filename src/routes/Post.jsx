import React from "react";
import '../style.css';
import {DisplayArticle1} from "./DisplayArticle1";
import {DisplayQuestion} from './DisplayQuestion';
import {useState} from "react";


const Post = (props)=>{
const [show,setShow]=useState(false);
const [show2,setShow2]=useState(false);

  /*function isClicked() {
    <displayArticle1 />
  }*/

  return (
    <div className="App">


      <h2>New Post</h2>
      <div style={{display: "flex", justifyContent:"space-around",  alignItems: "center"}}>
        <p>Select Post Type:</p>
        <label onClick={()=>setShow(!show)}>Question
          <input type="radio" name="radio" />
        </label>
        <label onClick={()=>setShow(!show)}>Article
          <input type="radio"  name="radio" />

        </label>
        


      </div>
      <h2>What do you want to ask or share?</h2>

      <div checked="checked">
        <span class="checkmark">
          {show ? <DisplayArticle1/> : <DisplayQuestion/> }
        </span>
      </div>

      <button style={{position: "absolute", top:"690px", left: "1378px", width: "200px", fontWeight:"bold"}}class="button">Post</button>

      






    </div>
  );
}



export default Post;