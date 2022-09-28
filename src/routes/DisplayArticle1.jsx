import React from "react";


export const DisplayArticle1 = () => {
        return (
            <div>
                <form action="/action_page.php">
                <label for="title">Title       </label>
                <input style={{width: "95%", height: "30px"}} type="text" id="title" placeholder="Enter a descriptive title" name="title"></input>
                </form>
                <p style={{position: "absolute", left:"20px"}}>Abstract</p>
                <form>
                    <label for="description"></label>
                    <input style={{width: "97%", height: "90px", position:"absolute", top:"350px", left: "20px"}} type="text" id="description" placeholder="Enter a 1-paragraph abstract" name="description"></input>
                </form>


                <p style={{position: "absolute", left:"20px", top:"442px"}}>Abstract Text</p>
                <form>
                    <label for="description"></label>
                    <input style={{width: "97%", height: "140px", position:"absolute", top:"480px", left: "20px"}} type="text" id="description" placeholder="Enter a 1-paragraph abstract" name="description"></input>
                </form>


                <p style={{position: "absolute", left:"21px", top:"640px"}}>Tag</p>
                <form>
                    <input style={{width: "1520px", height: "30px", position: "absolute", left: "52px", top:"650px" }} type="text" id="tag" placeholder="Please add up to 3 tags to describe what your article is about e.g, Java" name="tag"></input>
                </form>
            </div>
        )
}

