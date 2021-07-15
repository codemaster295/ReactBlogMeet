import React from 'react'
import { useHistory } from "react-router-dom";
import { useState } from 'react'
import BlogMain from '../BlogMain/BlogMain'
import '../CreateNewBlog/createnewblog.scss'


import ReactBlog from '../react/ReactBlog'
const CreateNewBlog = (props) => {
    let history = useHistory();

    const [title, setTitle] = useState("Sample Title")
    const [card, setCard] = useState({})
    const [summary, setSummary] = useState("It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose")
    const [image, setImage] = useState("https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80")
    // set titles value to ehatever the user types in the input field
    const titleModified = (event) => {
        setTitle(event.target.value)
    }
    // set summary value to ehatever the user types in the input field
    const summaryModified = (event) => {
        setSummary(event.target.value)
    }
    // set image  link value to ehatever the user types in the input field
    const imageLink = (event) => {
        setImage(event.target.value)
    }
    // this function take dinput as a image file and then it converts in to the string and stores in to a local storage and then we can get this image whenever we want 
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
    let data = {
        blogTitle: title,
        blogImage: image,
        blogSummarry: summary
    }
    const notReload = (event) =>{
        event.preventDefault()
    }




    // this functions executs when the user submits the data and it stringify the data in a json format 
    const submitBlog = (event) => {
        console.log(title , image , summary)
        event.preventDefault()  
        let formData = {
            blogTitle: title,
            blogImage: image,
            blogSummarry: summary
        }
        console.log("card",formData);
    history.push({
        pathname: '/',
        state: { carddata:formData }
      })
    
        // localStorage.setItem('formData', JSON.stringify(formData));
    }
    // this function displays data in to the console which is stringified by the submitBlog function
    // const dispData = () => {/
    // console.log(JSON.parse(localStorage.getItem('formData')))
    // }

    return (
        <>


            <form>
                <h1 className="formTitle" onSubmit={notReload}>Please Submit Your Blogs Here </h1>
                <div className="title">
                    <label>Title:-</label>
                    <input type="text" onChange={titleModified} />
                </div>
                <div className="imageLink">
                    <label>Enter The Link</label>
                    <input type="url" onChange={imageLink} placeholder="Paste The Link Here" />
                </div>
                <div className="image">
                    <label>Image:-</label>
                    <input type="file" id="imageUploader" onChange={imageModified} />
                </div>
                <div className="summary" onChange={summaryModified}>
                    <label>Details:-</label>
                    <textarea name="" id="" cols="50" rows="4"></textarea>
                </div>
                <button className="submit" onClick={submitBlog}>Submit</button>
            </form>




        </>
    )
}

export default CreateNewBlog;
