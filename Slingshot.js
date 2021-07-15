class SlingShot {
    constructor(bodyA, pointB) {
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
       
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
        this.pointB = pointB;
    }

    display() {
        if (this.sling.bodyA) {
            var bodyA = this.sling.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            line(bodyA.x, bodyA.y, pointB.x, pointB.y);
        }
    }

    fly() {
        this.sling.bodyA = poly.body;
    }

    attach(body) {

        this.sling.bodyA = body;

    }
}
