class Bottle
{
    constructor(x,y,w,h)
    {
        this.x= x
        this.y = y;
        this.w = w;
        this.h = h;
        this.image = loadImage("./assets/waterBottle.png")
        this.body = Bodies.rectangle(x,y,w,h);
        World.add(myWorld,this.body);
    }
    display()
    {
        var pos = this.body.position;
        push();
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.w,this.h);
        pop();
    }
}