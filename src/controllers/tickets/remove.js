export const remove = ({ req, res, database }) =>
  res
    .writeHead(200, {
      "Content-Type": "text/html",
    })
    .end(JSON.stringify(database.deleteTicket(req.params.id)));
