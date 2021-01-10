class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png")
    this.smokeImage = loadImage("sprites/smoke.png")
    this.path  = []   //arr =[[x1,y1],[x2,y2],...]
                  
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    super.display();
    
if(this.body.velocity.x > 2 && this.body.position.x > 200 ){

  var position = [this.body.position.x , this.body.position.y]   // x1,y1 = position1  x2,y2 = position2
  this.path.push(position)

}




for(var i = 0 ; i < this.path.length; i ++){

image(this.smokeImage , this.path[i][0] , this.path[i][1] )

}

  }
}
