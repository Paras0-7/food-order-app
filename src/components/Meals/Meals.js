import { MealsSummary } from "./MealsSummary";
import { AvailableMeals } from "./AvailableMeals";

export const Meals = function (props) {
  return (
    <>
      <MealsSummary />
      <AvailableMeals />
    </>
  );
};
