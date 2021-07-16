import React from 'react'
import BlogBox from '../../blogbox/BlogBox'
function BootStrap() {
    const title = ["What Is Bootstrap?",
    ]
    const img = [
        "https://images.unsplash.com/photo-1581276879432-15e50529f34b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    ]
    const time = [
        "1 minuites ago",
    ]
    const commentnumber = [
        "1.5K"
    ]
    return (
        <>
        <div className="blogbox" >
           {
               title.map((props ,i)=>
               <BlogBox
               title={title[i]}  
               time = {time[i]}
               img = {img[i]}
               commentnumber = {commentnumber[i]}       
                 />
               )
           }
        </div>
    </>
    )
}

export default BootStrap
