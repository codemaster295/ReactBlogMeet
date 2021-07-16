import React from 'react'
import './blogbox.scss'

function BlogBox(props) {
    return (

        <div className="cardWrapper">
            <div className="cardbox">

                <div className="card">
                    <img className="cardImage" src={props.img} alt=""/>
                </div>

                <div className="info">
                    <div className="title link">{props.title}
                    <span className="summaryShort">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste consequatur blanditiis voluptatem dolorum fugiat accusamus adipisci nisi enim porro nobis.</span>
                    </div>
                    <div className="timeInfo">
                        <div className="timeSection">
                            <i className='bx bx-time'></i>
                            <span className="time">{props.time}</span>
                        </div>
                        <div className="commentsSection">
                            <i className='bx bx-comment-minus' ></i>
                            <span className="commentNumber">{props.commentnumber}</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>



    )
}

export default BlogBox
