export function startMatrixEffect() {
    const canvas = document.getElementById('canv');
    if (!canvas) return; // Exit if canvas is not found
    const ctx = canvas.getContext('2d');

    const w = canvas.width = document.body.offsetWidth;
    const h = canvas.height = document.body.offsetHeight;
    const cols = Math.floor(w / 5) + 1;
    const ypos = Array(cols).fill(0);

    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, w, h);

    function matrix() {
        ctx.fillStyle = '#0001';
        ctx.fillRect(0, 0, w, h);

        ctx.fillStyle = '#00b07c';
        ctx.font = '15pt digital-7';

        ypos.forEach((y, ind) => {
            const text = String.fromCharCode(Math.random() * 128);
            const x = ind * 20;
            ctx.fillText(text, x, y);
            if (y > 100 + Math.random() * 10000) ypos[ind] = 0;
            else ypos[ind] = y + 20;
        });
    }



    setInterval(matrix, 50);
}

// async function getVisitorIP() {
//     try {
//         const response = await fetch('https://api.ipify.org?format=json');
//         const data = await response.json();
//         return data.ip;
//     } catch (error) {
//         console.error("Error fetching IP address:", error);
//     }
// }
//
// // Usage example
// window.onload = async function () {
//     const visitorIP = await getVisitorIP();
//     if (visitorIP) {
//         document.getElementById('ips').innerHTML = `<li>${visitorIP}</li>`;
//     }
// };