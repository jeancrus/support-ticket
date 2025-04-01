export const create = ({ req, res, database }) => {
  if (!req.body?.equipment || !req.body?.description || !req.body?.user_name) {
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
};
