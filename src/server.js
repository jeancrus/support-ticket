import http from "node:http";
import { jsonHandler } from "./middleware/jsonHandler.js";
import { routerHandler } from "./middleware/routerHandler.js";

const listener = async (req, res) => {
  await jsonHandler(req, res);

  routerHandler(req, res);
};

http.createServer(listener).listen(3000, () => {
  console.log("Server is running on port 3000");
});
