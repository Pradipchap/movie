import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

import { useDispatch, useSelector } from "react-redux";
import { nowSliceActions } from "../redux/searched";

export default function Pagetransiton() {
  const dispatch = useDispatch();

  const totalResults = useSelector((state) => state.nowPlaying.totalResults);
  const pageNo = useSelector((state) => state.nowPlaying.pageNo);
  const handleChange = (event, value) => {
    event.preventDefault();

    dispatch(nowSliceActions.getPageNo(value));
  };

  // console.log('total results',totalResults)

  return (
    <Stack spacing={2} color="primary">
      <Pagination
        count={Math.ceil(Number(totalResults) / 10)}
        page={pageNo}
        onChange={handleChange}
        size="large"
        color="secondary"
        sx={{ bgcolor: "white", paddingBlock: "5px", borderRadius: "20px" }}
      />
    </Stack>
  );
}
