import express from "express";
import { cityBlogArray } from "../data.js";
import cityController from "../controllers/cityController.js";

const router = express.Router();



//INDEX
router.get("/", cityController.index)


//SHOW
router.get("/:id", cityController.show)


// STORE
router.post("/", cityController.store);


// UPDATE
router.put("/:id", cityController.update);


//MODIFY
router.patch("/:id", cityController.modify);



//DESTROY
router.delete("/:id", (req, res) => {

  const id = parseInt(req.params.id);


  const cityIndex = cityBlogArray.findIndex(city => city.id === id);

  const deletedCity = cityBlogArray.splice(cityIndex, 1);

  res.json("CityBlog " + deletedCity + "has been removed permanently");
});

export default router;