class box {
    constructor(x,y,width,height) {
var options={
    restitution:1
}

this.body=Bodies.rectangle(x,y,width,height,options);
this.width=width;
this.height=height;

World.add(world,this.body);


    }
    display() {
      var pos=this.body.position;
      var angle=this.body.angle;
      
        rectMode(CENTER);
        fill("red");
        rect(pos.x,pos.y,this.width,this.height);
         
    }
}