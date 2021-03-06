const express = require("express");
const app = express();
const mongoose = require("mongoose");
const SurfbreakModel = require("./models/SurfbreakModel");
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.get("/surfbreaks", async (request, response) => {
  const surfbreaks = await SurfbreakModel.find();
  return response.status(200).json(surfbreaks);
});

app.get("/surfbreaks/:id", async (request, response) => {
  const { id } = request.params;

  if (mongoose.Types.ObjectId.isValid(id)) {
    const surfbreaks = await SurfbreakModel.findById(id);
    if (surfbreaks) {
      return response.status(200).send(surfbreaks);
    } else {
      return response
        .status(404)
        .send({ message: "The ID you are trying to access was not found" });
    }
  } else {
    return response.status(400).send({ message: "The ID provided is Invalid" });
  }
});

// app.get("/surfboards", async (request, response) => {
//   const surfbreaks = await SurfbreakModel.find();
//   return response.status(200).json(surfbreaks);
// });

// app.get("/forecasts", async (request, response) => {
//   const surfbreaks = await SurfbreakModel.find();
//   return response.status(200).json(surfbreaks);
// });

module.exports = app;
