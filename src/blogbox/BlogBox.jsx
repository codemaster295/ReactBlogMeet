import React from 'react'
import './blogbox.scss'

function BlogBox(props) {
    return (

        <div className="cardWrapper">
            <div className="cardbox">

                <div className="card">
                    <img className="cardImage" src={props.img} alt="" />
                </div>

                <div className="info">
                    <div className="title link">{props.title}</div>
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
        </div>



    )
}

export default BlogBox
