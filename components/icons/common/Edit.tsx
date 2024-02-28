interface PropsType {
  size?: number;
  color?: string;
  fill?: string;
}

const Edit = ({ size = 24, color = "#FA5D3A", fill = "none" }: PropsType) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.9954 6.31027L16.3057 3L20.9442 7.63854L17.6339 10.9488"
        stroke={color}
        strokeWidth="1.5"
      />
      <path
        d="M4.13091 15.1752L12.5544 6.75211L17.193 11.3907L8.76946 19.8138L3.31917 20.6255L4.13091 15.1752Z"
        stroke={color}
        strokeWidth="1.5"
      />
    </svg>
  );
};

export default Edit;
