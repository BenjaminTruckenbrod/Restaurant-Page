import _ from 'lodash'
import './style.css';
import Icon from './img/hummus-1.jpg'
import { buildMenu } from './menu.js';
import { buildContact } from './contact.js';
import { buildIndex } from './home.js';

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

let tabs = document.createElement("div")
tabs.id="tabs"
hero.appendChild(tabs)

let tab1 = document.createElement("div")
tab1.id=("home")
let tab2 = document.createElement("div")
tab2.id=("menu")
let tab3 = document.createElement("div")
tab3.id=("contact")

let tab1_text = document.createElement("p")
let tab2_text = document.createElement("p")
let tab3_text = document.createElement("p")

tab1.appendChild(tab1_text)
tab2.appendChild(tab2_text)
tab3.appendChild(tab3_text)

tab1_text.innerHTML=("Home")
tab2_text.innerHTML=("Menu")
tab3_text.innerHTML=("Contact")

tabs.appendChild(tab1)
tabs.appendChild(tab2)
tabs.appendChild(tab3)

let body_container = document.createElement("div");
body_container.id = ("body_container");
document.body.appendChild(body_container);

buildIndex();

function addListeners(){
    let home = document.getElementById("home");
    let menu = document.getElementById("menu");
    let contact = document.getElementById("contact");

    home.addEventListener("click", buildIndex);
    menu.addEventListener("click", buildMenu);
    contact.addEventListener("click", buildContact);
}

addListeners();

let footer = document.createElement("footer")
let para = document.createElement("p")
para.innerHTML = ("created by: benjamintruckenbrod@github.io")

footer.appendChild(para)
document.body.appendChild(footer)