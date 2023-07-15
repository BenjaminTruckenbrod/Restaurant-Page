const buildContact = () => {console.log('build contact');

let body = document.getElementById("body_container")
body.remove();

  
let body_container = document.createElement("div");
body_container.id= ("body_container");
document.body.appendChild(body_container);

let testimony_1 = document.createElement("div")
testimony_1.className = ("testimony_copy");
let testimony_1_copy = document.createElement("p")
testimony_1_copy.innerHTML = ("THIS IS THE CONTACT PAGE")
testimony_1.appendChild(testimony_1_copy)
body_container.appendChild(testimony_1)


}

export { buildContact };