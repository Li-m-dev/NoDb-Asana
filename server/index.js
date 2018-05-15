const express = require("express");
const { json } = require("body-parser");
const cors = require("cors");
const path = require("path");
const port = process.env.PORT || 3001;
const app = express();
const ac = require("./controllers/asana");

app.use(json());
app.use(cors());

// app.use(express.static("${__dirname}/../build"));

app.get("/api/asana", ac.getAsana);

app.get("/api/mySequence", ac.getMySequence);
app.post(`/api/mySequence/:id`, ac.postMySequence);
app.put("/api/mySequence/:id", ac.updateMyPoseName);
app.delete("/api/mySequence/:id", ac.deleteAsana);

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
