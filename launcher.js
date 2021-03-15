class Launcher {
    constructor(bodyA, pointB) {
      var options = {
        bodyA: bodyA,
        pointB: pointB,
        stiffness: 0.01,
        length: 70,
      };
      this.pointB = pointB;
      this.launcher = Constraint.create(options);
      World.add(world, this.launcher);
    }
  
    paper_flying() {
      this.launcher.bodyA = null;
    }
  
    display() {
      if (this.launcher.bodyA) {
        var bodyA = this.launcher.bodyA.position;
        var pointB = this.pointB;
        stroke("brown");
        strokeWeight(7);
        line(bodyA.x, bodyA.y, pointB.x, pointB.y);
      }
    }
  }
  