import { useEffect, useState } from "react";
import api from "../api";
import { setUsersAction } from "../store/userReducer";
import { useDispatch } from "react-redux";

export default function Home() {
  const [pageNumber, setPageNumber] = useState(0);
  const dispatch = useDispatch();

  const getAllUserInfo = async (pageNumber) => {
    try {
      const result = await api.homeDataApi(pageNumber);
      console.log(result.hits);
      dispatch(setUsersAction(result.hits));
      Promise.resolve();
    } catch (err) {
      console.log(err);
      Promise.reject();
    }
  };

  useEffect(() => {
    console.log("HHH2");
    getAllUserInfo();
  }, []);

  useEffect(() => {
    if (pageNumber !== 0) {
      console.log("HIII", pageNumber);
      getAllUserInfo(pageNumber);
    }
  }, [pageNumber]);

  return (
    <div>
      <h1>Home</h1>
      <button
        onClick={() => setPageNumber((currPageNumber) => currPageNumber + 1)}
      >
        Next
      </button>
    </div>
  );
}
