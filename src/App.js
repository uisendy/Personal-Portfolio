import { useEffect, useRef, useState } from 'react';
import CustomCursor from './CustomCursor';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import Featured from './components/Featured/Featured';
// import About from "./components/About/About";
import RecentProject from './components/RecentProject/RecentProject';
import Footer from './components/Footer/Footer';

import useLocoScroll from './hooks/useLocoScroll';
function App() {
  const [preLoader, setPreLoader] = useState(false);

  useLocoScroll(!preLoader);
  const [timer, setTimer] = useState(3);

  const id = useRef(null);

  const clear = () => {
    window.clearInterval(id.current);
    setPreLoader(false);
  };

  useEffect(() => {
    id.current = window.setInterval(() => {
      setTimer((timer) => timer - 1);
    }, 1000);
  }, []);

  useEffect(() => {
    if (timer < 0) {
      clear();
      setTimer(0);
    }
  }, [timer]);

  return (
    <>
      <CustomCursor />
      {preLoader ? (
        <div className="loader-warper fixed flex flex-col justify-center items-center top-0 right-0 bottom-0 left-0 bg-black">
          <h1 className="text-white font-playFairSc ">Welcome</h1>
        </div>
      ) : (
        <div
          className="main-container"
          id="main-container"
          data-scroll-container
        >
          <Navbar />
          <Header />
          <Featured />
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
