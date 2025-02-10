import { data, useLocation, useParams } from "react-router-dom";

const Details = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  return (
    <>
      <p>디테일 페이지</p>
      <div>
        <div>{queryParams.get("img_url")}</div>
        <div>{queryParams.get("korean_name")}</div>
        <div>{queryParams.get("types")}</div>
        <div>{queryParams.get("description")}</div>
      </div>
    </>
  );
};

export default Details;
