import styles from "./style";
// import {
//   Reward,
//   Footer,
//   Navbar,
//   Hero,
//   Attraction,
//   Registation,
//   Card,
// } from "./components";
import NavBar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Attraction from "./Components/Attraction";
import Reward from "./Components/Reward";
import Registation from "./Components/Registation";
import Card from "./Components/Card";
import Footer from "./Components/Footer";
import { Route, Routes } from "react-router-dom";
import Loader from "./Components/Loader";
import ReactGA from "react-ga";
ReactGA.initialize("G-QCC2FVMKR9");
const App = () => {
  // const [isLoading, setLoading] = useState(false);
  // const [loading, setLoading] = useState(true);
  // useEffect(() => {
  //   setLoading(true);
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 1500);
  // }, []);useEffect(() => {
  ReactGA.pageview(window.location.pathname + window.location.search);

  return (
    // <div>
    //   {loading ? (
    //     <Loader loading={loading} />
    //   ) : (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <NavBar />
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Attraction />
          <Reward />
          <Registation />
          <Card />
          <Footer />
        </div>
      </div>
    </div>
    //   )}
    // </div>
  );
};
export default App;
