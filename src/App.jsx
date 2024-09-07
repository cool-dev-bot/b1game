import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './components/header.jsx';
import Footer from './components/footer.jsx';
import Loader from './components/Loader.jsx'; // Import the Loader component
import { loginContext } from '../context/context.jsx';
import axios from 'axios';

function App() {
  const [loginUser, setLoginUser] = useState(false);
  const [depositPopUp, setDespositPopUp] = useState(false);
  const [loading, setLoading] = useState(true);
  const [saveUserInfo, setSaveUserInfo] = useState(JSON.parse(localStorage.getItem('userInfo')))
  const [userDetails, setUserDetails] = useState({})

  async function handleGetUser() {
    try {
      // Set up the headers with the Bearer token
      const config = {
        headers: {
          Authorization: `Bearer ${saveUserInfo}`
        }
      };
      // Make the request with the configured headers
      const res = await axios.get(`https://roulette-backend-pearl.vercel.app/api/users/me`, config);
      // Log the response or handle it as needed
      setUserDetails(res.data);
    } catch (error) {
      // Handle any errors that occur during the request
      console.error('Error fetching user data:', error);
    }
  }

  useEffect(() => {
    // Simulate a loading delay (e.g., fetching data, waiting for assets to load)
    setTimeout(() => {
      setLoading(false);
    }, 1000);

    handleGetUser()
  }, [saveUserInfo]);

  if (loading) {
    return <Loader />;
  }

  return (
    <loginContext.Provider value={{ setSaveUserInfo, userDetails }} className=''>
      <div className='mainBg max-w-screen h-full mx-auto'>
        <Header setLoginUser={setLoginUser} loginUser={loginUser} setDespositPopUp={setDespositPopUp} depositPopUp={depositPopUp} />
        <Outlet context={[setLoginUser, loginUser, setDespositPopUp, depositPopUp]} />
        <Footer />
      </div>
    </loginContext.Provider>
  );
}

export default App;
