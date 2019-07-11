
// window.addEventListener("click", () => console.log("servus!"))

// window.removeEventListener("click", () => console.log("servus!"))

const button = document.querySelector("button")
button.addEventListener("click", () => {
    console.log("button was clicked")
})


const actOnceButton = document.querySelector(".act-once")
function once() {
    console.log("triggered")
    actOnceButton.removeEventListener("click", once)
}

actOnceButton.addEventListener("click", once)

const multiClickButton = document.querySelector(".multiClick")
multiClickButton.addEventListener("mousedown", event => {
    if(event.button == 0) {
        console.log("left button")
    } else if(event.button == 1) {
        console.log("middle button")
    } else if (event.button == 2) {
        console.log("right button")
    }
})

const paragraph = document.querySelector(".para")
const paragraphButton = document.querySelector(".paraButton")

paragraph.addEventListener("mousedown", () => {
    console.log("paragraph handler")
})

paragraphButton.addEventListener("mousedown", () => {
    console.log("handler for button button")
    if (event.button == 2) event.stopPropagation();
})

window.addEventListener("keydown", event => {
    if(event.key == 'v') 
        document.body.style.backgroundColor = 'violet'
})

window.addEventListener("keyup", event => {
    if(event.key == 'v')
        document.body.style.backgroundColor = ''
})

window.addEventListener("keydown", event => {
    console.log(event)
    if(event.key == "u" && event.ctrlKey) {
        console.log("you can continue")
    }
})

// window.addEventListener("click", event => {
//     const dot = document.createElement("div");
//     dot.className = "dot"
//     console.log(event.pageX, event.pageY);
//     dot.style.left = (event.pageX -4) + "px";
//     dot.style.top = (event.pageY -4) + "px";
//     document.body.appendChild(dot);
// })

// window.addEventListener("mousemove", event => {
//     const dot = document.createElement("div");
//     dot.className = "trail"
//     dot.style.left = (event.pageX -4) + "px";
//     dot.style.top = (event.pageY - 4) + "px";
//     document.body.appendChild(dot)

//     setTimeout(() => {
//         document.body.removeChild(dot);
//     }, 500)
// })

let lastX;
let bar = document.querySelector("div")

function moved(event) {
    if(event.buttons == 0) {
        window.removeEventListener("mousemove", moved);
    } else {
        let dist = event.clientX - lastX;
        let newWidth = Math.max(10, bar.offsetWidth + dist);
        bar.style.width = newWidth + "px";
        lastX = event.clientX;
    }
}

bar.addEventListener("mousemove", event => {
    if(event.button == 0) {
        lastX = event.clientX;
        window.addEventListener("mousemove", moved);
        event.preventDefault()
    }
})

function update(event) {
    for(let dot; dot = document.querySelector("dot");) {
        dot.remove()
    }

    for(let i = 0; i < event.touches.length; i++) {
        let {pageX, pageY} = event.touches[i];
        let dot = document.createElement("dot");
        dot.style.left = (pageX - 50) + "px";
        dot.style.top = (pageY - 50) + "px";
        document.body.appendChild(dot);
    }
}

window.addEventListener("touchstart", update)
window.addEventListener("touchmove", update);
window.addEventListener("touchend", update)

document.body.appendChild(document.createTextNode("supercalifragisliticexpialidocious\n".repeat(1000)))

let bar2 = document.querySelector("#progress")
window.addEventListener("scroll", () => {
    let max = document.body.scrollHeight - innerHeight;
    bar2.style.width = `${(pageYOffset / max) * 100}%`
})

let help = document.querySelector("#help")
let fields = document.querySelectorAll("input")
for(let field of Array.from(fields)) {
    field.addEventListener("focus", event => {
        let text = event.target.getAttribute("data-help")
        help.textContent = text;
    })
    field.addEventListener("blur", event => {
        help.textContent = "";
    })
}

/******************************************************** */
// good to do time consuming things without delaying the page
/******************************************************** */
const squareWorker = new Worker('./worker.js')
squareWorker.addEventListener("message", event => {
    console.log("worker responded: ", event.data)
})

squareWorker.postMessage(10)
squareWorker.postMessage(24)
squareWorker.postMessage(500)

const bombTimer = setTimeout(() => {
    console.log("boom")
}, 500);

if(Math.random() < 0.5) {
    console.log("defused")
    clearTimeout(bombTimer)
}

let ticks = 0;
let clock = setInterval(() => {
  console.log("tick", ticks++);
  if (ticks == 10) {
    clearInterval(clock);
    console.log("stop.");
  }
}, 200);

let scheduled = null;

window.addEventListener("mousemove", event => {
    if (!scheduled) {
        setTimeout(() => {
            document.body.firstChild.textContent = `Mouse at ${scheduled.pageX}, ${scheduled.pageY}`
            scheduled = null;
        }, 500)
    }
    scheduled = event;
})

const ballon = document.getElementById("ballon")
function inflateBallon(amount) {
    if(ballon.textContent != '\u{1f4a5}') {
        if(parseInt(ballon.style.fontSize) >=  100) {
            console.log(ballon.textContent.codePointAt(0))
            ballon.textContent = '\u{1f4a5}';
            return
        }
        if(!ballon.style.fontSize) {
            ballon.style.fontSize = (2 * amount) + "px"
        } else {
            ballon.style.fontSize = (parseInt(ballon.style.fontSize) * 2) + "px"
        }
    }
} 
window.addEventListener("keydown", event => {
    if(event.key == 'ArrowUp') {
        inflateBallon(19)
    }
});

function deflateBallon(amount) {
    const actualSize = parseInt(ballon.style.fontSize)
    if (!actualSize) return;
    if(ballon.textContent != '\u{1f4a5}' && actualSize > amount) {
        ballon.style.fontSize = (actualSize - amount) + "px"
    }
}

window.addEventListener("keydown", event => {
    if(event.key == "ArrowDown") {
        event.preventDefault()
        deflateBallon(19)
    }
})

function asTabs(node) {
    let tabs = Array.from(node.children).map(node => {
      let button = document.createElement("button");
      button.textContent = node.getAttribute("data-tabname");
      let tab = {node, button};
      button.addEventListener("click", () => selectTab(tab));
      return tab;
    });

    let tabList = document.createElement("div");
    for (let {button} of tabs) tabList.appendChild(button);
    node.insertBefore(tabList, node.firstChild);

    function selectTab(selectedTab) {
      for (let tab of tabs) {
        let selected = tab == selectedTab;
        tab.node.style.display = selected ? "" : "none";
        tab.button.style.color = selected ? "red" : "";
      }
    }
    selectTab(tabs[0]);
  }

  asTabs(document.querySelector("tab-panel"));



