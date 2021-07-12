import React, { useState } from 'react'
import BlogBox from '../../blogbox/BlogBox'
import Sidebar from '../../sidebar/Sidebar'
import './react.scss'

function ReactBlog() {
    const title = ["how to make a react project ",
        "how to make react component",
        "news about the latest updates of react"
    ]
    const link = [
        "click here to know more",
        "click here to know more",
        "cleck here to know more"
    ]
    const time = [
        "3 hours ago",
        "1.5 hours ago",
        "2 minuites ago"
    ]
    const commentnumber = [

        "1.5","500", "50"

    ]

        
    
    
    
   

    return (
        <div className="blogbox" >
           {
               title.map((props ,i)=>
               <BlogBox
               title={title[i]} 
               link = {link[i]} 
               time = {time[i]}
               commentnumber = {commentnumber[i]}  
                 
                 />
               )
           }
         
        </div>
    )
}

export default ReactBlog
