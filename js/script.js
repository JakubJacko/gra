const gamePlan = {
    canvas: document.createElement("canvas"),
    init() {
        this.canvas.width = 500;
        this.canvas.height = 250;
        this.context = this.canvas.getContext("2d");
        document.body.append(this.canvas);
        window.addEventListener('keydown', (e) => {
            // gamePlan.key = e.keyCode;
        })
        window.addEventListener('keyup', (e) => {
            gamePlan.key = false;
        })
    },

    update() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        player.y++;
        player.update();
    },

    interwaval : setInterval(() => {
        console.log('interwaval');
        gamePlan.update();
    },1000),


}


gamePlan.init()

const player = new Player(0, 0, 10, 120);
console.log(player);