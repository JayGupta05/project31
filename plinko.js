class Plinko{
    constructor(x,y){
        var options = {
            isStatic: true
        }
        this.body = Matter.Bodies.circle(x,y,10,options);
        World.add(world,this.body);
    }
    display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        ellipseMode(RADIUS);
        ellipse(0,0,20,20);
        pop();
    }
}