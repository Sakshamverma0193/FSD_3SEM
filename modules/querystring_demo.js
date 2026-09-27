const querystring = require("querystring");

const query = "name=Saksham&course=WebDev&semester=3&topics=Node&topics=Express";

const parsed = querystring.parse(query);
console.log("Parsed Query:", parsed);

const stringified = querystring.stringify({ user: "admin", status: "active", page: 2 });
console.log("Stringified Query:", stringified);
