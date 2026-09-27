const zlib = require("zlib");

const text = "Node.js Full Stack Development - Semester 3 Lab Work!";

zlib.gzip(text, (err, buffer) => {
    if (err) {
        console.error("Compression error:", err);
        return;
    }
    console.log("Original text length:", text.length, "bytes");
    console.log("Compressed buffer length:", buffer.length, "bytes");

    zlib.gunzip(buffer, (err, decompressed) => {
        console.log("Decompressed text:", decompressed.toString());
    });
});
