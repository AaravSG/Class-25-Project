class Dustbin {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
	  this.image = loadImage("dustbingreen.png");
	  this.image.scale = 0.5;
	  World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
	  rect(pos.x, pos.y, this.width, this.height);
    }
  };