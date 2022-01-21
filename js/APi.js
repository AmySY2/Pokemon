//fonction d'API
function DataRequest(type) {
    var ourRequest = new XMLHttpRequest();
    ourRequest.open("GET", 'https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json');
    ourRequest.onload = function () {
        var pokedex = JSON.parse(ourRequest.responseText).pokemon;
        switch (type) {
            case ("Fire"):
                RecherchePokemon(type, pokedex);
                break
            case ("Water"):
                RecherchePokemon(type, pokedex);
                break
            case ("Poison"):
                RecherchePokemon(type, pokedex);
                break
            case ("Electric"):
                RecherchePokemon(type, pokedex);
                break
            case ("Rock"):
                RecherchePokemon(type, pokedex);
                break
        }
    }
    ourRequest.send();
};
function Maj() {
    if (window.innerWidth < 768) {
        const navbar = document.querySelector('.navbar');
        const carou = document.getElementById('carousel1');
        const info = document.getElementById('info');
        const foot = document.getElementById('foot');
        navbar.classList.toggle('show-nav');
        if (getComputedStyle(carou, info, foot).display != "none") {
            carou.style.display = "none";
            info.style.display = "none";
            foot.style.display = "none";
        }
        else {
            carou.style.display = "block";
            info.style.display = "block";
            foot.style.display = "block";
        }
    }
}
$(".Fire").click(function () {
    DataRequest("Fire");
    Maj()

});
$(".Water").click(function () {
    DataRequest("Water");
    Maj()
});
$(".Poison").click(function () {
    DataRequest("Poison");
    Maj()
});
$(".Electric").click(function () {
    DataRequest("Electric");
    Maj()
});
$(".Rock").click(function () {
    DataRequest("Rock");
    Maj()
});

function RecherchePokemon(type, pokedex) {
    console.log("Type = " + type)
    var listPokemon = []
    for (let i = 0; i < 151; i++) {
        for (let id = 0; id < pokedex[i].type.length; id++) {
            if (pokedex[i].type[id] == type) {
                listPokemon += i + " "
            }
        }
    }
    listPokemon = listPokemon.split(" ");
    listPokemon.pop()
    PlaceImage(listPokemon, pokedex, type)

}
function PlaceInfos(listPokemon) {
    for (let i = 0; i < 3; i++) {
        var nom = document.getElementById(`nom${i + 1}`)
        var type = document.getElementById(`type${i + 1}`)
        var weak = document.getElementById(`weak${i + 1}`)
        var poid = document.getElementById(`poid${i + 1}`)
        var taille = document.getElementById(`taille${i + 1}`)

        nom.textContent = listPokemon[i].name
        type.textContent = listPokemon[i].type
        weak.textContent = listPokemon[i].weaknesses
        poid.textContent = listPokemon[i].weight
        taille.textContent = listPokemon[i].height
    }
}

function PlaceImage(listPokemon, pokedex, type) {

    var img1 = document.getElementById("img1")
    var img2 = document.getElementById("img2")
    var img3 = document.getElementById("img3")

    switch (type) {
        case ("Fire"):
            img1.style.backgroundColor = "rgb(255, 218, 194)";
            img2.style.backgroundColor = "rgb(255, 218, 194)";
            img3.style.backgroundColor = "rgb(255, 218, 194)";
            break
        case ("Water"):
            img1.style.backgroundColor = "rgb(224, 231, 255)";
            img2.style.backgroundColor = "rgb(224, 231, 255)";
            img3.style.backgroundColor = "rgb(224, 231, 255)";
            break
        case ("Poison"):
            img1.style.backgroundColor = "rgb(224, 255, 237)";
            img2.style.backgroundColor = "rgb(224, 255, 237)";
            img3.style.backgroundColor = "rgb(224, 255, 237)";
            break
        case ("Electric"):
            img1.style.backgroundColor = "rgb(255, 245, 191)";
            img2.style.backgroundColor = "rgb(255, 245, 191)";
            img3.style.backgroundColor = "rgb(255, 245, 191)";
            break
        case ("Rock"):
            img1.style.backgroundColor = "rgb(196, 196, 196)";
            img2.style.backgroundColor = "rgb(196, 196, 196)";
            img3.style.backgroundColor = "rgb(196, 196, 196)";
            break
    }


    listPokemon = ChoisirPokemonDansList(pokedex, listPokemon)

    // console.log(listPokemon[0])
    // console.log(listPokemon[1])
    // console.log(listPokemon[2])

    img1.style.backgroundImage = `url("${listPokemon[0].img}")`
    img2.style.backgroundImage = `url("${listPokemon[1].img}")`
    img3.style.backgroundImage = `url("${listPokemon[2].img}")`
    PlaceInfos(listPokemon)
}

function ChoisirPokemonDansList(pokedex, listPokemon) {
    var v1 = pokedex[Random(listPokemon)]
    var v2 = pokedex[Random(listPokemon)]
    while (v2 == v1) {
        v2 = pokedex[Random(listPokemon)]
    }
    var v3 = pokedex[Random(listPokemon)]
    while (v3 == v1 || v3 == v2) {
        v3 = pokedex[Random(listPokemon)]
    }
    return [v1, v2, v3]
}

function Random(myArray) {
    var rand = Math.floor(Math.random() * myArray.length);
    retour = myArray[rand]
    return retour
}


///////
function toggleMenu() {
    const navbar = document.querySelector('.navbar');
    const burger = document.querySelector('.burger');
    const carou = document.getElementById('carousel1');
    const foot = document.getElementById('foot');
    burger.addEventListener('click', () => {
        navbar.classList.toggle('show-nav');
        if (getComputedStyle(carou, foot).display != "none") {
            carou.style.display = "none";
            foot.style.display = "none";
        }
        else {
            carou.style.display = "block";
            foot.style.display = "block";
        }
    })
}
toggleMenu();