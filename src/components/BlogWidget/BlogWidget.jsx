import React from 'react'
import { BlogWrap } from './BlogWidget.st'

const BlogWidget = () => {
  return (
    <BlogWrap>
        <div className="header">
            <div className="wedge"></div>
            <div className="text">Blog <span>Posts</span></div>
        </div>
        <div className="content">
            <div className="BlogCards">BlogCard</div>
            <div className="BlogCards">BlogCard</div>
            <div className="BlogCards">BlogCard</div>
            <div className="BlogCards">BlogCard</div>
        </div>
    </BlogWrap>
  )
}

export default BlogWidget