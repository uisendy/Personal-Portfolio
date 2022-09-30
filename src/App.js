import { useEffect, useRef, useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';

import useLocoScroll from './hooks/useLocoScroll';
function App() {
  const [preLoader, setPreLoader] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);

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
      {preLoader ? (
        <div className="loader-warper fixed flex flex-col justify-center items-center top-0 right-0 bottom-0 left-0 bg-black">
          <h1 className="text-white font-playFairSc ">Welcome</h1>
        </div>
      ) : (
        <div
          className={isNavOpen ? 'main-container nav__open' : 'main-container'}
          id="main-container"
          data-scroll-container
        >
          <Navbar isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
          <Outlet />
        </div>
      )}
    </>
  );
}

export default App;
