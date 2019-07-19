

import config from './config.js'
import trackKeys from './keyboard.js'
import Vec from "./vector.js"
import allLevels from './levels.js'
import { drawActors, drawGrid, elt, overlap, flipHorizontally } from './utils.js'

class CanvasDisplay {
    constructor(parent, level) {
        const { scale } = config;
        this.canvas = document.createElement("canvas");
        this.canvas.width = Math.min(600, level.width * scale);
        this.canvas.height = Math.min(450, level.height * scale);
        parent.appendChild(this.canvas);
        this.cx = this.canvas.getContext("2d");

        this.flipPlayer = false;
        this.viewport = {
            left: 0, 
            top: 0,
            width: this.canvas.width / scale,
            height: this.canvas.height / scale
        };

        this.sprites = document.createElement("img");
        this.sprites.src = "img/sprites.png"
        this.playerSprites = document.createElement("img")
        this.playerSprites.src = "img/player.png"

        this.playerXOverlap = 4;
    }

    syncState(state) {
        this.updateViewport(state);
        this.clearDisplay(state.status);
        this.drawBackground(state.level);
        this.drawActors(state.actors);
    }

    updateViewport(state) {
        const view = this.viewport, margin = view.width/3;
        const player = state.player;
        const center = player.pos.plus(player.size.times(.5));
        if(center.x < view.left + margin) {
            view.left = Math.max(center.x - margin, 0);
        } else if (center.x > view.left + view.width - margin) {
            view.left = Math.min(center.x + margin - view.width, state.level.width - view.width);
        }

        if(center.y < view.top + margin) {
            view.top = Math.max(center.y - margin, 0);
        } else if (center.y > view.top + view.height - margin) {
            view.top = Math.min(center.y + margin - view.height, state.level.height - view.height);
        }
    }

    clearDisplay(status) {
        if(status == "won") {
            this.cx.fillStyle = "rgb(255, 191, 255)";
        } else if (status == "lost") {
            this.cx.fillStyle = "rgb(44, 136, 214)";
        } else {
            this.cx.fillStyle = "rgb(52, 166, 251)";
        }
        this.cx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }

    clear() {
        this.canvas.remove();
    }

    drawBackground(level) {
        const { scale } = config;
        const {left, top, width, height} = this.viewport;
        const xStart = Math.floor(left);
        const yStart = Math.ceil(left + width)
        const xEnd = Math.floor(top);
        const yEnd = Math.ceil(top + height)

        for(let y = yStart; y < yEnd; y++) {
            for(let x = xStart; y < xEnd; x++) {
                const tile = level.rows[y][x];
                if(tile == "empty") continue;
                const screenX = (x - left) * scale;
                const screenY = (y - top) * scale;
                let tileX = tile == "lava" ? scale : 0;
                this.cx.drawImage(this.sprites, tileX, 0, scale, scale, screenX, screenY, scale, scale);
            }
        }
    }

    drawPlayer(player, x, y, width, height) {
        const playerXOverlap = this.playerXOverlap
        width += playerXOverlap * 2;
        x -= playerXOverlap;
        if(player.speed.x != 0) this.flipPlayer = player.speed.x < 0;

        let tile = 8;
        if(player.speed.y != 0) {
            tile = 9;
        } else if (player.speed.x != 0) {
            tile = Math.floor(Date.now() / 60) % 8;
        } 

        this.cx.save();
        if(this.flipPlayer) {
            flipHorizontally(this.cx, x + width /2);
        }

        let tileX = tile * width;
        this.cx.drawImage(this.playerSprites, tileX, 0, width, height, x, y, width, height);
        this.cx.restore();
    }

    drawActors(actors) {
        const {scale} = config;
        for(let actor of actors) {
            const width = actor.size.x * scale;
            const height = actor.size.y * scale;
            const x = (actor.pos.x - this.viewport.left) * scale;
            const y = (actor.pos.y - this.viewport.top) * scale;
            if(actor.type == "player") {
                this.drawPlayer(actor, x, y, width, height);
            } else {
                const tileX = (actor.type == "coin" ? 2 : 1) * scale;
                this.cx.drawImage(this.sprites, tileX, 0, width, height, x, y, width, height);
            }
        }
    }

}


class DomDisplay {
    constructor(parent, level) {
        this.dom = elt("div", { class: "game" }, drawGrid(level));
        this.actorLayer = null;
        parent.appendChild(this.dom)
    }

    clear() { this.dom.remove(); }

    scrollPlayerIntoView(state) {
        const { scale } = config;
        let width = this.dom.clientWidth;
        let height = this.dom.clientHeight;
        let margin = width / 3;

        let left = this.dom.scrollLeft;
        let right = left + width;
        let top = this.dom.scrollTop;
        let bottom = top + height;

        let player = state.player;
        let center = player.pos.plus(player.size.times(.5)).times(scale);

        if (center.x < left + margin) {
            this.dom.scrollLeft = center.x - margin;
        } else if (center.x > right - margin) {
            this.dom.scrollLeft = center.x + margin - width;
        }

        if (center.y < top + margin) {
            this.dom.scrollTop = center.y - margin;
        } else if (center.y > bottom - margin) {
            this.dom.scrollTop = center.y + margin - height;
        }
    }

    syncState(state) {
        if (this.actorLayer) this.actorLayer.remove()
        this.actorLayer = drawActors(state.actors);
        this.dom.appendChild(this.actorLayer);
        this.dom.className = `game ${state.status}`;
        this.scrollPlayerIntoView(state)
    }
}


class Player {
    constructor(pos, speed) {
        this.pos = pos;
        this.speed = speed;
    }
    size = new Vec(.8, 1.5)

    get type() { return "player"; }

    static create(pos) {
        return new Player(pos.plus(new Vec(0, -.5)),
            new Vec(0, 0))
    }

    update(time, state, keys) {
        const { playerXSpeed, gravity, jumpSpeed } = config;
        let xSpeed = 0;
        if (keys.ArrowLeft) xSpeed -= playerXSpeed;
        if (keys.ArrowRight) xSpeed += playerXSpeed;
        let pos = this.pos;
        let movedX = pos.plus(new Vec(xSpeed * time, 0));
        if (!state.level.touches(movedX, this.size, "wall")) {
            pos = movedX;
        }

        let ySpeed = this.speed.y + time * gravity;
        let movedY = pos.plus(new Vec(0, ySpeed * time));
        if (!state.level.touches(movedY, this.size, "wall")) {
            pos = movedY;
        } else if (keys.ArrowUp && ySpeed > 0) {
            ySpeed = -jumpSpeed;
        } else {
            ySpeed = 0;
        }
        return new Player(pos, new Vec(xSpeed, ySpeed));
    }
}

class Lava {
    constructor(pos, speed, reset) {
        this.pos = pos;
        this.speed = speed;
        this.reset = reset;
    }
    size = new Vec(1, 1)

    get type() { return "lava"; }

    static create(pos, ch) {
        if (ch == "=") {
            return new Lava(pos, new Vec(2, 0))
        } else if (ch == "|") {
            return new Lava(pos, new Vec(0, 2))
        } else if (ch == "v") {
            return new Lava(pos, new Vec(0, 3), pos);
        }
    }

    collide(state) {
        return new State(state.level, state.actors, "lost")
    }

    update(time, state) {
        let newPos = this.pos.plus(this.speed.times(time));
        if (!state.level.touches(newPos, this.size, "wall")) {
            return new Lava(newPos, this.speed, this.reset);
        } else if (this.reset) {
            return new Lava(this.reset, this.speed, this.reset);
        } else {
            return new Lava(this.pos, this.speed.times(-1));
        }
    }
}

class Coin {
    constructor(pos, basePos, wobble) {
        this.pos = pos;
        this.basePos = basePos;
        this.wobble = wobble;
    }
    size = new Vec(.6, .6)

    get type() { return "coin"; }

    static create(pos) {
        const basePos = pos.plus(new Vec(.2, .1));
        return new Coin(basePos, basePos, Math.random() * Math.PI * 2);
    }

    collide(state) {
        let filtered = state.actors.filter(a => a != this);
        let status = state.status;
        if (!filtered.some(a => a.type == "coin")) status = "won";
        return new State(state.level, filtered, status);
    }

    update(time) {
        const { wobbleSpeed, wobbleDistance } = config;
        const wobble = this.wobble + time * wobbleSpeed;
        let wobblePos = Math.sin(wobble) * wobbleDistance;
        return new Coin(this.basePos.plus(new Vec(0, wobblePos)), this.basePos, wobble)
    }
}

class Monster {
    constructor(pos) { this.pos = pos; }

    size = new Vec(1.2, 2);

    get type() { return "monster"; }

    static create(pos) { return new Monster(pos.plus(new Vec(0, -1))); }

    update(time, state) {
        const { monsterSpeed } = config;
        let player = state.player;
        let speed = (player.pos.x < this.pos.x ? -1 : 1) * time * monsterSpeed;
        let newPos = new Vec(this.pos.x + speed, this.pos.y);
        if (state.level.touches(newPos, this.size, "wall")) return this;
        else return new Monster(newPos);
    }

    collide(state) {
        let player = state.player;
        if (player.pos.y + player.size.y < this.pos.y + 0.5) {
            let filtered = state.actors.filter(a => a != this);
            return new State(state.level, filtered, state.status);
        } else {
            return new State(state.level, state.actors, "lost");
        }
    }
}

const levelChars = {
    ".": "empty",
    "#": "wall",
    "+": "lava",
    "@": Player,
    "o": Coin,
    "=": Lava,
    "|": Lava,
    "v": Lava,
    "M": Monster
}

class Level {
    constructor(plan) {
        const rows = plan.trim().split("\n").map(floor => {
            return [...floor];

        });
        this.height = rows.length;
        this.width = rows[0].length;
        this.startActors = [];

        this.rows = rows.map((row, y) => {
            return row.map((ch, x) => {
                const type = levelChars[ch];
                if (typeof type == 'string') return type;
                this.startActors.push(
                    type.create(new Vec(x, y), ch)
                )
                return "empty";
            })
        })
    }

    touches(pos, size, type) {
        let xStart = Math.floor(pos.x);
        let xEnd = Math.ceil(pos.x + size.x);
        let yStart = Math.floor(pos.y);
        let yEnd = Math.ceil(pos.y + size.y);

        for (let y = yStart; y < yEnd; y++) {
            for (let x = xStart; x < xEnd; x++) {
                let isOutside = x < 0 || x >= this.width ||
                    y < 0 || y >= this.height;
                let here = isOutside ? "wall" : this.rows[y][x];
                if (here == type) return true;
            }
        }
        return false;
    }
}

class State {
    constructor(level, actors, status) {
        this.level = level;
        this.actors = actors;
        this.status = status;
    }

    static start(level) {
        return new State(level, level.startActors, "playing");
    }

    get player() {
        return this.actors.find(a => a.type == "player");
    }

    update(time, keys) {
        let actors = this.actors.map(actor => actor.update(time, this, keys))
        let newState = new State(this.level, actors, this.status);

        if (newState.status != "playing") return newState;
        let player = newState.player;
        if (this.level.touches(player.pos, player.size, "lava")) {
            return new State(this.level, actors, "lost");
        }

        for (let actor of actors) {
            if (actor != player && overlap(actor, player)) {
                newState = actor.collide(newState);
            }
        }
        return newState;
    }
}

function runAnimation(frameFunc) {
    let lastTime = null;
    function frame(time) {
        if (lastTime != null) {
            let timeStep = Math.min(time - lastTime, 100) / 1000;
            if (frameFunc(timeStep) === false) return;
        }
        lastTime = time;
        requestAnimationFrame(frame)
    }
    requestAnimationFrame(frame)
}

function runLevel(level, Display) {
    let display = new Display(document.body, level);
    let state = State.start(level);
    let ending = 1;
    let running = "yes";

    return new Promise(resolve => {
        function escHandler(event) {
            if (event.key != "Escape") return;
            event.preventDefault();
            if (running == "no") {
                running = "yes";
                runAnimation(frame);
            } else if (running == "yes") {
                running = "pausing";
            } else {
                running = "yes";
            }
        }
        window.addEventListener("keydown", escHandler);
        const arrowKeys = trackKeys(["ArrowUp", "ArrowLeft", "ArrowRight"]);

        function frame(time) {
            if (running == "pausing") {
                running = "no";
                return false;
            }

            state = state.update(time, arrowKeys);
            display.syncState(state);
            if (state.status == "playing") {
                return true;
            } else if (ending > 0) {
                ending -= time;
                return true;
            } else {
                display.clear();
                window.removeEventListener("keydown", escHandler);
                arrowKeys.unregister();
                resolve(state.status);
                return false;
            }
        }
        runAnimation(frame);
    });
}

async function runGame(plans, Display) {
    const { lives } = config;
    let deathCounter = 0;
    for (let level = 0; level < plans.length;) {
        console.log(`Level ${level + 1}, lives: ${lives - deathCounter}`);
        const status = await runLevel(new Level(plans[level]), Display);
        if (status == "lost") deathCounter++;
        if (deathCounter >= lives) {
            level = 0;
        }
        if (status == "won") level++;
    }
    console.log("you have won!");
}

runGame(allLevels, CanvasDisplay);