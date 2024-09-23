window.addEventListener('DOMContentLoaded', () => {
    document.body.classList.add('fade-in');
});

const bgAnimation = document.getElementById
('bgAnimation');

const numberOfColorBoxes = 400;

for  (let i =0;i< numberOfColorBoxes; i++) {
    const ColoBox = document.createElement
    ('div');
    ColorBox.classList.add('colorBox');
    bgAnimation.append(ColorBox)    
}
