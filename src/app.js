import "./styles/app.scss";

import { Hero } from "./components/Hero/hero.component";
import { CardList } from "./components/CardList/card-list.component";
import { Pagination } from "./components/Pagination/pagination.component";

import { API_URL } from "./constants/api.constants";

import { Toaster } from "react-hot-toast";
import toast from "react-hot-toast";

import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [loading, setLoading] = useState(false);
  const [workouts, setWorkouts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  const getApiEndpoint = async (apiEndpoint) => {
    setLoading(true);
    try {
      const response = await axios.get(apiEndpoint);
      if (response.status !== 200) {
        setWorkouts([]);
        setLoading(false);
        return;
      }
      console.log(response.data.hits.hits);
      setWorkouts(response.data.hits.hits);
      setLoading(false);
    } catch (error) {
      toast.error(error.message);
      setWorkouts([]);
      setLoading(false);
    }
  };

  useEffect(() => {
    getApiEndpoint(API_URL);
  }, []);

  // Get current posts
  const indexOfLastItem = currentPage * postsPerPage;
  const indexOfFirstItem = indexOfLastItem - postsPerPage;
  const currentWorkouts = workouts.slice(indexOfFirstItem, indexOfLastItem);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="App">
      <Toaster position="top-right" reverseOrder={false} />
      <Hero></Hero>
      <div id="workouts" className="section">
        <CardList cards={currentWorkouts} loading={loading}></CardList>
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={workouts.length}
          paginate={paginate}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
}

export default App;
