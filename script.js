const DomElement = function () {
    this.height = 100;
    this.width = 100;
    this.bg = 'red';
    this.position = 'absolute';
    this.top = 0;
    this.left = 0;
    this.block;
};
DomElement.prototype.addElement = function () {
    this.block = document.createElement('div');
    this.block.style.cssText = `
        height: ${this.height}px;
        width: ${this.width}px;
        background: ${this.bg};
        position: ${this.position};
        top: ${this.top}px;
        left: ${this.left}px;
    `;
    document.body.prepend(this.block);
};
DomElement.prototype.changeStyles = function () {
    this.block.style.cssText = `
        height: ${this.height}px;
        width: ${this.width}px;
        background: ${this.bg};
        position: ${this.position};
        top: ${this.top}px;
        left: ${this.left}px;
    `;
};

DomElement.prototype.changeElement = function (event) {
    switch (event.key.slice(5)) {
        case 'Up':
            block.top -= 10;
            block.changeStyles();
            break;
        case 'Down':
            block.top += 10;
            block.changeStyles();
            break;
        case 'Left':
            block.left -= 10;
            block.changeStyles();
            break;
        case 'Right':
            block.left += 10;
            block.changeStyles();
            break;
    }
};

const block = new DomElement();
document.addEventListener('DOMContentLoaded', () => {
    block.addElement();
});

document.addEventListener('keydown', block.changeElement);
