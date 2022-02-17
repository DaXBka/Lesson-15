class DomElement {
    height = 100;
    width = 100;
    bg = 'blue';
    position = 'absolute';
    top = 50;
    left = 50;
    walkValue = 50;
    block;

    addElement() {
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
    }

    render() {
        this.block.style.top = this.top + 'px';
        this.block.style.left = this.left + 'px';
    }

    changePosition(event) {
        switch (event.key.slice(5)) {
            case 'Up':
                this.top -= this.walkValue;
                break;
            case 'Down':
                this.top += this.walkValue;
                break;
            case 'Left':
                this.left -= this.walkValue;
                break;
            case 'Right':
                this.left += this.walkValue;
                break;
        }
        this.render();
    }
}

// Конец классовой части
const block = new DomElement();

document.addEventListener('DOMContentLoaded', () => {
    block.addElement();
});

document.addEventListener('keydown', event => {
    block.changePosition(event);
});
