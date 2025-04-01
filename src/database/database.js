import fs from "node:fs/promises";

const DATABASE_PATH = new URL("database.json", import.meta.url);

const STATUS = {
  open: "OPEN",
  closed: "CLOSED",
};

const hasId = (id, database) => {
  return database.tickets.findIndex((p) => p.id === id) === -1;
};

export class Database {
  #database = {};

  constructor() {
    fs.readFile(DATABASE_PATH, "utf8")
      .then((content) => {
        this.#database = JSON.parse(content);
      })
      .catch(() => {
        this.#database.tickets = [];
        this.#persist();
      });
  }

  #persist() {
    fs.writeFile(DATABASE_PATH, JSON.stringify(this.#database));
  }

  createTicket(ticket) {
    const id = crypto.randomUUID();
    this.#database.tickets = [
      ...this.#database.tickets,
      { id, ...ticket, status: STATUS.open },
    ];

    this.#persist();
    return { id, ...ticket };
  }

  updateTicket(id, ticket) {
    if (hasId(id, this.#database)) {
      return { error: "Ticket not found" };
    }

    this.#database.tickets = this.#database.tickets.map((p) =>
      p.id === id ? { ...p, ...ticket } : p
    );

    this.#persist();
    return { id, ...ticket };
  }

  closeTicket(id, solution) {
    if (hasId(id, this.#database)) {
      return { error: "Ticket not found" };
    }

    this.#database.tickets = this.#database.tickets.map((p) =>
      p.id === id ? { id, ...p, status: STATUS.closed, solution } : p
    );

    this.#persist();
    return { id, solution };
  }

  deleteTicket(id) {
    if (hasId(id, this.#database)) {
      return { error: "Ticket not found" };
    }

    this.#database.tickets = this.#database.tickets.filter((p) => p.id !== id);

    this.#persist();
    return { id };
  }

  listTickets(query) {
    if (query.status) {
      return this.#database.tickets.filter(
        (p) => p.status === STATUS[query.status.toLowerCase()]
      );
    }

    return this.#database;
  }
}
