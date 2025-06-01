for (let i = 0; i < 20; i++) {
    const heart = document.createElement('div');
    heart.className = 'floating-heart';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.top = Math.random() * 100 + 'vh';
    heart.style.fontSize = (Math.random() * 10 + 10) + 'px';
    heart.style.animationDelay = (Math.random() * 5) + 's';
    heart.innerHTML = '❤️';
    document.body.appendChild(heart);
}
