var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));



var ingredients = [
    {
        "id": "232kjk",
        "text": "Eggs"
    },
    {
        "id": "klkjkj",
        "text": "Milk"
    },
    {
        "id": "bmbmsjk",
        "text": "Bread"
    },
    {
        "id": "2335ff",
        "text": "Pepperoni Pizza"
    }
    ];


app.get('/', function (request, response) {
    response.send(ingredients);

});

app.post('/', function (request, response) {
    var ingredient = request.body;
    if (!ingredient || ingredient.text === "") {
        response.status(500).send({
            error: "Your Ingredient must have text"
        });
    } else {
        ingredients.push(ingredient);
        response.status(200).send(ingredients);
    }
})

app.get('/funyuns', function (request, response) {
    response.send('My First API with more flavor');
});

app.listen(3000, function () {
    console.log("First API running on port 3000!");
});
