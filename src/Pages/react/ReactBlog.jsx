import React from 'react'
import BlogBox from '../../blogbox/BlogBox'
import Sidebar from '../../sidebar/Sidebar'

function ReactBlog() {
    const title = ["The Diverse React Navigation Ecosystem",
        "Leveraging React for Easy Image Management",
        "Native's Exponent with Charlie Cheever"]
        

    return (
        <div className="blogbox" >
           {
               title.map((props,i)=>
               <BlogBox title={title[i]}  />
               )
           }
        </div>
    )
}

export default ReactBlog
