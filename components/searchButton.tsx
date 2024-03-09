import React from "react";

interface SearchButtonProps {
  onClick: () => void; // 클릭 이벤트 핸들러
}

const SearchButton: React.FC<SearchButtonProps> = ({ onClick }) => {
  return (
    <button onClick={onClick}>검색</button>
  );
}

export default SearchButton;