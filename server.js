const express = require("express");
const mongoose = require("mongoose");
const Schema = require("./frog.js");
const cors = require("cors");
const app = express();

app.use(cors()); 
app.use(express.json()); 

mongoose.connect("mongodb+srv://QuanTheAznPoop:80ObGnh0qEQduunW@ballshd.ixx9f.mongodb.net/?retryWrites=true&w=majority&appName=ballshd", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connected to MongoDB"))
    .catch(err => console.error("MongoDB connection error:", err));

app.post("/signup", async (req, res) => {
    const { username, password, gender } = req.body;

    try {
        const existed = await Schema.findOne({ _username: username });
        if (existed) {
            return res.status(400).json({ message: "Username already exists" });
        }

        const newUser = new Schema({
            _username: username,
            _password: password,
            _gender: gender,
        });

        await newUser.save();
        res.status(201).json({ message: "Your account has been created!" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "An error occurred during signup" });
    }
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://10.10.124.60:${PORT}`);
});