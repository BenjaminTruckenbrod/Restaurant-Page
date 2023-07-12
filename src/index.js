import _ from 'lodash'
import './style.css';
import Icon from './img/hummus-1.jpg'

console.log("Running")

let header = document.createElement("header")
document.body.appendChild(header)

let title = document.createElement("h1")
title.innerHTML = "Hummus Hut"
header.appendChild(title)

const myIcon = new Image();
myIcon.src = Icon;
myIcon.id = "header-img"
header.appendChild(myIcon);

let hero = document.createElement("div")
hero.id = ("hero")
document.body.appendChild(hero)

let testimony = document.createElement("p")
testimony.id = ("tag")
testimony.innerHTML = "- for hummus nuts"
hero.appendChild(testimony)

let body_container = document.createElement("div");
body_container.id = ("body_container");
document.body.appendChild(body_container);

let testimony_1 = document.createElement("div")
testimony_1.className = ("testimony_copy");
let testimony_1_copy = document.createElement("p")
testimony_1_copy.innerHTML = ("I love the Hummus Hut so much. We go there everday after soccer practice. -Stacy")
testimony_1.appendChild(testimony_1_copy)
body_container.appendChild(testimony_1)

let testimony_2 = document.createElement("div")
testimony_2.className = ("testimony_copy");
let testimony_2_copy = document.createElement("p")
testimony_2_copy.innerHTML = ("I love the Hummus Hut so much. We go there everday after soccer practice. - Jenny")
testimony_2.appendChild(testimony_2_copy)
body_container.appendChild(testimony_2)

let testimony_3 = document.createElement("div")
testimony_3.className = ("testimony_copy");
let testimony_3_copy = document.createElement("p")
testimony_3_copy.innerHTML = ("I love the Hummus Hut so much. We go there everday after soccer practice. -Greg")
testimony_3.appendChild(testimony_3_copy)
body_container.appendChild(testimony_3)




// /Users/benjamintruckenbrod/repos/Restaurant-Page/src/img/hummus-1.jpg

