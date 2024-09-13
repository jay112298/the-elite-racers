import React from "react";  
import { BlogWrap } from "./BlogWidget.st";  
import BlogCard from "./BlogCard";  
import { Link } from "react-router-dom";  
import blog11 from "../../assets/blogs/blog11.webp"  
import blog21 from "../../assets/blogs/blog21.webp"  
import blog32 from "../../assets/blogs/blog32.jpg"  
import blog41 from "../../assets/blogs/blog41.avif"  

const BlogWidget = () => {  
  const images = {  
    author: "TheEliteRacers",  
  };  

  const handleLinkClick = () => {  
    window.scrollTo({ top: 0, behavior: 'smooth' });  
  };  

  return (  
    <BlogWrap>  
      <div className="header">  
        <div className="wedge"></div>  
        <div className="text">  
          Blog <span>Posts</span>  
        </div>  
      </div>  
      <div className="content">  
        <div className="BlogCards">  
          <Link to="/blog1" style={{ textDecoration: 'none' }} onClick={handleLinkClick} >  
            <BlogCard  
              imgUrl={blog11}  
              authorImg={images.authorImg}  
              title="Tech Explained: Formula 1 Halo"  
              authorName={images.author}  
            />  
          </Link>  
        </div>  
        <div className="BlogCards">  
          <Link to="/blog2" style={{ textDecoration: 'none' }} onClick={handleLinkClick}>  
            <BlogCard  
              imgUrl={blog21}   
              authorImg={images.authorImg}  
              title="F1 Cars Technology"  
              authorName={images.author}  
            />  
          </Link>  
        </div>  
        <div className="BlogCards">  
          <Link to="/blog3" style={{ textDecoration: 'none' }} onClick={handleLinkClick}>  
            <BlogCard  
              imgUrl={blog32}  
              authorImg={images.authorImg}  
              title="How Data Works in Formula 1"  
              authorName={images.author}  
            />  
          </Link>  
        </div>  
        <div className="BlogCards">  
          <Link to="/blog4" style={{ textDecoration: 'none' }} onClick={handleLinkClick}>  
            <BlogCard  
              imgUrl={blog41}   
              authorImg={images.authorImg}  
              title="Beginner's Guide to F1 Tyres"  
              authorName={images.author}  
            />  
          </Link>  
        </div>  
      </div>  
    </BlogWrap>  
  );  
};  

export default BlogWidget;