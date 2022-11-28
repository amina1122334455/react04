import Home from "./pages/Home/Home";
import Footer from "./Layout/Footer/Footer";
import Header from "./Layout/Header/Header";
import './scss/style.scss'
import Brand from "./Layout/Brand/Brand";
import Arrival from "./Layout/Arrival/Arrival";
import Populir from "./Layout/Populir/Populir";
import About from "./Layout/About/About";



function App() {
  return (
    <>
      <Header/>
      <main>
        <Brand/>
        <Arrival/>
        <Popular/>
        <About/>
        <Home/>
      </main>
      <Footer/>
    </>
  );
}

export default App;
