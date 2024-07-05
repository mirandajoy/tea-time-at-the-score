import cors from "cors";
import express from "express";
import "dotenv/config";
import fs from "fs";

const app = express();

const { PORT, CROSS_ORIGIN } = process.env;

app.use(cors({ origin: CROSS_ORIGIN }));

// Endpoint to get the JSON all articles data
app.get("/api/articles", (req, res) => {
  fs.readFile("./articles.json", "utf8", (err, data) => {
    if (err) {
      res.status(500).send("Error reading data file");
      return;
    }
    res.send(JSON.parse(data));
  });
});

// Endpoint to get an article by ID
app.get("/api/articles/:id", (req, res) => {
  const articleId = parseInt(req.params.id, 10);

  fs.readFile("./articles.json", "utf8", (err, data) => {
    if (err) {
      res.status(500).send("Error reading data file");
      return;
    }

    const articles = JSON.parse(data);
    const article = articles.athletes.find(
      (athlete) => athlete.id === articleId
    );

    if (!article) {
      res.status(404).send("Article not found");
      return;
    }

    res.send(article);
  });
});

app.listen(PORT || 8080, () => {
  console.log(`This app is listening on port ${PORT || 8080}`);
});
