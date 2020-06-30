class Box {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0.8,
          'friction':0.3,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }

    display(){

      //console.log(this.body.speed);
      if(this.body.speed > 3){
        //World.remove(world,this.body);
        push();
        this.visiblity = this.visiblity-5;
        tint(255,this.visiblity);
        image(this.image,this.body.position.x,this.body.position.y,50,50);
        pop();
      } else {
        var pos =this.body.position;
        var angle = this.body.angle;
        /*push();
        translate(pos.x,pos.y);
        rotate(angle);*/
        image(this.image,pos.x,pos.y,50,50);
        //pop();
      }
  }

  score() {
    if(this.visiblity < 0 && this.visiblity > -105) {
      score++;
    }
  }
}