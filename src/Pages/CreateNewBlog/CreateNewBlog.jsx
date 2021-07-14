import { render } from '@testing-library/react'
import React from 'react'
import { useState } from 'react'
import BlogBox from '../../blogbox/BlogBox'
import BlogPostForm from '../../blogpostForm/BlogPostForm'
import BlogMain from '../BlogMain/BlogMain'
import '../CreateNewBlog/createnewblog.scss'

// {/* <div>

// <form>
//  <div className="title">
//      <label>Title</label>
//      <input type="text" id="title" onChange={(e) => {
//          updateName(e.target.value)
//          setStatus(false)
//      }}/>
//  </div>
//  <div className="img">
//      <input type="file"  />
//  </div>
// <button type="button" onClick={() =>setStatus(true) }>click Me</button>
// </form>
// {
//     status ? 
//     <React.Fragment>
//         <h1 className="titleName">{name}</h1>
//     </React.Fragment>
//     :null
// } */}

const CreateNewBlog = () => {
    const [title, setTitle] = useState("Sample Title")
    const [summary, setSummary] = useState("It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose")
    const [image, setImage] = useState("https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80")
    const titleModified = (event) => {
        setTitle(event.target.value)
    }
    const summaryModified = (event) => {
        setSummary(event.target.value)
        
    }
    const imageLink = (event) =>{
        setImage(event.target.value)

    }
    const imageModified = (event) => {
        var img = document.getElementById("imageUploader")
        const reader = new FileReader();
        reader.addEventListener("load", () => {
            localStorage.setItem("recent-image", reader.result);
            const reacentImageDataUrl = localStorage.getItem("recent-image")
            if (reacentImageDataUrl) {
                setImage(reacentImageDataUrl);
            }
        })
        




        reader.readAsDataURL(img.files[0]);



    }
    const submitBlog = (event) => {
        event.preventDefault()
    }
    const formSubmit = () => {
        document.body.render(

        )
    }
    return (
        <>
      
        <div className="form">
            <form onSubmit={formSubmit}>
                <div className="title">
                    <label>Title:-</label>
                    <input type="text" onChange={titleModified} />
                </div>
                <div className="imageLink">
                    <label>Enter The Link</label>
                    <input type="url" onChange={imageLink}/>
                </div>
                <div className="image">
                    <label>Image:-</label>
                    <input type="file" id="imageUploader" onChange={imageModified} placeholder="Paste The Link Here" />
                </div>
                <div className="summary" onChange={summaryModified}>
                    <label>Details:-</label>
                    <textarea name="" id="" cols="50" rows="4"></textarea>
                </div>
                <button className="submit" onClick={submitBlog}>Submit</button>
            </form>
            
            <BlogMain img={image} title={title} summary={summary} />

        </div>
    </>
    )
}

export default CreateNewBlog
