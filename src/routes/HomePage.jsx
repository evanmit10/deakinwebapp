import React from "react";
import {NavLink} from "react-router-dom";
import '../button.css';
import '../navButton.css';
import '../navButton2.css';
import '../search.css';
import CardList from '../CardList';


const HomePage =(props) => {
    return (
      <div>
        <div className="topnav">
          <p style={{position: "absolute", left: "0px", fontWeight:"bold", fontSize:"25px", top:"-17px"}}>DEV@Deakin 2022</p>
        <ul className="buttoncreation">
          <NavLink style={{positon: "relative", top: "0px", height:"24px", left: "1482px"}} type="submit" className="button" to='/login'>Login</NavLink>
        </ul>
        <ul className="buttoncreation">
          <NavLink style={{positon: "relative", top: "0px", height:"24px", left: "1382px"}} type="submit" className="button" to='/post'>Post</NavLink>
        </ul>
          <form action="/action_page.php">
          <input style={{width: "1110px", position: "relative", top:"-12px", left: "10px"}}type="text" placeholder="Search.." name="search" />
        </form>
        </div>
        <p style={{position: "absolute", top: "50px", left: "720px", fontSize: "54px", color: "black", fontWeight: "bold" }}>News</p>
        <CardList/>

      </div>
    );
}
export default HomePage;
