import "./App.css";
import { useEffect, useState } from "react";
import Header from "./Layout/Header/Header";
import Main from "./Layout/Main/Main";
import Footer from "./Layout/Footer/Footer";

function App() {
  const [review, setReview] = useState();

  const fetchData = () => {
    try {
      fetch("https://randomuser.me/api/?results=4")
        .then((response) => response.json())
        .then((data) => setReview(data.results));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Header />
      <Main review={review} />
      <Footer />
    </>
  );
}

export default App;
