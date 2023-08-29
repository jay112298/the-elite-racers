import React from 'react'
import { Card } from './BlogCard.st'

const BlogCard = (props) => {
  return (
    <Card authorImg={props.authorImg}>
        
        <img className='cover-img' src={props.imgUrl} alt="Cover Page" />
        <div className="info">
            <img src={props.authorImg} alt="Author Image" className='author-pic'/>
            <div className="blog-info">
                <div className="title">{props.title}</div>
                <div className="author-name">{props.authorName}</div>
            </div>
        </div>
    </Card>
  )
}

export default BlogCard