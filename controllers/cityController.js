import { cityBlogArray } from "../data";

function index(req, res) {
    const response = {

    totalCitiesToVisit: cityBlogArray.length,

    listOfCities: cityBlogArray,
  }
  res.json(response)
};




const cityController = {
    index,
    // show,
    // store,
    // update,
    // modify,
    // destroy

}

export default cityController