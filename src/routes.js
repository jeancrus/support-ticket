import { parseRoutePath } from "./utils/parseRoutePath.js";

export const routes = [
  {
    path: "/tickets",
    method: "GET",
    controller: ({ req, res, database }) =>
      res
        .writeHead(200, {
          "Content-Type": "application/json",
        })
        .end(JSON.stringify(database.listTickets(req.query))),
  },
  {
    path: "/tickets",
    method: "POST",
    controller: ({ req, res, database }) => {
      if (
        !req.body?.equipment ||
        !req.body?.description ||
        !req.body?.user_name
      ) {
        return res
          .writeHead(400, {
            "Content-Type": "text/html",
          })
          .end("Todos os campos são obrigatórios");
      }

      return res
        .writeHead(200, {
          "Content-Type": "text/html",
        })
        .end(JSON.stringify(database.createTicket(req.body)));
    },
  },
  {
    path: "/tickets/:id/status",
    method: "PATCH",
    controller: ({ req, res, database }) =>
      res
        .writeHead(200, {
          "Content-Type": "text/html",
        })
        .end(JSON.stringify(database.closeTicket(req.params.id))),
  },
  {
    path: "/tickets/:id",
    method: "DELETE",
    controller: ({ req, res, database }) =>
      res
        .writeHead(200, {
          "Content-Type": "text/html",
        })
        .end(JSON.stringify(database.deleteTicket(req.params.id))),
  },
  {
    path: "/tickets/:id",
    method: "PUT",
    controller: ({ req, res, database }) =>
      res
        .writeHead(200, {
          "Content-Type": "text/html",
        })
        .end(JSON.stringify(database.updateTicket(req.params.id, req.body))),
  },
].map((route) => ({
  ...route,
  path: parseRoutePath(route.path),
}));
