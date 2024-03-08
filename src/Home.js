import React from "react";

const Home =()=>{
    return(
        <div>
            <h2>Ecommerce Store</h2>
            <a href="https://youtu.be/nUQEo-HXZgc?si=G_tSDc21aoS4LrI6" target="_blank" className="yt-btn">Youtube</a>
            <div>
                <h5>Subscribe to our newsletter</h5>
                <form action="/thanks">
                    <input type="email" required />
                    <button>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Home;