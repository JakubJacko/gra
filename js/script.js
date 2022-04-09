const gamePlan = {
    canvas: document.createElement("canvas"),
    init() {
        this.canvas.width = 500;
        this.canvas.height = 250;
        this.context = this.canvas.getContext("2d");
        document.body.append(this.canvas);
        window.addEventListener('keydown', (e) => {
            player.changePos(e.key);
        })
        window.addEventListener('keyup', (e) => {
            player.changePos(e.key);
        })
    },

    update() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        // player.x++;
        player.update();
        for(const o of obstacles){
            o.update();
            if(o.x <= 0 - o.w){
                console.log('remove');
                // obstacles.shift();
                o.x = 470;
            }
        }
    },

    interwaval : setInterval(() => {
        // console.log('interwaval');
        gamePlan.update();
    },25),


}


gamePlan.init()

const player = new Player(50, 150, 40, 50);
const obstacles = [
    new Rock(250, 150, 50, 50),
    new Rock(350, 100, 60, 40),
];
// console.log(player);