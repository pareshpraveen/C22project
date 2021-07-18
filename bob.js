class Bob{
    constructor(x,y){
        var op = {
            density:0.8,
            isStatic:false,
        }
        this.body = Bodies.circle(x,y,20,op);
        World.add(world,this.body);

    }
    display(){
        var pos = this.body.position;
        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y,20);
    }
}