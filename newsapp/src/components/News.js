import React, { useLayoutEffect, useSyncExternalStore } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";
import { useState, useEffect } from 'react';
const News = (props) => {

  News.defaultProps = {
    country: "in",
    pageSize: 5,
    category: "general"
  }
  News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
  }
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalresults] = useState(0);
  

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }



const updateNews = async () => {
  props.setProgress(10);
  const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=6156c6b6bb6d44bcb5eca5c0809c8896&page=${page}&pageSize=${props.pageSize}`;
  setLoading(true)
  let data = await fetch(url);
  let parseddata = await data.json();
  console.log(parseddata);
  setArticles(parseddata.articles)
  setTotalresults(parseddata.totalResults)
  setLoading(false);
  props.setProgress(100);
}
useEffect(() => {
  document.title = `${capitalizeFirstLetter(props.category)}-"Samachar"`
  updateNews();
}, []);
const handleprevclick = async () => {
  console.log("previous");
  setPage(page - 1)
  updateNews();
}
const handlenextclick = async () => {
  setPage(page + 1)
  updateNews();
}
const fetchMoreData = async () => {

  const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=6156c6b6bb6d44bcb5eca5c0809c8896&page=${page+1}&pageSize=${props.pageSize}`;
  setPage(page + 1)
  setLoading(true);
  let data = await fetch(url);
  let parseddata = await data.json();
  console.log(parseddata);
  setArticles(articles.concat(parseddata.articles))
  setTotalresults(parseddata.totalResults)
  setLoading(false)

};


return (
  <div className='container my-3'>
    <h2 className='text-center' style={{ margin: "30px 0px" ,marginTop: "90px" }}>Top {capitalizeFirstLetter(props.category)} Headlines</h2>
    {loading && <Spinner />}
    <InfiniteScroll
      dataLength={articles.length}
      next={fetchMoreData}
      hasMore={articles.length !== totalResults}
      loader={<Spinner />}
    >
      <div className="container">
        <div className="row" style={{ display: "flex", flexWrap: "wrap" }}>
          {/*!loading &&*/ articles.map((element) => {
            return <div className="col-md-4" key={element.url} >  <NewsItem title={element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0, 88) : ""} imageurl={element.urlToImage} newsUrl={element.url} author={element.author ? element.author : "unknown"} date={element.publishedAt} />
            </div>
          })}
        </div>
      </div>
    </InfiniteScroll>
    {/* <div className="container d-flex justify-content-between">
            <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={handleprevclick}>&larr; Previous</button>
            <button disabled={this.state.page + 1 > Math.ceil(totalResults / props.pageSize)} type="button" className="btn btn-dark" onClick={handlenextclick}>Next &rarr;</button>
          </div> */}

  </div>
)
}
export default News
