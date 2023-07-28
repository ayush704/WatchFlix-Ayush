// ImageCarousel.js
import React, { useState,useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import axios from "axios";
import "./App.css";
import Rating from '@mui/material/Rating';
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react';
import {useNavigate} from "react-router-dom"
import ReactPlayer from 'react-player'
import { CloseButton } from '@chakra-ui/react'

const baseURL = "https://image.tmdb.org/t/p/w500";
function ImageCarousel() {
  const navigate = useNavigate();
  const [image,setImage]= useState({})
  const [image2,setImage2]= useState({})
  const [isPlaying, setIsPlaying] = useState(false);
  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc",
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMTExNmExODI3MGM2MjQwNDM2YjU5NTBkM2E5Nzk0MiIsInN1YiI6IjY0Yjc5MDQ0MTA5Y2QwMDBjN2IwOGI4NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6RvMsGmolIcMF89SdM8MndX6WvFp-k3BeR5Mve8iT4U",
      accept: "application/json",
    },
  };

  let config2 = {
    method: "get",
    maxBodyLength: Infinity,
    url: "https://api.themoviedb.org/3/trending/movie/day",
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMTExNmExODI3MGM2MjQwNDM2YjU5NTBkM2E5Nzk0MiIsInN1YiI6IjY0Yjc5MDQ0MTA5Y2QwMDBjN2IwOGI4NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6RvMsGmolIcMF89SdM8MndX6WvFp-k3BeR5Mve8iT4U",
      accept: "application/json",
    },
  
  };


  useEffect(() => {

    axios.request(config).then((response) => {

      console.log("response is ", response.data);

      setImage(response.data);

      console.log("data is", image);

    });

  }, []);

  useEffect(() => {

    axios.request(config2).then((response) => {

      console.log("response is ", response.data);

      setImage2(response.data);

      console.log("data is", image);

    });

  }, []);

let images=image?.results;
let images2=image2?.results;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll:1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    
    <div className="imageCarousel" style={{height:"auto",padding:"5px", marginTop:"10px"}}>
    
      <Slider {...settings} style={{position:'relative',display:isPlaying ?  "none" : "block"}} >
        {images?.map((image, index) => (
          <div className='home' >
            
             <img src={`${baseURL}${image.backdrop_path}`} alt={`Image ${index + 1}`}/>
        
                <div className='descp' style={{position:'absolute',display:'flex',flexDirection:'column', top:"6vh", marginLeft:'4vw',}}>

                <div className='title' style={{width:'68vw',}} >
                  <p
                  style={{
                  color: "#FFF",
                  fontFamily: "Oswald",
                  fontSize: "96px",
                  fontStyle: "normal",
                  fontWeight: "700",
                  lineHeight: "normal",
                  margin: "0",
                  overflow: 'hidden', whiteSpace:'nowrap',textOverflow: 'ellipsis', textAlign:"left"
                  // zIndex:"20",
                }}>
                  {image?.original_title}
                 </p>
                 </div>
                 <div className='content' style={{width:'37.5vw',}}>
                  <p 
                  style={{
                  color: '#FFF',
                  fontFamily: 'Overpass', 
                  fontSize: '18px',
                  fontStyle: 'normal',
                  fontWeight: '500',
                  lineHeight: '24px', 
                  letterSpacing: '0.54px',
               }}>
                    {image?.overview}
                 </p>
                 </div>
                 <div className='ratting' style={{marginTop:'20px'}}>
                 <Rating name="read-only" value={image?.vote_average/2} readOnly  />
                 </div>
             
                <div className='watchbutton' style={{display:"flex",gap:"40px", alignItems:"center"}} >
                  <button className='button' style={{display:'flex',justifyContent:'center',alignItems:'center',marginTop:'20px',width: '11.657vw',height: '2.976vw',flexShrink: '0',borderRadius: '1.786vw',
                   background: '#DA3714',gap:'15px',border:'none',}} onClick={() => {/*navigate(`/movies/${image?.id}`)*/ setIsPlaying(true); console.log(isPlaying);}}>

                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="18" viewBox="0 0 16 18" fill="none">
                      <path d="M14.75 7.70096C15.75 8.27831 15.75 9.72169 14.75 10.299L2.375 17.4438C1.375 18.0211 0.125 17.2994 0.125 16.1447L0.125 1.85529C0.125 0.700587 1.375 -0.0210977 2.375 0.556252L14.75 7.70096Z" fill="white"/>
                    </svg>Watch Now</button>


                    {/* <div className='plussign' style={{display:'flex',flexDirection:'column',width: '1.984vw',flexShrink:' 0'}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 31 31" fill="none">
                        <g clip-path="url(#clip0_1_170)">
                          <path d="M14.5 14.25V6.75H17V14.25H24.5V16.75H17V24.25H14.5V16.75H7V14.25H14.5Z" fill="white"/>
                        </g>
                        <defs>
                          <clipPath id="clip0_1_170">
                            <rect width="30" height="30" fill="white" transform="translate(0.75 0.5)"/>
                          </clipPath>
                        </defs>
                      </svg>
                      

                    <p className='watchlist'>Watchlist</p>  
                    </div> */}
                    <div className="btn-holder">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="31"
                height="31"
                viewBox="0 0 31 31"
                fill="none"
              >
                <g clipPath="url(#clip0_1_170)">
                  <path
                    d="M14.5 14.25V6.75H17V14.25H24.5V16.75H17V24.25H14.5V16.75H7V14.25H14.5Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_170">
                    <rect
                      width="30"
                      height="30"
                      fill="white"
                      transform="translate(0.75 0.5)"
                    />
                  </clipPath>
                </defs>
              </svg>
              <span className="btn-holder-text">WATCHLIST</span>
            </div>
            <div className="btn-holder">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="31"
                height="31"
                viewBox="0 0 31 31"
                fill="none"
              >
                <g clipPath="url(#clip0_1_176)">
                  <path
                    d="M17.7408 21.3255L12.0933 18.2453C11.5512 18.7834 10.8619 19.149 10.1123 19.2959C9.36274 19.4429 8.58644 19.3646 7.88129 19.071C7.17614 18.7774 6.5737 18.2816 6.14992 17.6461C5.72614 17.0106 5.5 16.2638 5.5 15.5C5.5 14.7362 5.72614 13.9894 6.14992 13.3539C6.5737 12.7184 7.17614 12.2226 7.88129 11.929C8.58644 11.6354 9.36274 11.5571 10.1123 11.7041C10.8619 11.851 11.5512 12.2166 12.0933 12.7547L17.7408 9.67453C17.5471 8.76576 17.687 7.81765 18.1349 7.00355C18.5828 6.18946 19.3088 5.56379 20.1801 5.24097C21.0514 4.91814 22.0098 4.91973 22.88 5.24545C23.7502 5.57116 24.4741 6.19923 24.9193 7.01481C25.3645 7.83038 25.5012 8.77896 25.3045 9.68707C25.1078 10.5952 24.5908 11.4022 23.848 11.9604C23.1052 12.5186 22.1863 12.7909 21.2593 12.7273C20.3323 12.6637 19.4592 12.2686 18.7996 11.6141L13.152 14.6943C13.2647 15.2255 13.2647 15.7745 13.152 16.3057L18.7996 19.3859C19.4592 18.7314 20.3323 18.3363 21.2593 18.2727C22.1863 18.2091 23.1052 18.4814 23.848 19.0396C24.5908 19.5978 25.1078 20.4048 25.3045 21.3129C25.5012 22.221 25.3645 23.1696 24.9193 23.9852C24.4741 24.8008 23.7502 25.4288 22.88 25.7546C22.0098 26.0803 21.0514 26.0819 20.1801 25.759C19.3088 25.4362 18.5828 24.8105 18.1349 23.9964C17.687 23.1824 17.5471 22.2342 17.7408 21.3255Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_176">
                    <rect
                      width="30"
                      height="30"
                      fill="white"
                      transform="translate(0.25 0.5)"
                    />
                  </clipPath>
                </defs>
              </svg>
              <span className="btn-holder-text">SHARE</span>
            </div>

                </div>


                </div>
      </div>

        ))}
       
      </Slider>

      
      {isPlaying&&<><ReactPlayer width='100%'height='100%' light={<img width="100%" height="100%" src="https://images.hdqwalls.com/wallpapers/mission-impossible-dead-reckoning-part-one-5k-poster-8l.jpg"/>} url="https://zee-demo.s3.ap-south-1.amazonaws.com/Mission_+Impossible+%E2%80%93+Dead+Reckoning+Part+One+_+Official+Trailer+(2023+Movie)+-+Tom+Cruise.mp4" controls={true} playing={isPlaying}></ReactPlayer>
      <CloseButton className="closeButton"  style={{}} onClick={() => setIsPlaying(false)}/></>}
     

      <div className='trending' style={{marginTop:"40px",marginBottom:"20px"}} >
                      <div
                          style={{color: "#FFF",
                                  fontFamily: "Poppins",
                                  fontSize: "24px",
                                  fontStyle: "normal",
                                  fontWeight:" 600",
                                  lineHeight: "normal",
                                  marginBottom:'15px'}} >
                          Trending Now
                      </div>

                  <div className="TrendingNow"style={{display:"flex",gap:"2em",overflow:"scroll" ,width:"80vw",}}>

                {images?.map((image,index)=>{

                  return(
                      <Card className='card'
                            style={{
                              width: "146.293px",
                              height: "216.796px",
                              flexShrink: "0",
                              }}
                              onClick={()=>navigate(`/movies/${image?.id}`)}
                              >
                        <img
                            style={{
                              width: "146.293px",
                              height: "216.796px",
                              cursor:"pointer",
                              objectFit:"cover",
                              borderRadius:'5px'
                            }}
                            src={`${baseURL}/${image?.backdrop_path}`} />
                      </Card>
                    );
                })}
                </div>
      </div>

      <div className='Sci-Fi' style={{marginTop:"40px",marginBottom:"20px"}}>
                      <div
                          style={{color: "#FFF",
                                  fontFamily: "Poppins",
                                  fontSize: "24px",
                                  fontStyle: "normal",
                                  fontWeight:" 600",
                                  lineHeight: "normal",
                                  marginBottom:'15px'}} >
                          Sci-Fi
                      </div>

                  <div className="Sci-Fi"style={{display:"flex",gap:"2em",overflow:"scroll" ,width:"80vw"}}>

                {images2?.map((image,index)=>{

                  return(
                      <Card className='card'
                            style={{
                              width: "146.293px",
                              height: "216.796px",
                              flexShrink: "0",}}
                              onClick={()=>navigate(`/movies/${image?.id}`)}>
                        <img
                            style={{
                              width: "146.293px",
                              height: "216.796px",
                              cursor:"pointer",
                              objectFit:"cover",
                              borderRadius:'5px'
                            }}
                            src={`${baseURL}/${image.backdrop_path}`} />
                      </Card>
                    );
                })}
                </div>
      </div>
    </div>
  );
}

export default ImageCarousel;
