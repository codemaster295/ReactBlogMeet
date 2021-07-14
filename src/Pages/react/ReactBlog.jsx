import React from 'react'
import BlogBox from '../../blogbox/BlogBox'

import './react.scss'

function ReactBlog() {
    const title = ["What Is react?",
        "how to make a react project",
        "latest news of the react",
        "The Plan for React 18",
        "React v17.0",
        "React v16.9.0 and the Roadmap",
        "React v16.8: The One With Hooks",
        "React 16.x Roadmap",
        "Introducing the React Profiler",
    ]
    const img = [
        "https://images.unsplash.com/photo-1581276879432-15e50529f34b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        "https://images.unsplash.com/photo-1579820010410-c10411aaaa88?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1374&q=80",
        "https://images.unsplash.com/photo-1561883088-039e53143d73?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        "https://lh3.googleusercontent.com/proxy/3sxwPD2xAMGNEjyk77li_6ndXu--a_WScihGe0I7pYCuo65yNHTpP1gejYcALVKtyg_XOKSM5-NG7JPGxmr3VIeCr8OBy3IsUJuJspo_a5nP2-ZflKE",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
        "https://miro.medium.com/max/7084/1*01NFIfuNYRyaRZM0t4lC8A.jpeg",
        "https://images.unsplash.com/photo-1591267990532-e5bdb1b0ceb8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1013&q=80",
        "https://images.unsplash.com/photo-1482062364825-616fd23b8fc1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        "https://images.unsplash.com/photo-1610986602726-19f650133f7a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1379&q=80"
    ]
   
    const time = [
        "1 minuites ago",
        "2 minuites ago",
        "3 minuites ago",
        "3 minuites ago",
        "1 hours ago",
        "1.5 hours ago",
        "3 hours ago",
        "2 days  ago",
        "3 days ago",
    ]
    const commentnumber = [

        "1.5K","500", "50"

    ]

        
    
    
    
   

    return (
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
    )
}

export default ReactBlog
