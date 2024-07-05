import cors from "cors";
import express from "express";
import "dotenv/config";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
// Get the directory name of the current module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const { PORT, CROSS_ORIGIN } = process.env;

app.use(cors({ origin: CROSS_ORIGIN }));

// Endpoint to get all articles
app.get("/api/articles", (req, res) => {
  fs.readFile(path.join(__dirname, "articles.json"), "utf8", (err, data) => {
    if (err) {
      res.status(500).send("Error reading data file");
      return;
    }
    res.json(JSON.parse(data));
  });
});

// Endpoint to get an article by ID
app.get("/api/articles/:id", (req, res) => {
  const articleId = parseInt(req.params.id, 10);

  fs.readFile(path.join(__dirname, "articles.json"), "utf8", (err, data) => {
    if (err) {
      res.status(500).send("Error reading data file");
      return;
    }

    const articles = JSON.parse(data);
    const article = articles.find((article) => article.id === articleId);

    if (!article) {
      res.status(404).send("Article not found");
      return;
    }

    res.json(article);
  });
});

app.listen(PORT || 8080, () => {
  console.log(`This app is listening on port ${PORT || 8080}`);
});
