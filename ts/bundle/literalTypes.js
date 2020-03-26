class UIElement {
    animate(dx, dy, easing) {
        if (easing === 'ease-in') {
        }
        else if (easing === 'ease-out') {
        }
        else if (easing === 'ease-in-out') {
        }
        else {
            throw new Error('should not pass null or undefined');
        }
    }
}
let button = new UIElement();
button.animate(0, 0, 'ease-in');
