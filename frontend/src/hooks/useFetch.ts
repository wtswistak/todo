import { useDispatch } from "react-redux";
import { startLoading, stopLoading } from "../state/todoSlice";

const useFetch = () => {
  const dispatch = useDispatch();

  const handleFetch = async (
    endpoint: string,
    method: string,
    headers: Record<string, string> = {},
    body?: Record<string, any>
  ) => {
    try {
      const controller = new AbortController();
      const signal = controller.signal;

      dispatch(startLoading());
      const options: Record<string, any> = {
        method,
        headers: {
          "Content-Type": "application/json",
          ...headers,
        },
        signal,
      };
      if (body && method !== "GET" && method !== "HEAD") {
        options.body = JSON.stringify(body);
      }
      const response = await fetch(endpoint, options);
      const data = await response.json();

      dispatch(stopLoading());
      return { data, response };
    } catch (error) {
      console.log(error);
      return { error };
    } finally {
      dispatch(stopLoading());
    }
  };

  return { handleFetch };
};

export default useFetch;
