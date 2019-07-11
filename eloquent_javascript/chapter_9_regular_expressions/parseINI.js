const string = `searchengine=https://duckduckgo.com/?q=$1
spitefulness=9.7

; comments are preceded by a semicolon...
; each section concerns an individual enemy
[larry]
fullname=Larry Doe
type=kindergarten bully
website=http://www.geocities.com/CapeCanaveral/11451

[davaeorn]
fullname=Davaeorn
type=evil wizard
outputdir=/home/marijn/enemies/davaeorn`

function parseINI(string) {
    let result = {}
    let section = result;
    string.split(/\r?\n/).forEach(line => {
        let match;
        if(match = line.match(/^(\w+)=(.*)$/)) {
            section[match[1]] = match[2]
        } else if(match = line.match(/^\[(.*)\]$/)) {
            section = result[match[1]] = {};
        } else if(!/^\s*(;.*)?$/.test(line)) {
            throw new Error(`Line ${line} is not valid`)
        }
    })
    return result
}

console.log(parseINI(string))