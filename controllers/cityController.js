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


//STORE
function store(req, res) {
    const newCity = req.body;


    //creating a new blog object:
    const newCityBlogToAdd = {
        id: newId,
        title: newCity.title,
        content: newCity.content,
        // image: newCity.image,?
        tags: newCity.tags
    }

    cityBlogArray.push(cityToAdd);

    res.json(newCityBlogToAdd);
}


//UPDATE
function update(req, res) {

    const id = parseInt(req.params.id);

    //updated fields

    res.send("Modify you blog");
}

//MODIFY
function modify(req, res) {
    const id = parseInt(req.params.id);


    const city = cityBlogArray.find(city => city.id === id);


    const updates = req.body;

    if (updates.title) {
        city.title = updates.title;
    }
    if (updates.content) {
        city.content = updates.content;
    }
    if (updates.image) {
        city.image = updates.image;
    }
    if (updates.tags) {
        city.tags = updates.tags;
    }


    res.json(city);

}

const cityController = {
    index,
    show,
    store,
    update,
    modify,
    // destroy

}

export default cityController