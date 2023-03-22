import clsx from "clsx";
import React, { useMemo } from "react";

import styles from "./styles/CustomStepper.module.css";

export type TCustomStepper = {
  steps: number;
  currentStep?: number;
  onClickLeft?: () => void;
  onClickRight?: () => void;
};

export const CustomStepper: React.FC<TCustomStepper> = ({
  steps,
  currentStep,
  onClickLeft,
  onClickRight,
}) => {
  const stepsArray = useMemo(() => {
    const array = [];
    for (let i = 0; i < steps; i++) {
      array.push(i);
    }
    return array;
  }, [steps]);
  return (
    <section className={styles.CustomStepper}>
      <div className={styles.CustomStepperStepsContainer}>
        {stepsArray.map((el: number, i: number) => {
          return (
            <div
              key={i}
              className={styles.CustomStepperStepsContainerStep}
              style={{
                backgroundColor:
                  el === currentStep ? "rgb(72, 72, 73)" : "rgb(178, 178, 184)",
              }}
            >
              -
            </div>
          );
        })}
      </div>
      <div className={styles.CustomStepperControlsContainer}>
        <div
          onClick={onClickLeft}
          className={styles.CustomStepperControlsContainerArrow}
        >
          {"<"}
        </div>
        <div
          onClick={onClickRight}
          className={styles.CustomStepperControlsContainerArrow}
        >
          {">"}
        </div>
      </div>
    </section>
  );
};
