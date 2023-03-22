import { createSelector } from "reselect";
import { TRootState } from ".";

export const mainBranch = (state: TRootState) => {
  return state;
};

export const mainSelector = createSelector(mainBranch, (mainBranch) => {
  return mainBranch;
});
