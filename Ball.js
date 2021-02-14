
class Ball{
  constructor(x, y , height ,width) {
    var options = {
      'density':0.3,
      'friction': 5,
      'restitution':1,
    };
    this.body = Bodies.rectangle(x, y, height,width, options);
    this.width = this.body.height;
    this.height = this.body.width;
    World.add(world, this.body);
  };
  display(){
    var pos = this.body.position;
    var angle = this.body.angle;

    push();
    translate(pos.x, pos.y);
    rotate(angle);
    fill('pink')
    rectMode(CENTER)
    rect(0, 0, this.width, this.height);
    pop();
  };
};