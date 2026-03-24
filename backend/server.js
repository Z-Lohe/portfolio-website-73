const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 3000;

/* MIDDLEWARE */
app.use(cors());
app.use(express.json());

/* DATABASE CONNECTION */
mongoose.connect("mongodb://127.0.0.1:27017/portfolioDB")
    .then(() => console.log("✅ MongoDB connected"))
    .catch(err => console.log("❌ MongoDB error:", err));

/* SCHEMA & MODEL */
const MessageSchema = new mongoose.Schema({
    name: String,
    email: String,
    message: String,
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Message = mongoose.model("Message", MessageSchema);

/* ROUTES */
app.get("/", (req, res) => {
    res.send("Backend is running successfully");
});

/* CONTACT */
app.post("/contact", async (req, res) => {
    try {
        const { name, email, message } = req.body;

        await new Message({ name, email, message }).save();

        console.log("📩 Message saved to database");

        res.json({
            success: true,
            message: "Message received and saved successfully!"
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Error saving message"
        });
    }
});

/* CERTIFICATES (MINIMAL + CLEAN) */
app.get("/certificates", (req, res) => {
    const basePath = path.join(__dirname, "../frontend/assets");

    try {
        const folders = fs.readdirSync(basePath);

        let result = {};

        folders.forEach(folder => {
            const folderPath = path.join(basePath, folder);

            if (fs.lstatSync(folderPath).isDirectory()) {
                const files = fs.readdirSync(folderPath)
                    .filter(file => file.endsWith(".pdf"));

                result[folder] = files;
            }
        });

        res.json(result);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Error reading certificates" });
    }
});

app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

/* START SERVER */
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
