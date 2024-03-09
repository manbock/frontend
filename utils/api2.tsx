import axios from "axios";

var data = {
  keyword: "드레스"
};

var config = {
  method: 'post',
  maxBodyLength: Infinity,
  url: 'https://cafe24-proxy.bravo.dalpha.so/api/test/text-search',
  headers: {
    'Content-Type': 'application/json' // POST 요청에 대한 Content-Type 헤더 추가
  },
  data: data 
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});

export const fetchFromAPI = async () => {
  try {
    const response = await axios.get('https://cafe24-proxy.bravo.dalpha.so/api/test/text-search', config);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}