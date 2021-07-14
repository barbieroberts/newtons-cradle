class Sting{
    constructor(body1,body2,offsetX,offsetY)
        {
            this.offsetX=offsetX;
            this.offsetY=offsetY;
            var options=
                {
                bodyA:body1,
                bodyB:body2,
                pointB:{x:this.offsetX,y:this.offsetY}
                }
            this.sting=Matter.Constraint.create(options)
            World.add(world,this.sting)
        }
    display(){
        var place1=this.sting.bodyA.position;
        var place2=this.sting.bodyB.position;
        strokeWeight(2);

        var guru1A = place1.x;
        var guru1B = place1.y;

        var guru2A = place2.x + this.offsetX
        var guru2B  = place2.y + this.offsetY

        line(guru1A,guru1B,guru2A,guru2B);
    }
}