import React from 'react'
import './blogbox.scss'

function BlogBox(props) {
    return (

        <div className="cardWrapper">

          <div className="card">
                <img className="cardImage" src="https://images.unsplash.com/photo-1512466699224-9d8217244131?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=4b6f389eb54cb8e27ee8ee5d4040a5d7&dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb" alt="" />
                 <span className="dateCircle">11 May</span>
                 <span className="category">React</span>
          </div>

          <div className="info">
              <div className="title">{props.title}</div>
              <div className="link">{props.link}</div>
              <div className="timeSection">
              <i class='bx bx-time'></i>
              <span className="time">{props.time}</span>
              </div>
              <div className="commentsSection">
              <i class='bx bx-comment-minus' ></i>
              <span className="commentNumber">{props.commentnumber}</span>
              </div>
          </div>
        
        </div>
       
        

    )
}

export default BlogBox
