import React from "react";
import "../styles.css/BlogStyles.css";
import  blogList  from "./BlogApi";


const BlogDisplay = () => {
  return (
    <>
      <section className="main-card--cointainer">
        {blogList.map((e,key) => {
          return (
            <>
              <div className="card-container">
                <div className="card">
                  <div className="card-body">
                    <span className="card-number card-circle subtle">{e.id}</span>
                    <span className="card-author subtle">{e.authorName}</span>
                    <h2 className="card-title">{e.title}</h2>
                    <h3>{e.createdAt}</h3>
                    <span className="card-description subtle">
                    <a href={e.link}><div className="card-read">Click To Read</div></a>
                      {e.description}
                    </span>
                  </div>
                  {/* <img src={e.image} alt="images" className="card-media" /> */}
                  {/* <span className="card-tag subtle">Order Now</span> */}
                </div>
              </div>
            </>
          );
        })}
      </section>
    </>
  );
};

export default BlogDisplay;
