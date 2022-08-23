import CustomCursor from "./CustomCursor";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Featured from "./components/Featured/Featured";
// import About from "./components/About/About";
import RecentProject from "./components/RecentProject/RecentProject";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <>
      <CustomCursor />
      <div>
        <Navbar />
        <Header />
        <Featured />
        {/* <About /> */}
        <RecentProject />
        <Footer />
      </div>
    </>
  );
}

export default App;
