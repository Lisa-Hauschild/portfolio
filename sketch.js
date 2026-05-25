const heroSketch = (p) => {
  class Fish {
    constructor(x, y, bodyLength, bodyHeight, bodyColor, speed) {
      this.x = x;
      this.y = y;
      this.bodyLength = bodyLength;
      this.bodyHeight = bodyHeight;
      this.bodyColor = bodyColor;
      this.speed = speed;
    }

    move() {
      this.x += this.speed;
      if (this.speed > 0 && this.x - this.bodyLength / 2 > p.width) {
        this.x = -this.bodyLength;
      }
      if (this.speed < 0 && this.x + this.bodyLength / 2 < 0) {
        this.x = p.width + this.bodyLength;
      }
    }

    display() {
      p.push();
      p.translate(this.x, this.y);
      if (this.speed < 0) {
        p.scale(-1, 1);
      }
      p.noStroke();
      p.fill(this.bodyColor);
      p.ellipse(0, 0, this.bodyLength, this.bodyHeight);
      const tailWidth = this.bodyLength / 4;
      const tailHeight = this.bodyHeight / 2;
      p.triangle(
        -this.bodyLength / 4,
        0,
        -this.bodyLength / 2 - tailWidth,
        -tailHeight,
        -this.bodyLength / 2 - tailWidth,
        tailHeight
      );
      p.fill(33);
      p.ellipse(this.bodyLength / 4, 0, this.bodyHeight / 4, this.bodyHeight / 4);
      p.fill(255);
      p.ellipse(this.bodyLength / 3.5, -3, this.bodyHeight / 9, this.bodyHeight / 9);
      p.pop();
    }
  }

  class Bubble {
    constructor(x, y) {
      this.x = x;
      this.y = y;
      this.vel = p.createVector(0, p.random(-3, -1));
      this.diam = p.random(5, 30);
      this.alpha = 180;
    }

    move() {
      this.x += this.vel.x;
      this.y += this.vel.y;
      this.alpha -= 2;
    }

    display() {
      p.fill(7, 139, 166, this.alpha);
      p.stroke(255, this.alpha);
      p.strokeWeight(1);
      p.ellipse(this.x, this.y, this.diam, this.diam);
      p.noStroke();
      p.fill(255, this.alpha);
      p.push();
      p.translate(this.x + this.diam / 6, this.y - this.diam / 6);
      p.rotate(p.radians(45));
      p.ellipse(0, 0, this.diam / 4, this.diam / 8);
      p.pop();
    }

    isFinished() {
      return this.alpha <= 0;
    }
  }

  let fish1;
  let fish2;
  let fish3;
  let fish4;
  let bubbles = [];

  p.setup = () => {
    const canvas = p.createCanvas(p.windowWidth, p.windowHeight);
    canvas.parent('hero-canvas');
    const bottomY1 = p.height * 0.82;
    const bottomY2 = p.height * 0.88;
    const bottomY3 = p.height * 0.8;
    const bottomY4 = p.height * 0.92;
    fish1 = new Fish(100, bottomY1, 130, 94, p.color(168, 130, 191), 2);
    fish2 = new Fish(700, bottomY2, 180, 120, p.color(255, 150, 100), -3);
    fish3 = new Fish(10, bottomY3, 120, 94, p.color(168, 130, 191), 3);
    fish4 = new Fish(10, bottomY4, 180, 94, p.color(168, 130, 171), 4);
  };

  p.draw = () => {
    p.background(255);
    fish1.move();
    fish1.display();
    fish2.move();
    fish2.display();
    fish3.move();
    fish3.display();
    fish4.move();
    fish4.display();
    if (p.frameCount % 20 === 0) {
      bubbles.push(new Bubble(fish1.x + fish1.bodyLength / 4, fish1.y));
      bubbles.push(new Bubble(fish2.x - fish2.bodyLength / 4, fish2.y));
      bubbles.push(new Bubble(fish3.x - fish3.bodyLength / 4, fish3.y));
       bubbles.push(new Bubble(fish4.x - fish4.bodyLength / 50, fish4.y));
    }
    for (let i = bubbles.length - 1; i >= 0; i--) {
      bubbles[i].move();
      bubbles[i].display();
      if (bubbles[i].isFinished()) {
        bubbles.splice(i, 1);
      }
    }
  };

  p.mouseMoved = () => {
    bubbles.push(new Bubble(p.mouseX, p.mouseY));
  };

  p.windowResized = () => {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };
};

new p5(heroSketch);
document.querySelectorAll('.paper-canvas').forEach((container) => {

  const paperSketch = (p) => {

    p.setup = () => {

      const canvas = p.createCanvas(
        window.innerWidth,
        window.innerHeight
      );

      canvas.parent(container);
    };

    p.draw = () => {

      p.background(255, 255, 247);

      p.stroke(173, 222, 237);

      // horizontal lines
      for (let i = 0; i < 50; i++) {

        const y = i * 20;

        p.line(0, y, p.width, y);
      }

      // vertical lines
      for (let j = 0; j < 50; j++) {

        const x = j * 20;

        p.line(x, 0, x, p.height);
      }
    };

    p.windowResized = () => {

      p.resizeCanvas(
        window.innerWidth,
        window.innerHeight
      );
    };
  };

  new p5(paperSketch);
});
