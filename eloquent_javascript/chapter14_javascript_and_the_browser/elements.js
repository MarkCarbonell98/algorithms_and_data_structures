// firstChild, lastChild, previousSibling, nextSibling,parentNode, childNodes, children (type 1 Node)
// nodeType 3: text nodes (Node.TEXT_NODE), type 1 elements: allNodes (Node.ELEMENT_NODE), type comments: Node.COMMENT_NODE

function crawlInformation(node, wordsArray = []) {
    if(node.nodeType == Node.ELEMENT_NODE) {
        for(let i = 0; i < node.childNodes.length; i++) {
            crawlInformation(node.childNodes[i], wordsArray)
        }
    } else if (node.nodeType == Node.TEXT_NODE) {
        wordsArray.push(node.textContent)
    }
    return wordsArray
}

console.log(crawlInformation(document.body))

const paragraphs = document.body.getElementsByClassName("p")

document.body.insertBefore(paragraphs[2], paragraphs[0])
// document.body.replaceChild(paragraphs[0], newParagraph)

function replaceImages() {
    const images = document.body.getElementsByTagName("img");
    for(let i = images.length -1; i >= 0; i--){
        let image = images[i];
        if(image.alt) {
            let text = document.createTextNode(image.alt)
            image.parentNode.replaceChild(text,image)
        }
    }
}

function elt(type, ...children) {
    const node = document.createElement(type);
    for(let child of children) {
        if(typeof child != 'string') node.appendChild(child);
        else node.appendChild(document.createTextNode(child));
    }
    return node;
}

document.getElementById('quote').appendChild(
    elt("footer", "-",
        elt("strong", "Karl Popper"),
        ", preface to the second edition of ",
        elt("em", "The Open Society and its Enemies"),
        ", 1950")
)

const parag = document.body.getElementsByTagName("p");
for(const para of Array.from(parag)) {
    if(para.getAttribute("data-classified") == "secret") {
        para.remove()
    }
}
//can also access class

//attributes offsetWidth, offsetHeight give you elements proportions in pixels
// attributes clientWidth, clientHeight are similar but without border width

const para = document.body.getElementsByTagName("p")[0];
console.log("clientHeight:", para.clientHeight)
console.log("clientWidth:", para.clientWidth)

console.log(document.body.getElementsByTagName("p")[0].getBoundingClientRect())
console.log(window.pageXOffset);
console.log(window.pageYOffset);

function time(name, action) {
    let start = Date.now();
    action();
    console.log(name, "took", Date.now() - start, "ms")
}

time("naive", () => {
    let target = document.getElementById("one");
    while(target.offsetWidth < 100) target.appendChild(document.createTextNode("X"));
})

time("clever", function(){
    let target = document.getElementById("two");
    target.appendChild(document.createTextNode("XXXXXX"));
    let total = Math.ceil(100 / (target.offsetWidth/5));
    console.log(total)
    target.firstChild.nodeValue = "X".repeat(total);
})

let parass = document.getElementById("para");
console.log(parass.style.color);
parass.style.color = "magenta"
console.log(parass.style.color);

function count(selector) {
    return document.querySelectorAll(selector).length;
  }
  console.log(count("p"));           // All <p> elements
  // → 4
  console.log(count(".animal"));     // Class animal
  // → 2
  console.log(count("p .animal"));   // Animal inside of <p>
  // → 2
  console.log(count("p > .animal")); // Direct child of <p>

let cat = document.querySelector("img");
console.log(cat)
let angle = Math.PI / 2;
function animate(time, lastTime) {
    if(lastTime != null) {
        angle += (time - lastTime) * 0.001;
    }
    cat.style.top = (Math.sin(angle) * 20) + "px";
    cat.style.left = (Math.cos(angle) * 200) + "px";
    requestAnimationFrame(newTime => animate(newTime, time))
}
requestAnimationFrame(animate);

function generateTable() {
    const MOUNTAINS = [
        {name: "Kilimanjaro", height: 5895, place: "Tanzania"},
        {name: "Everest", height: 8848, place: "Nepal/China"},
        {name: "Mount Fuji", height: 3776, place: "Japan"},
        {name: "Vaalserberg", height: 323, place: "Netherlands"},
        {name: "Denali", height: 6168, place: "United States"},
        {name: "Popocatepetl", height: 5465, place: "Mexico"},
        {name: "Mont Blanc", height: 4808, place: "Italy/France"}
    ];
}