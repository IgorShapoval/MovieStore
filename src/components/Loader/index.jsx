import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

import "react-circular-progressbar/dist/styles.css";
import ChangingProgressProvider from "./ChangingProgressProvider";
import { Overlay, Wrap } from "./Loader.styled";

export const Loader = () => {
  return (
    <Overlay>
      <Wrap>
        <ChangingProgressProvider values={[0, 100]}>
          {(percentage) => (
            <CircularProgressbar
              value={percentage}
              styles={buildStyles({
                pathTransition:
                  percentage === 0 ? "none" : "stroke-dashoffset 0.1s ease 0s",
              })}
            />
          )}
        </ChangingProgressProvider>
      </Wrap>
    </Overlay>
  );
};
