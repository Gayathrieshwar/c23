class box{

    constructor(x,y,width,height){

        var bo={
            restitution: 0.8
          
          }
          
          this.body=Bodies.rectangle(x,y,width,height,bo)
          World.add(myworld,this.body);
          this.width=width;
          this.height=height;
          
          
    }

    display(){
        var pos=this.body.position;
        var angle=this.body.angle
        push();
        translate(pos.x,pos.y)
        rotate(angle)
        rectMode(CENTER)
        fill("pink")
        stroke("blue")
        rect(0,0,this.width,this.height)
        pop();
    }
}
