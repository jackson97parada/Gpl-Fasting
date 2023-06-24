import { generatePath } from "react-router-dom";

export const ROUTES = {
  service: "/servicios/:serviceId",
};

export function createServiceRoute(serviceId) {
  return generatePath(ROUTES.service, { serviceId });
}
