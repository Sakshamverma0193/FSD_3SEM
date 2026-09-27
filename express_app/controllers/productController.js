let products = [
    { id: 101, title: "JavaScript Handbook", price: 499 },
    { id: 102, title: "Node.js Lab Manual", price: 299 }
];

exports.getAllProducts = (req, res) => {
    res.json({ success: true, count: products.length, data: products });
};

exports.getProductById = (req, res) => {
    const product = products.find((p) => p.id === parseInt(req.params.id));
    if (!product) {
        return res.status(404).json({ success: false, message: "Product not found" });
    }
    res.json({ success: true, data: product });
};
