const dns = require("dns");

dns.lookup("nodejs.org", (err, address, family) => {
    if (err) {
        console.error("DNS lookup error:", err);
        return;
    }
    console.log("DNS Address:", address);
    console.log("IP Family: IPv" + family);
});

dns.resolveMx("google.com", (err, addresses) => {
    if (!err) {
        console.log("Google MX Records Count:", addresses.length);
    }
});
