const DomElement = function (
    selector,
    height = 100,
    width = 100,
    bg = 'red',
    fontSize = 16
) {
    this.selector = selector;
    this.height = height + 'px';
    this.width = width + 'px';
    this.bg = bg;
    this.fontSize = fontSize + 'px';
};

DomElement.prototype.addElement = function () {
    let block;

    if (this.selector.substring(0, 1) === '.') {
        block = document.createElement('div');
        block.className = this.selector.slice(1);
    } else if (this.selector.substring(0, 1) === '#') {
        block = document.createElement('p');
        block.setAttribute('id', this.selector.slice(1));
    }

    block.style.cssText = `
        height: ${this.height};
        width: ${this.width};
        background: ${this.bg};
        font-size: ${this.fontSize};
        text-overflow: clip;
        overflow: hidden;
    `;

    block.textContent = prompt(`Текст для ${this.selector}:`);
    document.body.append(block);
};

const block1 = new DomElement('.class', 107, 130, 'aqua', 13);
const block2 = new DomElement('#id', 240, 300, 'green', 20);

block1.addElement();
block2.addElement();
