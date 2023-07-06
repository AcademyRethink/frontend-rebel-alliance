import { Skeleton } from "@mui/material";
import "./styles.scss";

const Home = () => {
  return (
    <div className="cointainerHome">
      <div className="sideBar">
        <Skeleton
          variant="rounded"
          sx={{ bgcolor: "grey.400" }}
          width={124}
          height={51}
        />
        <div className="linksSideBar">
          <Skeleton
            variant="rectangular"
            sx={{ bgcolor: "grey.400" }}
            width={187}
            height={42}
          />
          <Skeleton
            variant="rectangular"
            sx={{ bgcolor: "grey.400" }}
            width={187}
            height={42}
          />
          <Skeleton
            variant="rectangular"
            sx={{ bgcolor: "grey.400" }}
            width={187}
            height={42}
          />
        </div>
        <Skeleton
          variant="rectangular"
          sx={{ bgcolor: "grey.400" }}
          width={187}
          height={42}
        />
      </div>
      <div className="mainContent">
        <div>
          <Skeleton
            variant="text"
            sx={{ bgcolor: "grey.400" }}
            width={304}
            height={58}
          />
          <Skeleton
            variant="rounded"
            sx={{ bgcolor: "grey.400" }}
            width={1100}
            height={112}
          />
          <Skeleton
            variant="text"
            sx={{ bgcolor: "grey.400" }}
            width={304}
            height={58}
          />
        </div>

        <div className="cointainerInputs">
          <div className="leftInput">
            <Skeleton
              variant="text"
              sx={{ bgcolor: "grey.400" }}
              width={320}
              height={58}
            />
            <Skeleton
              variant="rounded"
              sx={{ bgcolor: "grey.400" }}
              width={216}
              height={52}
            />
          </div>

          <Skeleton
            variant="rounded"
            sx={{ bgcolor: "grey.400" }}
            width={203}
            height={50}
          />
        </div>

        <Skeleton
          variant="rounded"
          sx={{ bgcolor: "grey.400" }}
          width={1100}
          height={112}
        />
        <Skeleton
          variant="rounded"
          sx={{ bgcolor: "grey.400" }}
          width={1100}
          height={112}
        />

        <Skeleton
          variant="rounded"
          sx={{ bgcolor: "grey.400" }}
          width={164}
          height={24}
        />
      </div>
    </div>
  );
};

export default Home;
