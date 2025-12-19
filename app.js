//console.log("hey");
import express from "express"
import citiesRouter from "./routers/citiesRouter.js"
import tagsRouter from "./routers/tagsRouter.js"



const app = express();
const port = 3000;

app.use(express.static("public"));

app.use(express.json());


app.get("/", (req, res) => {
    res.send("Server of my blog")
})

app.use("/cities", citiesRouter);
app.use("/tags", tagsRouter);


app.listen(port, function () {
  console.log("Server is connected on port " + port);
});

