class Particle{
    constructor(x,y){
        var options = {
            restitution : 0.4
        }
        this.body = Matter.Bodies.circle(x,y,10,options);
        this.color = color(random(0,255),random(0,255),random(0,255));
        World.add(world,this.body);
    }
    display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        fill(this.color);
        ellipseMode(RADIUS);
        ellipse(0,0,20,20);
        pop();
    }
}