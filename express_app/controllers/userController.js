let users = [
    { id: 1, name: "Saksham Verma", role: "Full Stack Engineer" },
    { id: 2, name: "Rohan Gupta", role: "Frontend Developer" }
];

exports.getAllUsers = (req, res) => {
    res.json({ success: true, count: users.length, data: users });
};

exports.getUserById = (req, res) => {
    const user = users.find((u) => u.id === parseInt(req.params.id));
    if (!user) {
        return res.status(404).json({ success: false, message: "User not found" });
    }
    res.json({ success: true, data: user });
};

exports.createUser = (req, res) => {
    const { name, role } = req.body;
    if (!name || !role) {
        return res.status(400).json({ success: false, message: "Name and role required" });
    }
    const newUser = { id: users.length + 1, name, role };
    users.push(newUser);
    res.status(201).json({ success: true, data: newUser });
};
