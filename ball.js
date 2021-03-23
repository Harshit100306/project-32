class ball {
  constructor(x, y, r) {
    var options = {
      isStatic: false,
      restitution: 0.3,
      friction: 0.5,
      density: 1.2,
    };
    this.x = x;
    this.y = y;
    this.r = r;
    this.body = Bodies.circle(x, y, r, options);
    this.image = loadImage("ball.png");
    this.trajectory =[];
    World.add(world, this.body);
  }

  display() {
    var angle = this.body.angle;

    if(this.body.velocity.x > 10 && this.body.position.x > 200){
      var position = [this.body.position.x, this.body.position.y];
      this.trajectory.push(position);
    }
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0, 70, 70);
    pop();
  }
}
