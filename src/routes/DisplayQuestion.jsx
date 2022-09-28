import React from "react";

export const DisplayQuestion = () => {
    return (
        <div>
            <form action="/action_page.php">
            <label for="title">Title       </label>
            <input style={{width: "95%", height: "30px"}} type="text" id="title" placeholder="Start your question with how, what, why, etc." name="title"></input>
            </form>

            <p style={{position: "absolute", left:"20px"}}>Describe your problem</p>
            <form>
                <label for="description"></label>
                <input style={{width: "97%", height: "250px", position:"absolute", top:"350px", left: "20px"}} type="text" id="description" name="description"></input>
            </form>

            <p style={{position: "absolute", left:"21px", top:"620px"}}>Tag</p>
            <form>
                <input style={{width: "1520px", height: "30px", position: "absolute", left: "52px", top:"630px" }} type="text" id="tag" placeholder="Please add up to 3 tags to describe what your article is about e.g, Java" name="tag"></input>
            </form>


        </div>
    )
};

