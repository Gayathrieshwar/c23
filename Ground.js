class Ground{

    constructor(x,y,width,height){

        var go={
            isStatic:true
          
          }
          
          this.body=Bodies.rectangle(x,y,width,height,go)
          World.add(myworld,this.body);
          this.width=width;
          this.height=height;
          
          
    }

    display(){

        rectMode(CENTER); 
        push();
        fill("pink")
        rect(this.body.position.x,this.body.position.y,this.width,this.height)
        pop()
    }
}