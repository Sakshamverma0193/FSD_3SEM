const myUrl = new URL("https://example.com:8080/courses/web-dev?sort=asc&limit=10#section2");

console.log("Protocol:", myUrl.protocol);
console.log("Host:", myUrl.host);
console.log("Hostname:", myUrl.hostname);
console.log("Port:", myUrl.port);
console.log("Pathname:", myUrl.pathname);
console.log("Search Params (sort):", myUrl.searchParams.get("sort"));
console.log("Search Params (limit):", myUrl.searchParams.get("limit"));
console.log("Hash:", myUrl.hash);

// Add param
myUrl.searchParams.append("page", "1");
console.log("Updated URL:", myUrl.toString());
