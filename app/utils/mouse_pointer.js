const circle = document.querySelector('.circle');

document.addEventListener('mousemove', (event) => {
    const circleRect = circle.getBoundingClientRect();
    console.log(circleRect);
    const x = event.clientX - circleRect.width / 2;
    const y = event.clientY - circleRect.height / 2;

    circle.style.transform = `translate(${x}px, ${y}px)`;

});
