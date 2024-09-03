import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './components/header.jsx';
import Footer from './components/footer.jsx';
import Loader from './components/Loader.jsx'; // Import the Loader component

function App() {
  const [loginUser, setLoginUser] = useState(false);
  const [depositPopUp, setDespositPopUp] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay (e.g., fetching data, waiting for assets to load)
    setTimeout(() => {
      setLoading(false);
    }, 1000); // Adjust the time as needed
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className='mainBg max-w-screen h-full mx-auto'>
      <Header setLoginUser={setLoginUser} loginUser={loginUser} setDespositPopUp={setDespositPopUp} depositPopUp={depositPopUp} />
      <Outlet context={[setLoginUser, loginUser, setDespositPopUp, depositPopUp]} />
      <Footer />
    </div>
  );
}

export default App;
