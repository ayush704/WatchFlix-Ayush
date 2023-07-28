import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Center } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react';
import Header from "./header";
import Footer from "./footer";

const baseURL = "https://image.tmdb.org/t/p/w500";
let config = {
  method: "get",
  maxBodyLength: Infinity,
  url: "https://api.themoviedb.org/3/trending/movie/day",
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMTExNmExODI3MGM2MjQwNDM2YjU5NTBkM2E5Nzk0MiIsInN1YiI6IjY0Yjc5MDQ0MTA5Y2QwMDBjN2IwOGI4NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6RvMsGmolIcMF89SdM8MndX6WvFp-k3BeR5Mve8iT4U",
    accept: "application/json",
  },
};

let config2 = {
  method: "get",
  maxBodyLength: Infinity,
  url: "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc",
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMTExNmExODI3MGM2MjQwNDM2YjU5NTBkM2E5Nzk0MiIsInN1YiI6IjY0Yjc5MDQ0MTA5Y2QwMDBjN2IwOGI4NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6RvMsGmolIcMF89SdM8MndX6WvFp-k3BeR5Mve8iT4U",
    accept: "application/json",
  },
};

let config3 = {
  method: "get",
  maxBodyLength: Infinity,
  url: "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=vote_average.desc&without_genres=99,10755&vote_count.gte=200",
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMTExNmExODI3MGM2MjQwNDM2YjU5NTBkM2E5Nzk0MiIsInN1YiI6IjY0Yjc5MDQ0MTA5Y2QwMDBjN2IwOGI4NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6RvMsGmolIcMF89SdM8MndX6WvFp-k3BeR5Mve8iT4U",
    accept: "application/json",
  },
};

const imgPrefix = "https://image.tmdb.org/t/p/w500";

function Movie() {
  const [image,setImage]= useState({})
  const [resData, setResData] = useState();
  const [resData2, setResData2] = useState();
  const [resData3, setResData3] = useState();
  const { id } = useParams();
  const navigate = useNavigate();
  console.log("id:", id);
  
  useEffect(() => {
    axios
      .request(config)
      .then((response) => {
        setResData(response.data?.results);
        console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  useEffect(() => {
    axios
      .request(config2)
      .then((response) => {
        setResData2(response.data?.results);
        console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  useEffect(() => {
    axios
      .request(config3)
      .then((response) => {
        setResData3(response.data?.results);
        console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {

    axios.request(config2).then((response) => {

      console.log("response is ", response.data);

      setImage(response.data);

      console.log("data is", image);

    });

  }, []);
  let images=image?.results;



  console.log("data pop:", resData);

 

  let filtered = resData?.filter((item, idx) => item?.id === +id);

  if (filtered?.length <= 0) {
    filtered = resData2?.filter((item, idx) => item?.id === +id);
  }

  if (filtered?.length <= 0) {
    filtered = resData3?.filter((item, idx) => item?.id === +id);
  }

  console.log("filter", filtered);
  let imgLink = imgPrefix + filtered?.[0]?.backdrop_path;
  return (
    <>
   <Header/>
    <div  className="page2"
      style={{
        display: "flex",
        flexDirection: "column",
        margin: "0",
        width: "100vw",
        gap: "10vh",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          margin: "0",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          width: "100vw",
        }}
      >
        <img
          src={imgLink}
          alt={filtered?.[0]?.title}
          style={{
            width: "88.79vw",
            minHeight: "32rem",
            maxHeight: "41.766rem",
            objectFit: "cover",
            borderRadius: "0.9375rem",
            // opacity: "100%",
          }}
        />
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            color:"#FFF",
            width:"78.79vw",
            position: "absolute",
            bottom: "1rem",
            marginLeft:"1vw",
            gap:"10vw"
            // fontSize:"59px"
          }}
        >
          <span className="movie-title" >{filtered?.[0]?.title}</span>
            <div
              style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "25vw",
              color:"#FFF",
              gap:"2rem",
            }}
          >
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
          
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="140"
              height="151"
              viewBox="0 0 140 151"
              fill="none"
              className="play-btn"
              onClick={() => {
                navigate("/trailer");
              }}
            
            >
              <g clip-path="url(#clip0_2_1274)">
                <path
                  d="M54.7026 101.067V50.9321L92.0675 75.9997L54.7026 101.067Z"
                  fill="white"
                />
                <path
                  d="M67 134.333C34.7825 134.333 8.66663 108.217 8.66663 75.9997C8.66663 43.7822 34.7825 17.6664 67 17.6664C99.2175 17.6664 125.333 43.7822 125.333 75.9997C125.333 108.217 99.2175 134.333 67 134.333ZM58.9616 55.0872C58.6106 54.853 58.2025 54.7184 57.781 54.6977C57.3595 54.677 56.9402 54.771 56.5679 54.9698C56.1956 55.1685 55.8842 55.4645 55.6667 55.8262C55.4493 56.1879 55.3341 56.6019 55.3333 57.0239V94.9756C55.3341 95.3976 55.4493 95.8115 55.6667 96.1733C55.8842 96.535 56.1956 96.831 56.5679 97.0297C56.9402 97.2285 57.3595 97.3225 57.781 97.3018C58.2025 97.2811 58.6106 97.1465 58.9616 96.9122L87.4225 77.9422C87.7426 77.7292 88.005 77.4405 88.1866 77.1016C88.3681 76.7627 88.4631 76.3842 88.4631 75.9997C88.4631 75.6153 88.3681 75.2368 88.1866 74.8979C88.005 74.559 87.7426 74.2702 87.4225 74.0572L58.9616 55.0872Z"
                  fill="#DA3714"
                />
              </g>
              <defs>
                <clipPath id="clip0_2_1274">
                  <rect
                    width="140"
                    height="150.075"
                    fill="white"
                    transform="translate(-0.000488281 0.54541)"
                  />
                </clipPath>
              </defs>
            </svg>
        
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          margin: "0",
          justifyContent: "flex-start",
          alignItems: "center",
          position: "relative",
        //   width: "100vw",
          
          gap: "3vw",
          marginLeft: "13vw",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="61"
          height="31"
          viewBox="0 0 61 31"
          fill="none"
        >
          <path
            d="M1.176 26.115V4.77722C2.21154 4.55188 3.07744 4.27746 3.74133 3.64382C4.43223 2.98439 4.8379 2.00506 5.13428 0.535982H56.1017C56.2538 1.78185 56.6625 2.78459 57.3652 3.51934C58.0613 4.24732 58.9943 4.65819 60.104 4.82059V26.1268C59.0914 26.3639 58.1815 26.8351 57.4768 27.5509C56.7654 28.2735 56.2859 29.2226 56.111 30.3723H5.19694C5.08591 29.1823 4.67055 28.2207 3.95977 27.4976C3.25042 26.7759 2.29229 26.3381 1.176 26.115Z"
            stroke="#727171"
            stroke-width="1.07196"
          />
          <path
            d="M14.0396 6.37793H9.72296V24.1547H14.0396V6.37793Z"
            fill="#727171"
          />
          <path
            d="M29.0734 6.37793V24.1547H25.3067L25.29 12.1487L23.79 24.1547H21.1067L19.54 12.4167L19.5234 24.1547H15.7567V6.37793H21.34C21.49 7.44989 21.6567 8.71838 21.8567 10.1655L22.4734 14.6857L23.4734 6.37793H29.0734Z"
            fill="#727171"
          />
          <path
            d="M35.1067 9.41516V21.1353C35.7234 21.1353 36.1067 21.0102 36.24 20.7244C36.3734 20.4564 36.4567 19.7239 36.4567 18.5447V11.6306C36.4567 10.8266 36.44 10.3085 36.39 10.0762C36.34 9.84395 36.24 9.68315 36.0734 9.57596C35.89 9.46876 35.5734 9.41516 35.1067 9.41516ZM30.79 6.37793H34.0067C36.09 6.37793 37.49 6.48513 38.2234 6.68165C38.9567 6.89605 39.5067 7.21764 39.89 7.70002C40.2734 8.16454 40.5067 8.68265 40.6067 9.27223C40.7067 9.84395 40.7567 10.9695 40.7567 12.6668V18.902C40.7567 20.4921 40.69 21.5641 40.54 22.1001C40.4067 22.6361 40.1567 23.0648 39.8067 23.3686C39.4567 23.6723 39.0234 23.8867 38.5234 24.0117C38.0067 24.1368 37.24 24.1904 36.2067 24.1904H30.7734L30.79 6.37793Z"
            fill="#727171"
          />
          <path
            d="M47.6568 13.7387C47.6568 12.9884 47.6068 12.506 47.5234 12.2737C47.4401 12.0415 47.2568 11.9343 46.9901 11.9343C46.7401 11.9343 46.5734 12.0415 46.4901 12.238C46.4068 12.4345 46.3734 12.9526 46.3734 13.7566V20.0276C46.3734 20.8137 46.4234 21.314 46.5068 21.5284C46.5901 21.7427 46.7568 21.8499 47.0234 21.8499C47.2901 21.8499 47.4568 21.7427 47.5401 21.5105C47.6234 21.2782 47.6568 20.7422 47.6568 19.8847V13.7387ZM46.3901 6.37793V10.6122C46.7401 10.1834 47.1068 9.86181 47.5401 9.64742C47.9568 9.43303 48.4234 9.32583 48.9068 9.32583C49.4734 9.32583 49.9734 9.41516 50.3901 9.61169C50.8068 9.80822 51.1234 10.0762 51.3401 10.4157C51.5568 10.7551 51.6901 11.0946 51.7401 11.434C51.7901 11.7556 51.8068 12.4703 51.8068 13.5422V20.0991C51.8068 21.171 51.7401 21.9571 51.6068 22.4931C51.4734 23.0112 51.1568 23.4758 50.6734 23.8509C50.1734 24.2261 49.5901 24.4227 48.9234 24.4227C48.4401 24.4227 47.9734 24.3155 47.5568 24.0832C47.1401 23.8509 46.7401 23.5115 46.4068 23.047L46.1401 24.1547H42.2734V6.37793H46.3901Z"
            fill="#727171"
          />
          <path
            d="M53.3898 8.4142H53.5564C53.7397 8.4142 53.9063 8.34276 53.9063 8.16416C53.9063 8.03915 53.823 7.89627 53.5564 7.89627C53.4897 7.89627 53.4398 7.89627 53.3898 7.91413V8.4142ZM53.3898 9.25361H53.1732V7.75339C53.2898 7.73553 53.4064 7.71767 53.573 7.71767C53.7896 7.71767 53.9229 7.77125 54.0062 7.82483C54.0895 7.89627 54.1395 7.98557 54.1395 8.12844C54.1395 8.3249 54.0229 8.44992 53.8729 8.48564V8.5035C53.9896 8.52136 54.0729 8.64637 54.1062 8.87855C54.1395 9.11073 54.1728 9.20003 54.1895 9.25361H53.9562C53.9229 9.20003 53.8896 9.07501 53.8563 8.87855C53.823 8.68209 53.7397 8.61066 53.5564 8.61066H53.4064L53.3898 9.25361ZM53.623 7.32476C53.0732 7.32476 52.6234 7.84269 52.6234 8.46778C52.6234 9.11073 53.0732 9.6108 53.6397 9.6108C54.2062 9.6108 54.6393 9.11073 54.6393 8.46778C54.6393 7.82483 54.1895 7.32476 53.623 7.32476ZM53.623 7.11044C54.3061 7.11044 54.8559 7.71767 54.8559 8.46778C54.8559 9.23574 54.3061 9.82511 53.6064 9.82511C52.9233 9.82511 52.3568 9.23574 52.3568 8.46778C52.3735 7.71767 52.9399 7.11044 53.623 7.11044Z"
            fill="#727171"
          />
        </svg>

        <span className="movie-rating">{filtered?.[0]?.vote_average}</span>
        <span className="movie-rating">2 h 30 min</span>
        <span className="movie-rating">
          {filtered?.[0]?.release_date.split("").slice(0, 4).join("")}
        </span>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          margin: "0",
          justifyContent: "flex-start",
          alignItems: "center",
          position: "relative",
        //   width: "100vw",
          gap: "3vw",
          marginLeft: "13vw",
        }}
      >
        <div className="movie-cat">
          <span className="movie-cat-text">Drama</span>
        </div>
        <div className="movie-cat">
          <span className="movie-cat-text">Action</span>
        </div>
        <div className="movie-cat">
          <span className="movie-cat-text">Fiction</span>
        </div>
        <div className="movie-cat">
          <span className="movie-cat-text">Fantasy</span>
        </div>
      </div>
      <div style={{ display: "flex", marginLeft: "7vw", width: "77.976vw" }}>
        <span className="movie-desc">{filtered?.[0]?.overview}</span>
      </div>
      

      <div className='trending' style={{marginTop:"40px",marginBottom:"20px", marginLeft:"110px",marginRight:"65px", boxSizing:"border-box"}} >
                      <div
                          style={{color: "#FFF",
                                  fontFamily: "Poppins",
                                  fontSize: "24px",
                                  fontStyle: "normal",
                                  fontWeight:" 600",
                                  lineHeight: "normal",
                                  marginBottom:'15px'}} >
                        More Like This
                      </div>

                  <div className="TrendingNow"style={{display:"flex",gap:"2em",overflow:"scroll" ,width:"80vw",boxSizing:"border-box"}}>

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

    </div>
    <Footer/>
    </>
  );
}

export default Movie;