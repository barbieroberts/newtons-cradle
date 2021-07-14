class Bob
{
    constructor(x,y,r)
    {
         var options=
            {
                isStatic:false,
                restitution:1,
                friction:0,
                density:7.8,
            }
            this.x=x;
            this.y=y;
            this.r=r;

         this.body= Bodies.circle(this.x,this.y,(this.r=20)/2,options)
         World.add(world,this.body)

         console.log(this.body)
    }
    display()
    {
        push();
        ellipseMode(RADIUS);
        fill(254,0,255);
        ellipse(this.body.position.x,this.body.position.y,25,25);
        pop();
    }
}