//fonction d'API
function DataRequest(type) {
    var ourRequest = new XMLHttpRequest();
    ourRequest.open("GET", 'https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json');
    ourRequest.onload = function () {
        var pokedex = JSON.parse(ourRequest.responseText).pokemon;
        RecherchePokemon(type, pokedex);
    }
    ourRequest.send();
};
function Maj() {
    if (window.innerWidth < 768) {
        const navbar = document.querySelector('.navbar');
        const carou = document.getElementById('carousel1');
        const info = document.getElementsByClassName('info');

        navbar.classList.toggle('show-nav');
        if (getComputedStyle(carou, info).display != "none") {
            carou.style.display = "none";
            info.style.display = "none";

        }
        else {
            carou.style.display = "block";
            info.style.display = "block";
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

///////fin de fonction API/////
// BLAGUE

function BlagueRequest(type) {
    var ourRequest = new XMLHttpRequest();
    ourRequest.open("GET", 'https://v2.jokeapi.dev/joke/Any?safe-mode');
    ourRequest.onload = function () {
        var blague = JSON.parse(ourRequest.responseText);
        displayBlague(blague)
    }
    ourRequest.send();
};

function displayBlague(blague) {
    element1 = document.getElementById("blague")
    element2 = document.getElementById("blague1")
    if (blague.joke == undefined) {
        element1.innerHTML = blague.setup
        element2.innerHTML = ""

    } else {
        element1.innerHTML = blague.joke
        element2.innerHTML = ""
    }
    $("#blague").click(function () {
        element2.innerHTML = blague.delivery
    })
}
$(".imgg").click(function () {
    BlagueRequest()
});
////fin API Blague/////

/////Burger Menur/////
function toggleMenu() {
    const navbar = document.querySelector('.navbar');
    const burger = document.querySelector('.burger');
    const carou = document.getElementById('carousel1');

    const info = document.getElementsByClassName('info');
    burger.addEventListener('click', () => {
        navbar.classList.toggle('show-nav');
        if (getComputedStyle(carou, foot, info).display != "none") {
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
///fin de burger Menu///

//// Carousel///
class Carousel {
    /**
     * @callback moveCallback
     * @param {number} index
 
     * 
     * 
     * 
    * @param {elementHTML} element
    * * @param {Object} options
    * @param {Object} options.slidesToScroll= nombre d'element à faire defilé
    * @param {Object} options.slidesVisible= nombre d'element visible dans un slide
    *@param {boolean} {options.loop=false} doit on boucler en fin de slides
    */

    constructor(element, options = {}) {
        this.element = element
        this.options = Object.assign({}, {
            slidesToScroll: 1,
            slidesVisible: 1,
            loop: false
        }, options)
        let children = [].slice.call(element.children)
        this.isMobil = false
        this.currentItem = 0
        this.moveCallbacks = []
        //modificatgion du dom
        this.root = this.createDivWithClass('carousel')
        this.container = this.createDivWithClass('carousel__container')
        this.root.setAttribute('tabindex', '0')
        this.root.appendChild(this.container)
        this.element.appendChild(this.root)

        this.items = children.map((child) => {
            let item = this.createDivWithClass('carousel__item')
            item.appendChild(child)
            this.container.appendChild(item)
            return item
        })
        this.setStyle()
        this.createNavigation()
        // evenemts
        this.moveCallbacks.forEach(cb => cb(0))
        this.onWindowResize()
        window.addEventListener('resize', this.onWindowResize.bind(this))
        //keyup pour chrome car keypress il ne le reconnait pas
        this.root.addEventListener('keyup', e => {
            if (e.key === 'ArrowRight' || e.key === 'Right') {
                this.next()
            } else if (e.key === 'ArrowLeft' || e.key === 'Left') {
                this.prev()
            }

        })
        //* pour paramettré le scroll de la souris
        this.root.addEventListener('wheel', e => {
            if (e.deltaY < 0) {
                this.next()
            } else if (e.deltaY > 0) {
                this.prev()
            }
        })
        this.createNavigation()
    }
    /**
     * applique les bonne dimension aux elements du carousel
     */
    setStyle() {
        let ratio = this.items.length / this.slidesVisible
        this.container.style.width = (ratio * 100) + "%"
        this.items.forEach(item => item.style.width = ((100 / this.slidesVisible) / ratio) + "%")
    }
    createNavigation() {
        let nextButton = this.createDivWithClass('carousel__next')
        let prevButton = this.createDivWithClass('carousel__prev')
        this.root.appendChild(nextButton)
        this.root.appendChild(prevButton)
        nextButton.addEventListener('click', this.next.bind(this))
        prevButton.addEventListener('click', this.prev.bind(this))
        this.onMove(index => {
            if (index === 0) {
                prevButton.classList.add('carousel__prev--hidden')
            } else {
                prevButton.classList.remove('carousel__prev--hidden')
            }
            if (this.items[this.currentItem + this.slidesVisible] === undefined) {
                nextButton.classList.add('carousel__next--hidden')
            } else {
                nextButton.classList.remove('carousel__next--hidden')
            }

        })
    }
    next() {
        this.gotoItem(this.currentItem + this.slidesToScroll)

    }
    prev() {
        this.gotoItem(this.currentItem - this.slidesToScroll)
    }

    /**
     * deplace le carousel vers l'élement ciblé
     * @param {number} index 
     */
    gotoItem(index) {
        if (index < 0) {
            if (this.options.loop) {
                index = this.items.length - this.slidesVisible
            } else {
                return
            }
            // ||= or
        } else if (index >= this.items.length || (this.items[this.currentItem + this.options.slidesVisible] === undefined && index > this.currentItem)) {
            if (this.options.loop) {
                index = 0
            } else {
                return
            }

        }
        let translateX = index * -100 / this.items.length
        this.container.style.transform = 'translate3D(' + translateX + '%, 0, 0)'
        this.currentItem = index
        this.moveCallbacks.forEach(cb => cb(index))
    }
    /**
     * @param {moveCallback} cd
     */
    onMove(cb) {
        this.moveCallbacks.push(cb)
    }
    /**
     * 
     * @param {string} className 
     * @returns {HTMLElement}
     */
    createDivWithClass(className) {
        let div = document.createElement('div')
        div.setAttribute('class', className)
        return div

    }
    onWindowResize() {
        let mobile = window.innerWidth < 800
        if (mobile !== this.isMobil) {
            this.isMobil = mobile
            this.setStyle()
            this.moveCallbacks.forEach(cb => cb(this.currentItem))
        }
    }
    /**
     * @returns {nombre}
     */
    get slidesToScroll() {
        return this.isMobil ? 1 : this.options.slidesToScroll
    }
    get slidesVisible() {
        return this.isMobil ? 1 : this.options.slidesVisible
    }
}
new Carousel(document.querySelector('#carousel1'), {
    slidesToScroll: 1,
    slidesVisible: 1,
    loop: false
})
///Fin de Carousel///