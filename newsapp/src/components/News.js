  import React, { Component } from 'react'
  import NewsItem from './NewsItem'
  import Spinner from './Spinner'
  import PropTypes from 'prop-types'
  import InfiniteScroll from "react-infinite-scroll-component";
  export default class News extends Component {
    static defaultProps = {
      country: "in",
      pageSize: 5,
      category: "general"
    }
    static propTypes = {
      country: PropTypes.string,
      pageSize: PropTypes.number,
      category: PropTypes.string
    }
    capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }
    constructor(props) {
      super(props);
      console.log("hello")
      this.state = {
        articles: [],
        loading: false,
        page: 1,
        totalResults:0
      }
      document.title = `${this.capitalizeFirstLetter(this.props.category)}-"Samachar"`
    }
    async updateNews() {
      this.props.setProgress(10);
      const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=6156c6b6bb6d44bcb5eca5c0809c8896&page=${this.state.page}&pageSize=${this.props.pageSize}`;
      this.setState({ loading: true });
      let data = await fetch(url);
      let parseddata = await data.json();
      console.log(parseddata);
      this.setState({
        articles: parseddata.articles,
        totalResults: parseddata.totalResults,
        loading: false
      })
      this.props.setProgress(100);
    }
    async componentDidMount() {
      // let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=6156c6b6bb6d44bcb5eca5c0809c8896&page=1&pageSize=${this.props.pageSize}`;
      // this.setState({loading:true});
      // let data =await fetch(url);
      // let parseddata= await data.json();
      // console.log(parseddata);
      // this.setState({articles:parseddata.articles,
      //   totalResults:parseddata.totalResults,
      //   loading:false
      // })
      this.updateNews();
    }
    handleprevclick = async () => {
      console.log("previous");
      // let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=6156c6b6bb6d44bcb5eca5c0809c8896&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
      // this.setState({loading:true});
      // let data =await fetch(url);
      // let parseddata= await data.json();
      // console.log(parseddata);
      // this.setState({
      //   page: this.state.page-1,
      //   articles:parseddata.articles,
      //   loading:false
      // })
      this.setState({ page: this.state.page - 1 })
      this.updateNews();
    }
    handlenextclick = async () => {
      console.log("next");
      //   if(this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize)){

      //   }
      //   else{
      //   let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=6156c6b6bb6d44bcb5eca5c0809c8896&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
      //   this.setState({loading:true});
      //   let data =await fetch(url);
      //   let parseddata= await data.json();
      //   console.log(parseddata);
      //   this.setState({
      //     page: this.state.page+1,
      //     articles:parseddata.articles,
      //     loading:false
      //   })
      // }
      this.setState({ page: this.state.page + 1 })
      this.updateNews();
    }
    fetchMoreData = async() => {
      this.setState({page:this.state.page+1})
      const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=6156c6b6bb6d44bcb5eca5c0809c8896&page=${this.state.page}&pageSize=${this.props.pageSize}`;
      this.setState({ loading: true });
      let data = await fetch(url);
      let parseddata = await data.json();
      console.log(parseddata);
      this.setState({
        articles: this.state.articles.concat(parseddata.articles),
        totalResults: parseddata.totalResults,
        loading: false
      })
      
    };

    render() {
      return (
        <div className='container my-3'>
          <h2 className='text-center' style={{ margin: "30px 0px" }}>Top {this.capitalizeFirstLetter(this.props.category)} Headlines</h2>
          {/* {this.state.loading && <Spinner />} */}
          <InfiniteScroll
            dataLength={this.state.articles.length}
            next={this.fetchMoreData}
            hasMore={this.state.articles.length!==this.state.totalResults}
            loader={<Spinner/>}
          >
            <div className="container">
            <div className="row" style={{ display: "flex", flexWrap: "wrap" }}>
              {/*!this.state.loading &&*/ this.state.articles.map((element) => {
                return <div className="col-md-4" key={element.url} >  <NewsItem title={element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0, 88) : ""} imageurl={element.urlToImage} newsUrl={element.url} author={element.author ? element.author : "unknown"} date={element.publishedAt} />
                </div>
              })}
              </div>
              </div>
          </InfiniteScroll>
          {/* <div className="container d-flex justify-content-between">
            <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handleprevclick}>&larr; Previous</button>
            <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handlenextclick}>Next &rarr;</button>
          </div> */}

        </div>
      )
    }
  }
