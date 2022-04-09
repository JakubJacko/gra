const gamePlan = {
    canvas: document.createElement("canvas"),
    init() {
        this.canvas.width = 500;
        this.canvas.height = 250;
        this.context = this.canvas.getContext("2d");
        document.body.append(this.canvas);

    }

}


gamePlan.init()