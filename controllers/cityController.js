import { cityBlogArray } from "../data";


//INDEX
function index(req, res) {
    const response = {

        totalCitiesToVisit: cityBlogArray.length,

        listOfCities: cityBlogArray,
    }
    res.json(response)
};

//SHOW
function show(req, res) {
    const id = parseInt(req.params.id);

    const resp = cityBlogArray.find(city => city.id === id);

    res.json(resp)
}



const cityController = {
    index,
    // show,
    // store,
    // update,
    // modify,
    // destroy

}

export default cityController