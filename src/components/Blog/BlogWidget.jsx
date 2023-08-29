import React from 'react'
import { BlogWrap } from './BlogWidget.st'
import BlogCard from './BlogCard'


const BlogWidget = () => {
  const images = {
    url : "https://media.formula1.com/image/upload/content/dam/fom-website/manual/Misc/2022manual/GettyImages-1437759309.jpg",
    authorImg: "https://media.licdn.com/dms/image/D4D03AQE0rTb4U7IPbA/profile-displayphoto-shrink_800_800/0/1673015037073?e=2147483647&v=beta&t=dj21vlyCANgkV0nKaMP_AxFsQXz3L7djUGf_YetCV6E",
    author: "Rohan Yedelloo",
    title: "ANALYSIS: What is ‘porpois..."
  }
  return (
    <BlogWrap>
        <div className="header">
            <div className="wedge"></div>
            <div className="text">Blog <span>Posts</span></div>
        </div>
        <div className="content">
            <div className="BlogCards"><BlogCard imgUrl={images.url} authorImg={images.authorImg} title={images.title} authorName={images.author}/></div>
            <div className="BlogCards"><BlogCard imgUrl={images.url} authorImg={images.authorImg} title={images.title} authorName={images.author}/></div>
            <div className="BlogCards"><BlogCard imgUrl={images.url} authorImg={images.authorImg} title={images.title} authorName={images.author}/></div>
            <div className="BlogCards"><BlogCard imgUrl={images.url} authorImg={images.authorImg} title={images.title} authorName={images.author}/></div>

        </div>
    </BlogWrap>
  )
}

export default BlogWidget