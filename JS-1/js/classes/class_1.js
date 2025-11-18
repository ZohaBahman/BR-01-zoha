// class User {
//     constructor(name) {
//         this.name = name;
//     }
//     sayHello(){
//         console.log('Hello, ', this.name);
//     }
// }

// const user = new User('Tom');

// user.sayHello();



// class Animal {
//     constructor(name) {
//         this.name = name;
//         this.speed = 0;
//     }

//     run(speed) {
//         this.speed = speed
//         console.log(`${this.name} runs with speed ${this.speed}`);
//     }
//     stop() {
//         this.speed = 0;
//         console.log(`${this.name} stands still`);
//     }
// }

// class Zebra extends Animal {
//     hide() {
//         console.log(`${this.name} hides!`);
//     }

//     stop() {
//         super.stop();
        
//     }
// }

// let zebra = new Zebra('Black zebra');

// zebra.stop();




class Rectangle {
    constructor(width, height, left, top, bg) {
        this.width = width;
        this.height=height;
        this.left=left;
        this.top=top;
        this.bg=bg;
    }

    draw() {
        const div = `
        <div style="
        position: absolute;
        width:${this.width}px; 
        height: ${this.height}px;
        left: ${this.left}px;
        top: ${this.top}px;
        background-color: ${this.bg};">
        </div>
        `;
        document.getElementById('app').innerHTML = document.getElementById('app').innerHTML
    }
}

let rec1 = new Rectangle(100, 200, 0, 300, 'pink');