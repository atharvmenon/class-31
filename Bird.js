class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smokeImage = loadImage("sprites/smoke.png");
    this.trajectory = [];
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    super.display();

    if(this.body.velocity.x>10 && this.body.position.x>220){
      var position = [this.body.position.x,this.body.position.y];
      this.trajectory.push(position);
    }

    //this.trajectory = [[200, 195], [205,190], [210,185]............]
    // i                      0         1           2
    //sub-index            0    1     0    1      0 
    
    //for(initial condition; end condition; in-between condititon)
    for(var i = 0; i<this.trajectory.length; i++){
      image(this.smokeImage, this.trajectory[i][0], this.trajectory[i][1]);
    }

    

  }
}
