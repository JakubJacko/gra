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
        // player.speedX = 0;
        // if (gamePlan.key && gamePlan.key == 39) {
        //     player.speedX = player.speedX+1;
        // }
    },

    interwaval : setInterval(() => {
        // console.log('interwaval');
        gamePlan.update();
    },25),


}


gamePlan.init()

const player = new Player(50, 150, 40, 50);
// const obstacles = [new Rock()];
// console.log(player);