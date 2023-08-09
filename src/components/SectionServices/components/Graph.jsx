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
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="h-[390px] md:mx-auto md:h-auto">
      <div className="absolute z-20">
        {showDiv && (
          <div className="relative left-24 top-14 rotate-[120deg] md:left-4">
            <TbTriangleFilled className="text-[80px] text-[#17568e]" />
          </div>
        )}
      </div>
      <div className="absolute z-20 h-[220px] w-[230px]">
        {showText && (
          <span className="relative left-[170px] top-24 text-[23px] font-bold text-[#024873] md:left-[89px]">
            {percentaje}
          </span>
        )}
      </div>
      <div className="absolute z-20">
        {showDescription && (
          <p className="relative -right-8 top-56 w-[300px] text-justify text-lg font-bold leading-6 text-[#024873] md:right-20 lg:w-[400px] ">
            {description}
          </p>
        )}
      </div>
      <div className="relative left-20 w-[230px] rotate-[200deg] md:left-0 md:block">
        <CircleChart />
      </div>
    </div>
  );
};

Graph.propTypes = {
  percentaje: PropTypes.string,
  description: PropTypes.string,
};
