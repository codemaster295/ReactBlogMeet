import React from 'react'
import './blogbox.scss'

function BlogBox(props) {
    return (

        <section className="container">
           <div className="box">
               <div className="title">{props.title}</div>
               <img src={props.img} alt="" />
               <div className="summary">{props.summary}</div>   
           </div>
        </section>

    )
}

export default BlogBox
