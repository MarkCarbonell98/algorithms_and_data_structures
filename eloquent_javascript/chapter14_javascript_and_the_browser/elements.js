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
        
        console.log(Object.keys(MOUNTAINS[0]))
        
        const parentDiv = document.getElementById("mountains");
        const table = document.createElement("table")
        const firstTr = document.createElement("tr")
        
        for(const key of Object.keys(MOUNTAINS[0])) {
            const th = document.createElement("th")
            const columnName = document.createTextNode(key)
            th.appendChild(columnName)
            firstTr.appendChild(th)
        }
        
        table.appendChild(firstTr)
        
        
    for(const mountain of MOUNTAINS) {
        const newTr = document.createElement("tr")
        const mountainName = document.createElement("td")
        const mountainHeight = document.createElement("td")
        mountainHeight.style.textAlign = "right"
        const mountainPlace = document.createElement("td")
        mountainName.appendChild(document.createTextNode(mountain.name))
        mountainHeight.appendChild(document.createTextNode(mountain.height))
        mountainPlace.appendChild(document.createTextNode(mountain.place))
        newTr.appendChild(mountainName)
        newTr.appendChild(mountainHeight)
        newTr.appendChild(mountainPlace)
        table.appendChild(newTr)
    }

    parentDiv.append(table)
    console.log("printed")
}

generateTable()

// solution
function buildTable(data) {
    let table = document.createElement("table");
  
    let fields = Object.keys(data[0]);
    let headRow = document.createElement("tr");
    fields.forEach(function(field) {
      let headCell = document.createElement("th");
      headCell.textContent = field;
      headRow.appendChild(headCell);
    });
    table.appendChild(headRow);

    data.forEach(function(object) {
      let row = document.createElement("tr");
      fields.forEach(function(field) {
        let cell = document.createElement("td");
        cell.textContent = object[field];
        if (typeof object[field] == "number") {
          cell.style.textAlign = "right";
        }
        row.appendChild(cell);
      });
      table.appendChild(row);
    });

    return table;
}

// function byTagName(node, tagName) {
//     let found = [];
//     tagName = tagName.toUpperCase();
//     function explore(node) {
//       for (let i = 0; i < node.childNodes.length; i++) {
//         let child = node.childNodes[i];
//         if (child.nodeType == document.ELEMENT_NODE) {
//           if (child.nodeName == tagName) found.push(child);
//           explore(child);
//         }
//       }
//     }
//     explore(node);
//     return found;
// }

//   document.querySelector("#mountains")
//     .appendChild(buildTable(MOUNTAINS));

function byTagName(node, tagName, result = []) {
    if(node.nodeName.toLowerCase() === tagName) {
        result.push(node)
    } else if(node.nodeType === Node.ELEMENT_NODE) {
        for(let i = 0; i < node.childNodes.length; i++) {
            byTagName(node.childNodes[i], tagName, result)
        }
    }
    return result
}

console.log(byTagName(document.body, "p"))

console.log(byTagName(document.body, "h1").length);
console.log(byTagName(document.body, "span").length);
let para2 = document.querySelector("p");
console.log(para2)
console.log(byTagName(para2, "span").length);
// → 2

let cat = document.querySelector("[src='cat.jpg']");
let hat = document.querySelector("[src='hat.png']");
let angle = Math.PI / 2;
function animate(time, lastTime) {
    if(lastTime != null) {
        angle += (time - lastTime) * 0.001;
    }
    cat.style.top = (Math.sin(angle) * 50) + "px";
    cat.style.left = (Math.cos(angle) * 100) + "px";
    hat.style.top = (Math.sin(angle) * 50) + "px"
    hat.style.left = -(Math.cos(angle) * 100) + "px"
    requestAnimationFrame(newTime => animate(newTime, time))
}
requestAnimationFrame(animate);



