import { useEffect, useState } from "react";
import axios from "axios";

function FetchSomeData<data>(url: string) {

  const [data, setData] = useState<data[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(url)
      .then((response) => {
        setData(response.data);
        setError(false);
      })
      .catch(err => {
        setData(err);
        setError(true);
        setLoading(false);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [url]);

  const refetch = () => {
    setLoading(true);
    axios
      .get(url)
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  

  return { data, loading, error, refetch };
}

export default FetchSomeData;