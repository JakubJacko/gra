class Player {
    constructor(x, y, w, h){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.floor = y;
        this.maxJump = 25;
        this.wasItUp = false;
        this.speedY = 0;
        this.ctx = gamePlan.context;
        this.ctx.fillStyle = 'red';
        this.ctx.fillRect(this.x, this.y, this.w, this.h);
        // this.speedX = 0;
        // this.speedY = 0;
        // this.newPos = () => {
        //     this.x += this.speedX;
        //     this.y += this.speedY;
        // }
    }
    update(){
        if (this.y - this.speedY >= this.maxJump && !this.wasItUp){
        // this.y = this.y + this.speedY;
        this.y -= this.speedY;
        } else {
            this.wasItUp = true;
            if(this.floor <= this.y){
                // this.y = this.floor;
                this.speedY = 0;
                this.wasItUp = false;
            }else{
                this.y += this.speedY;
                console.log('end');
            }

        }
        this.ctx.fillStyle = 'red';
        this.ctx.fillRect(this.x, this.y, this.w, this.h);


    }
    changePos (key){
        // if(key == 'ArrowUp'){}
        if(['ArrowUp',' '].includes(key)){
            this.speedY = 5;

            console.log('jump'+key);
        }

    }
}

class Rock {
    constructor(x, y, w, h,){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.ctx = gamePlan.context;
        this.ctx.fillStyle = 'green';
        this.ctx.fillRect(this.x, this.y, this.w, this.h);
    }
    update(){
        this.ctx.fillStyle = 'green';
        this.ctx.fillRect(this.x, this.y, this.w, this.h);
    }
}