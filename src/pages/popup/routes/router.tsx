import { createMemoryRouter } from "react-router-dom";
import Onboarding from "./Onboarding";
import { EmailSetup } from "./EmailSetup";
import GetStarted from "./GetStarted";

export const ROUTES = {
  ONBOARDING: '/',
  EMAIL_SETUP: '/email',
  GET_STARTED: '/get-started',
}

export const router = createMemoryRouter([{
  path: ROUTES.ONBOARDING,
  element: <Onboarding />
}, {
  path: ROUTES.EMAIL_SETUP,
  element: <EmailSetup />
}, {
  path: ROUTES.GET_STARTED,
  element: <GetStarted />
}])