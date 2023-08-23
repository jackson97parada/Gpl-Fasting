import { useState, useEffect } from "react";
import { PropTypes } from "prop-types";
import { useInView } from "react-intersection-observer";
import { CircleChart } from "../../../graphs/CircleChart";
import { TbTriangleFilled } from "react-icons/tb";

export const Graph = ({ percentaje, description }) => {
  const [showDiv, setShowDiv] = useState(false);
  const [showText, setShowText] = useState(false);
  const [showDescription, setShowDescription] = useState(false);
  const [showElements, setShowElements] = useState(false);

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 1,
  });

  const [refDiv, inViewDiv] = useInView({
    triggerOnce: true,
    threshold: 1,
  });

  const [refText, inViewText] = useInView({
    triggerOnce: true,
    threshold: 1,
  });

  const [refDescription, inViewDescription] = useInView({
    triggerOnce: true,
    threshold: 1,
  });

  useEffect(() => {
    if (showElements && inViewDiv) {
      setTimeout(() => {
        setShowDiv(true);
      }, 2000);
    }
  }, [showElements, inViewDiv]);

  useEffect(() => {
    if (showElements && inViewText) {
      setTimeout(() => {
        setShowText(true);
      }, 2000);
    }
  }, [showElements, inViewText]);

  useEffect(() => {
    if (showElements && inViewDescription) {
      setTimeout(() => {
        setShowDescription(true);
      }, 2000);
    }
  }, [showElements, inViewDescription]);

  useEffect(() => {
    setTimeout(() => {
      setShowElements(true);
    }, 2000);
  }, []);

  return (
    <div className="h-[390px] md:mx-auto md:h-auto">
      <div className="absolute z-20" ref={refDiv}>
        {showDiv && (
          <div
            className={`relative left-20 top-14 rotate-[120deg] md:left-4 ${
              inViewDiv ? "" : ""
            }`}
          >
            <TbTriangleFilled className="text-[80px] text-[#17568e]" />
          </div>
        )}
      </div>
      <div className="absolute z-20 h-[220px] w-[230px]" ref={refText}>
        {showText && (
          <span
            className={`relative left-[160px] top-24 text-[23px] font-bold text-[#024873] md:left-[89px] ${
              inViewText ? "" : ""
            }`}
          >
            {percentaje}
          </span>
        )}
      </div>
      <div className="absolute z-20" ref={refDescription}>
        {showDescription && (
          <p
            className={`relative -right-8 top-56 w-[300px] text-justify text-lg font-bold leading-6 text-[#024873] md:right-20 lg:w-[400px] ${
              inViewDescription ? "" : ""
            }`}
          >
            {description}
          </p>
        )}
      </div>
      <div
        ref={ref}
        className="relative left-16 mt-6 w-[230px] rotate-[200deg] md:left-0 md:mt-0 md:block"
      >
        {inView && <CircleChart />}
      </div>
    </div>
  );
};

Graph.propTypes = {
  percentaje: PropTypes.string,
  description: PropTypes.string,
};
