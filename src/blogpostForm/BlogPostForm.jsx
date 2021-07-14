import React from 'react'
import { useState } from 'react';
import BlogBox from '../blogbox/BlogBox';

import "./style.scss";

const BlogPostForm = () =>{
    const [status , setStatus] = useState(false);
    const [name , updateName] = useState("")

 
    return (
        <div>
            
            <form>
   
             <div className="title">
                 <label>Title</label>
                 <input type="text" id="title" onChange={(e) => {
                     updateName(e.target.value)
                     setStatus(false)
                 }}/>
             </div>
             <div className="img">
                 <input type="file"  />
             </div>
            <button type="button" onClick={() =>setStatus(true) }>click Me</button>

            </form>
            {
                status ? 
                <React.Fragment>
                    <h1 className="titleName">{name}</h1>
                </React.Fragment>
                :null
            }
            <BlogBox />
           

        </div>
    );
}
export default BlogPostForm;