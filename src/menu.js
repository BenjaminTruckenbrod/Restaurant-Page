import Icon from './img/falafel_wrap.jpeg'

const buildMenu = () => {console.log('build the menu');

let body = document.getElementById("body_container")
body.remove();

  
let body_container = document.createElement("div");
body_container.id = ("body_container");
document.body.appendChild(body_container);

const menu_item = (img, text) =>{
    let menu_1 = document.createElement("div")
    menu_1.className = ("testimony_copy");
    let item_text = document.createElement("p")
    item_text.innerHTML = (text)
    const wrap1 = new Image();
    wrap1.src = img;
    wrap1.className=("wrap")
    wrap1.id = "wrap"
    menu_1.appendChild(wrap1);
    menu_1.appendChild(item_text)
    body_container.appendChild(menu_1)
}

let falafel_wrap = menu_item(Icon, "Falafel Wrap 12.99")
let falafel_wrap2 = menu_item(Icon, "Falafel Wrap 12.99")
let falafel_wrap3 = menu_item(Icon, "Falafel Wrap 12.99")
let falafel_wrap4 = menu_item(Icon, "Falafel Wrap 12.99")



}

export { buildMenu };