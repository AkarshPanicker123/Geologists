
class Sand{
    constructor(x, y ) {
      var options = {
        'density':1.3,
        'friction': 5,
        'restitution':1,
      };
      this.body = Bodies.rectangle(x, y, 7,7, options);
      this.width = 7;
      this.height = 7;
      World.add(world, this.body);
    };
    display(){
      var pos = this.body.position;
      var angle = this.body.angle;
  
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      fill('orange')
      rectMode(CENTER)
      rect(0, 0, this.width, this.height);
      pop();
    };
  };