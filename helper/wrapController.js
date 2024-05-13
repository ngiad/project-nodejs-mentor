import { HandleError } from "./handleErrorMiddleware.js";

export function wrap(controller) {
  let output = {};
  Object.keys(controller).forEach(
    (item) => (output[item] = HandleError(controller[item]))
  );
  return output;
}
