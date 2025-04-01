import { close } from "../controllers/tickets/close.js";
import { create } from "../controllers/tickets/create.js";
import { list } from "../controllers/tickets/list.js";
import { remove } from "../controllers/tickets/remove.js";
import { update } from "../controllers/tickets/update.js";

export const ticketsRoutes = [
  {
    path: "/tickets",
    method: "GET",
    controller: list,
  },
  {
    path: "/tickets",
    method: "POST",
    controller: create,
  },
  {
    path: "/tickets/:id/status",
    method: "PATCH",
    controller: close,
  },
  {
    path: "/tickets/:id",
    method: "DELETE",
    controller: remove,
  },
  {
    path: "/tickets/:id",
    method: "PUT",
    controller: update,
  },
];
