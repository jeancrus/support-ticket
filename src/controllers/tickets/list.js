export const list = ({ req, res, database }) =>
  res
    .writeHead(200, {
      "Content-Type": "application/json",
    })
    .end(JSON.stringify(database.listTickets(req.query)));
