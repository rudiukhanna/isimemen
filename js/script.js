const marquee = document.getElementById('marquee');
const marqueeText = marquee.innerHTML;

marquee.innerHTML = `<span>${marqueeText}</span><span>${marqueeText}</span><span>${marqueeText}</span>`;

