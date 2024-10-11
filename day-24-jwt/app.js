const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

const allRoutes = require("./routes");
const db = require("./db");

db.then(() => {
  console.log("berhasil connect ke db");
}).catch(() => {
  console.log("gagal konek ke db");
});

app.use(express.json());
app.use(allRoutes);

app.listen(PORT, () => {
  console.log("server running on PORT " + 3000);
});
