import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { nowSliceActions } from "../redux/searched";

export default function Pagetransiton() {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);

  const handleChange = (event, value) => {
    setPage(value);
    dispatch(nowSliceActions.getPageNo(value));
    console.log("value is", value);
  };
  const totalResults = useSelector((state) => state.nowPlaying.totalResults);

  // console.log('total results',totalResults)

  return (
    <Stack spacing={2} color="primary">
      <Pagination
        count={Math.ceil(Number(totalResults)/10)}
        page={page}
        onChange={handleChange}
        size="large"
        color="secondary"
        sx={{ bgcolor: "white" }}
      />
    </Stack>
  );
}
