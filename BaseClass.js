class BaseClass{
    constructor(x, y, width, height, angle){
        var BaseClass_options = {
            restitution: 0.5,
            friction: 1.0,
            density: 1.5,
        }
        this.body = Bodies.rectangle(x, y, width, height, BaseClass_options);
        this.width = width;
        this.height = height;
        this.image = loadImage("base.png");
        World.add(world, this.body);
    }
    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
    }
}