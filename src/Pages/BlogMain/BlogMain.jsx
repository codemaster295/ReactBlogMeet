import React from 'react'
import '././blogmain.scss'

const BlogMain = (props) => {
    return (
        
            <div className="mainWrapper">
                <h1 className="title">{props.title}</h1>
                <img src={props.img} alt="" />
                <p className="summary">{props.summary}</p>
            </div>
    )
}

export default BlogMain
