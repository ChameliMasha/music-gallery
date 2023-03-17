const express = require("express");
const app = express();
require("dotenv/config");

const cors = require("cors");
const { default: mongoose } = require("mongoose");

app.use(cors({ origin: true }));
app.use(express.json());

//Artist links
const artistsRoutes = require("./routes/artist");
app.use("/api/artists", artistsRoutes);

// user authentication routes
const userRoute = require("./routes/auth");
app.use("/api/users/", userRoute);

// Album links
const albumRoute = require("./routes/album");
app.use("/api/albums/", albumRoute);

// Songs links
const songRoute = require("./routes/songs");
app.use("/api/songs/", songRoute);

app.get("/", (req, res) => {
  return res.json("hi there..");
});

mongoose.connect(process.env.DB_STRING, { useNewUrlParser: true });
mongoose.connection
  .once("open", () => console.log("Connected"))
  .on("error", (error) => {
    console.log(`Error : ${error}`);
  });

app.listen(4000, () => console.log("Listening to port 4000"));
