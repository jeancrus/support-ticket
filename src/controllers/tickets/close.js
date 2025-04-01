export const close = ({ req, res, database }) =>
  res
    .writeHead(200, {
      "Content-Type": "text/html",
    })
    .end(JSON.stringify(database.closeTicket(req.params.id)));
