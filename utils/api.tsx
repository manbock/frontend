import axios from "axios";

var data = '{\n    "keyword": "검색어 예시"\n}';

var config = {
  method: 'post',
  maxBodyLength: Infinity,
  url: 'https://cafe24-proxy.bravo.dalpha.so/api/test/text-search',
  headers: { },
  data : data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});

export const fetchFromAPI = async(url:Text) => {
  const {data} = await axios.get(`${config.url}/${url}`, config);
  console.log(data)
  return data;
}