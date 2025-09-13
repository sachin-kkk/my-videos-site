// transition.js
function addHeartBurstTransition(element, redirectUrl) {
    const colors = ["#ff1e73","#ff5f5f","#ff9a76","#ffde59","#ff7eb9","#ff65a3"];

    element.addEventListener('click', () => {
        // burst hearts
        for (let i = 0; i < 45; i++) {
            const b = document.createElement('div');
            b.className = 'burst-heart';
            b.innerHTML = '❤';
            b.style.left = window.innerWidth / 2 + 'px';
            b.style.top = window.innerHeight / 2 + 'px';
            b.style.color = colors[Math.floor(Math.random() * colors.length)];
            const angle = Math.random() * 2 * Math.PI;
            const distance = 100 + Math.random() * 200;
            const x = Math.cos(angle) * distance + "px";
            const y = Math.sin(angle) * distance + "px";
            b.style.setProperty('--x', x);
            b.style.setProperty('--y', y);
            document.body.appendChild(b);
            setTimeout(() => b.remove(), 1600);
        }

        // curtain
        const left = document.createElement('div');
        const right = document.createElement('div');
        left.className = "curtain left";
        right.className = "curtain right";
        document.body.appendChild(left);
        document.body.appendChild(right);
        left.classList.add("open-left");
        right.classList.add("open-right");

        setTimeout(() => {
            window.location.href = redirectUrl;
        }, 1300);
    });
}

