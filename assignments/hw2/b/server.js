const express = require("express");
const app = express();
const path = require("path");
const expressLayouts = require("express-ejs-layouts");

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(expressLayouts); // Enable express-ejs-layouts
app.set("layout", "layouts/layout");

// Routes
app.get("/", (req, res) => res.render("threecolumn", { title: "Three Column" }));
app.get("/lounge", (req, res) => res.render("lounge", { title: "Lounge" }));
app.get("/styleform", (req, res) => res.render("styleform", { title: "Style Form" }));

// Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
