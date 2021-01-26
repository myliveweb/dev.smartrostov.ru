import axios from "axios";

const getData = (postData) => {
  return axios
  .post(`https://api.zapolskiy.moscow/v2/index.php`, postData)
  .then(res => res.data)
}

export default getData