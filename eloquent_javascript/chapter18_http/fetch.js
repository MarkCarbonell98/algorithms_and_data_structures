

fetch("example/data.txt")
    .then(response => {
        console.log(response.status) //
        console.log(response.headers.get("Content-Type")) //text
        return response
    })
    .then(resp => resp.text())
    .then(resp => console.log(resp))

fetch("example/data.txt", {method: "DELETE"})
.then(resp => {
    console.log(resp.status)
})

fetch("example/data.txt", {headers: {Range: "bytes=8-19"}})
.then(resp => {
    return resp.text();
})
.then(console.log)

document.querySelector("input").focus();
console.log(document.activeElement.tagName);

document.querySelector("input").blur();
console.log(document.activeElement.tagName);



