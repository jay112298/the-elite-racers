import React from 'react';
import { Card } from './BlogCard.st';
import EliteLogo from "../../assets/elite-logo.svg";

const BlogCard = (props) => {
  return (
    <Card authorImg={EliteLogo}>
        <img className='cover-img' src={props.imgUrl} alt="Cover Page" />
        <div className="info">
            <img src={EliteLogo} alt="Author Logo" className='author-pic' />
            <div className="blog-info">
                <div className="title">{props.title}</div>
                <div className="author-name">{props.authorName}</div>
            </div>
        </div>
    </Card>
  );
}

export default BlogCard;