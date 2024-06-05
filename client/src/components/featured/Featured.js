import useFetch from "../../hooks/useFetch";
import "./Featured.css";

const Featured = () => {
  const { data, loading, error } = useFetch(
    "/hotels/countByCity?cities=Pretoria,Durban,Mpumalanga"
  );

  return (
    <div className="featured">
      {loading ? (
        "Loading please wait"
      ) : (
        <>
          <div className="featuredItem">
            <img
              src="https://a0.muscache.com/im/pictures/miso/Hosting-43353319/original/7017cf48-60fe-45bd-9a2f-e9902503adca.jpeg?im_w=720"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Pretoria</h1>
              <h2>{data[0]} properties</h2>
            </div>
          </div>

          <div className="featuredItem">
            <img
              src="https://a0.muscache.com/im/pictures/d79d0555-7014-498f-b033-6f5d45837b80.jpg?im_w=720"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Durban</h1>
              <h2>{data[1]} properties</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img
              src="https://a0.muscache.com/im/pictures/miso/Hosting-637320698046028196/original/d499b998-5af5-4be5-aaa2-7e27d8652f28.jpeg?im_w=720"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Mpumalanga</h1>
              <h2>{data[1]} properties</h2>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Featured;