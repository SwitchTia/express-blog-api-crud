import { cityArray } from "..data.js"

function index(req, res) {
    const response = {

    totalCitiesToVisit: cityBlogArray.length,

    listOfCities: cityBlogArray,
  }
  res.json(response)
};




const controller = {
    index,
    show,
    store,
    update,
    modify,
    destroy

}

export default controller