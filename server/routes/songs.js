const song = require("../models/song");

const router = require("express").Router();

router.post("/save", async (req, res) => {
  const newSong = song({
    name: req.body.name,
    imageURL: req.body.imageURL,
    songUrl: req.body.songUrl,
    album: req.body.album,
    artist: req.body.artist,
    language: req.body.language,
    category: req.body.category,
  });

  try {
    const savedSong = await newSong.save();
    return res.status(200).send({ success: true, song: savedSong });
  } catch (error) {
    return res.status(400).send({ success: false, msg: error });
  }
});

router.get("/getOne/:id", async (req, res) => {
  const filter = { _id: req.params.id };

  const data = await song.findOne(filter);

  if (data) {
    return res.status(200).send({ success: true, song: data });
  } else {
    return res.status(400).send({ success: false, msg: "Data not found" });
  }
});

router.get("/getAll", async (req, res) => {
  const options = {
    // sort returned documents in ascending order
    sort: { createdAt: 1 },
    // Include only the following
    // projection : {}
  };

  const cursor = await song.find({});
  console.log(cursor);
  if (cursor) {
    return res.status(200).send({ success: true, data: cursor });
  } else {
    return res.status(400).send({ success: false, msg: "Data not found" });
  }
});

router.put("/update/:updateId", async (req, res) => {
  const filter = { _id: req.params.updateId };
  const options = {
    upsert: true,
    new: true,
  };
  try {
    const result = await song.findOneAndUpdate(
      filter,
      {
        name: req.body.name,
        imageURL: req.body.imageURL,
        songUrl: req.body.songUrl,
        album: req.body.album,
        artist: req.body.artist,
        language: req.body.language,
        category: req.body.category,
      },
      options
    );
    res.status(200).send({ song: result });
  } catch (error) {
    res.status(400).send({ success: false, msg: error });
  }
});

router.delete("/delete/:deleteId", async (req, res) => {
  const filter = { _id: req.params.deleteId };

  const result = await artist.deleteOne(filter);
  if (result.deletedCount === 1) {
    res.status(200).send({ success: true, msg: "Data Deleted" });
  } else {
    res.status(200).send({ success: false, msg: "Data Not Found" });
  }
});

module.exports = router;
