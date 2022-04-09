class Player {
    constructor(x, y, w, h){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.ctx = gamePlan.context;
        this.ctx.fillStyle = 'red';
        this.ctx.fillRect(this.x, this.y, this.w, this.h);
    }
    update(){
        this.ctx.fillRect(this.x, this.y, this.w, this.h);
        
    }
}