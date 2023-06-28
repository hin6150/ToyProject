import { useState } from "react";
import "./Tree.css";
import { areas, areasEnglish, cityPaths, paths, treeBottom, treeText } from "../../Store/Const";
import { useNavigate } from "react-router-dom";
const Tree = ({ ...props }) => {
  const [hoveredPaths, setHoveredPaths] = useState([]);

  const handlePathMouseEnter = (index) => {
    setHoveredPaths((prevHoveredPaths) => [...prevHoveredPaths, index]);
  };

  const handlePathMouseLeave = (index) => {
    setHoveredPaths((prevHoveredPaths) => prevHoveredPaths.filter((pathIndex) => pathIndex !== index));
  };
  const navigate = useNavigate();

  return (
    <svg
      width={props.width}
      height={props.height}
      viewBox="0 0 1654 2456"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_289_1069)">
        {cityPaths.map((data, index) => (
          <path
            key={index}
            className="city"
            onClick={() => navigate(`/detail/${areasEnglish[index]}`)}
            d={data.d}
            fill={data.fill}
            stroke={hoveredPaths.includes(index) ? "white" : "none"}
            strokeWidth={10}
            onMouseEnter={() => handlePathMouseEnter(index)}
            onMouseLeave={() => handlePathMouseLeave(index)}
          />
        ))}
        {treeBottom.map((data, index) => (
          <path key={index} className="treeBottom" d={data.d} fill={data.fill} />
        ))}
        {treeText.map((data, index) => (
          <path key={index} className="treeText" d={data.d} fill="white" />
        ))}
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_289_1069"
          x1="539.842"
          y1="1035.75"
          x2="924.205"
          y2="1035.75"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FB7B2E" />
          <stop offset="0.99" stopColor="#BF0060" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_289_1069"
          x1="977.769"
          y1="966.739"
          x2="1362.13"
          y2="966.739"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#BF0060" />
          <stop offset="1" stopColor="#0640F7" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_289_1069"
          x1="625.556"
          y1="590.192"
          x2="1009.92"
          y2="590.192"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FB7B2E" />
          <stop offset="0.99" stopColor="#BF0060" />
        </linearGradient>
        <linearGradient
          id="paint3_linear_289_1069"
          x1="1066.03"
          y1="519.006"
          x2="1450.39"
          y2="519.006"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#BF0060" />
          <stop offset="1" stopColor="#0640F7" />
        </linearGradient>
        <linearGradient
          id="paint4_linear_289_1069"
          x1="160.935"
          y1="991.077"
          x2="478.065"
          y2="991.077"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#5763E8" />
          <stop offset="0.05" stopColor="#0640F7" />
          <stop offset="0.99" stopColor="#FF6321" />
        </linearGradient>
        <linearGradient
          id="paint5_linear_289_1069"
          x1="286.53"
          y1="642.399"
          x2="565.525"
          y2="642.399"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#5763E8" />
          <stop offset="0.05" stopColor="#0640F7" />
          <stop offset="0.99" stopColor="#FF6321" />
        </linearGradient>
        <linearGradient
          id="paint6_linear_289_1069"
          x1="278.681"
          y1="304.729"
          x2="557.738"
          y2="304.729"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#5763E8" />
          <stop offset="0.05" stopColor="#0640F7" />
          <stop offset="0.99" stopColor="#FF6321" />
        </linearGradient>
        <linearGradient
          id="paint7_linear_289_1069"
          x1="541.349"
          y1="1412.09"
          x2="820.407"
          y2="1412.09"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FB7B2E" />
          <stop offset="0.99" stopColor="#BF0060" />
        </linearGradient>
        <linearGradient
          id="paint8_linear_289_1069"
          x1="948.444"
          y1="1362.1"
          x2="1227.44"
          y2="1362.1"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#BF0060" />
          <stop offset="1" stopColor="#0640F7" />
        </linearGradient>
        <linearGradient
          id="paint9_linear_289_1069"
          x1="791.238"
          y1="226.708"
          x2="1028.6"
          y2="226.708"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FB7B2E" />
          <stop offset="1" stopColor="#BF0060" />
        </linearGradient>
        <linearGradient
          id="paint10_linear_289_1069"
          x1="1092.62"
          y1="142.185"
          x2="1358.99"
          y2="142.185"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#BF0060" />
          <stop offset="1" stopColor="#0640F7" />
        </linearGradient>
        <linearGradient
          id="paint11_linear_289_1069"
          x1="380.954"
          y1="2012.1"
          x2="864.595"
          y2="2012.1"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FB7B2E" />
          <stop offset="0.99" stopColor="#BF0060" />
        </linearGradient>
        <linearGradient
          id="paint12_linear_289_1069"
          x1="918.912"
          y1="2012.1"
          x2="1425.22"
          y2="2012.1"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#BF0060" />
          <stop offset="1" stopColor="#0640F7" />
        </linearGradient>
        <linearGradient
          id="paint13_linear_289_1069"
          x1="487.264"
          y1="2020.57"
          x2="772.601"
          y2="2020.57"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FF6321" />
        </linearGradient>
        className="city"
        <clipPath onClick={props.onClick} id="clip0_289_1069">
          <rect width="1654" height="2456" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Tree;
