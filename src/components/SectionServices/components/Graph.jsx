import { useState, useEffect } from "react";
import { PropTypes } from "prop-types";
import { CircleChart } from "../../../graphs/CircleChart";
import { TbTriangleFilled } from "react-icons/tb";

export const Graph = ({ percentaje, description }) => {
  const [showDiv, setShowDiv] = useState(false);
  const [showText, setShowText] = useState(false);
  const [showDescription, setShowDescription] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowDiv(true);
      setShowText(true);
      setShowDescription(true);
    }, 1990);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="mx-auto">
      <div className="absolute z-20">
        {showDiv && (
          <div className="relative left-4 top-14 rotate-[120deg]">
            <TbTriangleFilled className="text-[80px] text-[#17568e]" />
          </div>
        )}
      </div>
      <div className="absolute z-20 h-[220px] w-[230px] ">
        {showText && (
          <span className="relative left-[89px] top-24 text-[23px] font-bold text-[#024873]">
            {percentaje}
          </span>
        )}
      </div>
      <div className="absolute z-20">
        {showDescription && (
          <p className="relative right-20 top-56 w-[400px] text-justify text-lg font-bold text-[#024873] ">
            {description}
          </p>
        )}
      </div>
      <div className="w-[230px] rotate-[200deg]">
        <CircleChart />
      </div>
    </div>
  );
};

Graph.propTypes = {
  percentaje: PropTypes.string,
  description: PropTypes.string,
};
