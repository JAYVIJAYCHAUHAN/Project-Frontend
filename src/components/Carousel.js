import { useEffect, useState } from "react";
import axios from "axios";

function Carousel() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(" https://projectnith.onrender.com/api/slider")
      .then((res) => {
        console.log(res.data);
        setData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      not showing
      <img src={data[0]}></img>
    </div>
  );
}
export default Carousel;
