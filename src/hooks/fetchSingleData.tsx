import { useEffect, useState } from "react";
import axios from "axios";

function FetchSingleData<data>(url: string) {

  const [data, setData] = useState<data>();
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
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [url]);
  

  return { data, loading, error };
}

export default FetchSingleData;