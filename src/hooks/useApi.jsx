import axios from "axios";
import { useEffect, useState } from "react";

export const useApi = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  const fetchData = async () => {
    console.log("fetching...");
    setLoading(true);

    try {
      const response = await axios.get(url);
      setData(response.data.results);
    } catch (error) {
      setError(error.message);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { data, loading, error };
};
