import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
// import Layout from './Layout.jsx'
import App from './App.jsx'
import Movies from './Movies.jsx'
import ReactPlayer from 'react-player'
// import VideoPlayer from './VideoPlayer.jsx'
// import TVSeries from './TVSeries.jsx'
// import Documentaries from './Documentaries.jsx'
// import Categories from './Categories.jsx'
// import Login from './Login.jsx'
// import SignUp from './SignUp.jsx'
// import Notifications from './Notifications.jsx'
// import ErrorPage from './ErrorPage.jsx'
import './App.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Layout />}/> */}
        <Route path="/" element={<App />}/>
        <Route path="/movies/:id" element={<Movies />}/>
        <Route path="/trailer" element={<ReactPlayer width='100%'height='100%' light={<img width="100%" height="100%" src="https://images.hdqwalls.com/wallpapers/mission-impossible-dead-reckoning-part-one-5k-poster-8l.jpg"/>} url="https://zee-demo.s3.ap-south-1.amazonaws.com/Mission_+Impossible+%E2%80%93+Dead+Reckoning+Part+One+_+Official+Trailer+(2023+Movie)+-+Tom+Cruise.mp4" controls={true} playing={true}></ReactPlayer>}/>
        {/* <Route path='/movies'></Route> */}
        {/*<Route path="/movies/:idx" element={<VideoPlayer />}/>
        <Route path="/tvseries" element={<TVSeries />}/>
        <Route path="/documentaries" element={<Documentaries />}/>
        <Route path="/categories" element={<Categories />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/signup" element={<SignUp />}/>
        <Route path="/notifications" element={<Notifications />}/>
        <Route path="*" element={<ErrorPage />}/> */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>

)

