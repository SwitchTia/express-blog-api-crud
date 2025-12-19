import { cityBlogArray } from "../data.js";


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

     const newId = cityBlogArray[cityBlogArray.length - 1].id + 1;

    //creating a new blog object:
    const newCityBlogToAdd = {
        id: newId,
        title: newCity.title,
        content: newCity.content,
        image: newCity.image,
        tags: newCity.tags
    }

    cityBlogArray.push(newCityBlogToAdd);

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

function destroy (req, res){
     const id = parseInt(req.params.id);
    
    
      const cityIndex = cityBlogArray.findIndex(city => city.id === id);
    
      const deletedCity = cityBlogArray.splice(cityIndex, 1);
    
      res.json("CityBlog has been removed permanently");
}

const cityController = {
    
    index,
    show,
    store,
    update,
    modify,
    destroy

}

export default cityController;