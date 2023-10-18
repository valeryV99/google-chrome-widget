import { createMemoryRouter } from "react-router-dom";
import Onboarding from "./Onboarding";

export const router = createMemoryRouter([{
  path: '/',
  element: <Onboarding />
}])