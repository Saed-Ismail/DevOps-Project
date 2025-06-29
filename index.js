const express = require('express');
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Saed ✅ New version deployed using GitHub Actions + Terraform!");
});

app.listen(port, '0.0.0.0', () => {
  console.log(`App listening at http://0.0.0.0:${port}`);
});

