//console.log("hey");
import express from "express"
import citiesRouter from "./routers/citiesRouter.js"
import tagsRouter from "./routers/tagsRouter.js"
import notFound from "./middlewares/notFound.js";



const app = express();
const port = 3000;

app.use(express.static("public"));

app.use(express.json());

app.use(notFound);


app.get("/", (req, res) => {
  res.send("Server of my blog")
})

app.use("/cities", citiesRouter);
app.use("/tags", tagsRouter);




app.listen(port, function (error) {

  if (error) {
    console.log(error);
  }
  else {
    console.log("Server is connected on port " + port);
  }

});

