export const update = ({ req, res, database }) =>
  res
    .writeHead(200, {
      "Content-Type": "text/html",
    })
    .end(JSON.stringify(database.updateTicket(req.params.id, req.body)));
