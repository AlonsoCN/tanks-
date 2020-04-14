class Tank {
  hasTankFired = false;

  constructor(x, y, position) {
    this.x = x;
    this.y = y;
    this.position = position || "DOWN";
    this.width = 30;
    this.height = 30;
    this.cannonWidth = 5;
    this.cannonHeight = 10;
  }

  draw() {
    this.move();
    rect(this.x, this.y, this.width, this.height);

    if (this.hasTankFired) {
      for (let i = this.x; i <= 300; i++) {
        rect(i, this.y, 5, 5);
      }
      this.hasTankFired = false;
    }
  }

  move() {
    if (keyIsDown(LEFT_ARROW)) {
      this.x = this.x - 1;
      this.position = "LEFT";
    }
    if (keyIsDown(RIGHT_ARROW)) {
      this.x = this.x + 1;
      this.position = "RIGHT";
    }
    if (keyIsDown(UP_ARROW)) {
      this.y = this.y - 1;
      this.position = "UP";
    }
    if (keyIsDown(DOWN_ARROW)) {
      this.y = this.y + 1;
      this.position = "DOWN";
    }

    this.cannonRotate();
  }

  cannonRotate() {
    if (this.position === "DOWN") {
      rect(
        this.x + (this.width / 2 - this.cannonWidth / 2),
        this.y + this.height,
        this.cannonWidth,
        this.cannonHeight
      );
    }
    if (this.position === "UP") {
      rect(
        this.x + (this.width / 2 - this.cannonWidth / 2),
        this.y - this.cannonHeight,
        this.cannonWidth,
        this.cannonHeight
      );
    }
    if (this.position === "RIGHT") {
      rect(
        this.x + this.width,
        this.y + (this.height / 2 - this.cannonWidth / 2),
        this.cannonHeight,
        this.cannonWidth
      );
    }
    if (this.position === "LEFT") {
      rect(
        this.x - this.cannonHeight,
        this.y + (this.height / 2 - this.cannonWidth / 2),
        this.cannonHeight,
        this.cannonWidth
      );
    }
  }

  fire() {
    this.hasTankFired = true;
  }
}
