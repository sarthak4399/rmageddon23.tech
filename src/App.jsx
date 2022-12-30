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
const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <NavBar />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Routes>
          <Route path="/" element={<Hero />} />{" "}
        </Routes>
      </div>
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Routes>
          <Route path="/" element={<Attraction />} />{" "}
        </Routes>

        <Routes>
          <Route path="/reward" element={<Reward />} />{" "}
        </Routes>
        <Routes>
          <Route path="/register" element={<Registation />} />{" "}
        </Routes>
        <Routes>
          <Route path="/card" element={<Card />} />
        </Routes>
        <Footer />
      </div>
    </div>
  </div>
);

export default App;
