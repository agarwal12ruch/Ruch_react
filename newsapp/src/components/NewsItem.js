import React from 'react'
 
const NewsItem =(props)=>{
   
 
    let {title,description,imageurl,newsUrl,author,date}=props;
    return (
    <div className='my-3'>
        <div className="card">
        <img src={!imageurl?"https://akm-img-a-in.tosshub.com/indiatoday/images/story/202403/oneplus-12-233119986-16x9.jpeg?VersionId=g_76e2gRDhUq3xlVyh4IIJ5x3fWykhzg":imageurl} className="card-img-top" alt="..."/>
        <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <p class="card-text"><small class="text-body-secondary">By {author} on {new Date(date).toGMTString()}</small></p>
        <a href={newsUrl}  rel="noreferrer" target="_blank" className="btn btn-sm btn-dark">Read more</a>
    </div>
</div> 
      </div>
    )
  }
export default NewsItem