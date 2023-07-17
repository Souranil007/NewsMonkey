import React from 'react'

const NewsItem = (props) => {
  let { title, description, imageUrl, newsUrl, author, date, source } = props;
  return (
    <div className="my-3">
      <div className="card">

        <div style={{
          display: 'flex',
          justifyContent: 'flex-end',
          position: 'absolute',
          right: '0'
        }}>
          <span className='badge rounded-pill bg-danger'>{source}</span>
        </div>
        <img src={!imageUrl ? "https://fdn.gsmarena.com/imgroot/news/21/08/xiaomi-smart-home-india-annoucnements/-476x249w4/gsmarena_00.jpg" : imageUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text"><small class="text-muted">By {!author ? "Unknown" : author} on {new Date(date).toGMTString}</small></p>
          <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
        </div>
      </div>
    </div>
  )
}


export default NewsItem


// import React, {useEffect, useState} from 'react'

// import NewsItem from './NewsItem'
// import Spinner from './Spinner';
// import PropTypes from 'prop-types'
// import InfiniteScroll from "react-infinite-scroll-component";

// const News = (props)=>{
//     const [articles, setArticles] = useState([])
//     const [loading, setLoading] = useState(true)
//     const [page, setPage] = useState(1)
//     const [totalResults, setTotalResults] = useState(0)
    
//     const capitalizeFirstLetter = (string) => {
//         return string.charAt(0).toUpperCase() + string.slice(1);
//     } 

//     const updateNews = async ()=> {
//         props.setProgress(10);
//         const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`; 
//         setLoading(true)
//         let data = await fetch(url);
//         props.setProgress(30);
//         let parsedData = await data.json()
//         props.setProgress(70);
//         setArticles(parsedData.articles)
//         setTotalResults(parsedData.totalResults)
//         setLoading(false)
//         props.setProgress(100);
//     }

//     useEffect(() => {
//         document.title = `${capitalizeFirstLetter(props.category)} - NewsMonkey`;
//         updateNews(); 
//         // eslint-disable-next-line
//     }, [])


//     const fetchMoreData = async () => {   
//         const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
//         setPage(page+1) 
//         let data = await fetch(url);
//         let parsedData = await data.json()
//         setArticles(articles.concat(parsedData.articles))
//         setTotalResults(parsedData.totalResults)
//       };
 
//         return (
//             <>
//                 <h1 className="text-center" style={{ margin: '35px 0px', marginTop: '90px' }}>NewsMonkey - Top {capitalizeFirstLetter(props.category)} Headlines</h1>
//                 {loading && <Spinner />}
//                 <InfiniteScroll
//                     dataLength={articles.length}
//                     next={fetchMoreData}
//                     hasMore={articles.length !== totalResults}
//                     loader={<Spinner/>}
//                 > 
//                     <div className="container">
                         
//                     <div className="row">
//                         {articles.map((element) => {
//                             return <div className="col-md-4" key={element.url}>
//                                 <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
//                             </div>
//                         })}
//                     </div>
//                     </div> 
//                 </InfiniteScroll>
//             </>
//         )
    
// }


// News.defaultProps = {
//     country: 'in',
//     pageSize: 8,
//     category: 'general',
// }

// News.propTypes = {
//     country: PropTypes.string,
//     pageSize: PropTypes.number,
//     category: PropTypes.string,
// }

// export default News
