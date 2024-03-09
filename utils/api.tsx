import axios from "axios";
import { useState } from "react";
import SearchButton from "@/components/searchButton";
import ImageGrid from "@/components/imageGrid";

export const fetchFromAPI = async (keyword: string) => {
  const data = await axios.post('https://cafe24-proxy.bravo.dalpha.so/api/test/text-search', { keyword });
  console.log(data)
  return data;
}

const UploadText = () => {
  const [keyword, setKeyword] = useState(""); // 검색어를 상태로 관리
  const [imageData, setImageData] = useState<string[]>([]);

  const handleSearch = async () => {
    try {
      const response = await fetchFromAPI(keyword);
      setImageData(response.data.result.map( (item:any) => item.plp));
      const titledata = response.data.result.map( (item:any) => item.title);
      console.log(JSON.stringify(response.data));
      
    } catch (error) {
      console.log(error); 
    }
  }

  return (
    <div>
      <input
        type="text"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        placeholder="검색어를 입력하세요"
      />
      <SearchButton onClick={handleSearch} /> {/* SearchButton 컴포넌트 렌더링 */}

      <ImageGrid data={imageData}></ImageGrid>
    </div>
  );
}

export default UploadText;

