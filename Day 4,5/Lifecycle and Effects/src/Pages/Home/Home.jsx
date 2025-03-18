import React, { useState, useEffect, useContext } from "react";
import Loading from "../../Components/loaders/Loading";
import Posts from "../../Components/Posts/Posts";
import { StoreContaxt } from "../../Context/StoreContaxt";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);
  const {search} = useContext(StoreContaxt)

  /**
   * @description - It will retuarns all fetched data
   * @returns {Promise<void>} -
   */
  const fetchData = async () => {
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 500));
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    setPosts(data);
    setLoading(false);
  };

  /**
   * @description - "It will returns all result of search"
   */
  const handleSearch = () => {
    

    if (search?.length > 0) {
      const searchResult = posts.filter((post) => post.title.includes(search));      
      setPosts(searchResult);
    } else {
      fetchData();
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    setLoading(true);
    const timerOut = setTimeout(handleSearch, 1000);
    return () => clearInterval(timerOut);
  }, [search]);


  return (
    <div>
      <h1>Posts</h1>
      <div className="posts">
        {loading ? (
          <div className="loading">
            <Loading />
          </div>
        ) : (
          <>
            {posts.length > 0 ? (
              <>
              {posts?.map((post) => (
              
              <div className="post" key={post.id}>
                <Posts post={post} />
              </div>
            ))}
              </>
            ):(
            <> 
            no post found
            </>
          )}
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
