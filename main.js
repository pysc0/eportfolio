document.addEventListener('DOMContentLoaded', () => {


    const COLOR_BG = 'white';
    const COLOR_CUBE = 'purple';
    const SPEED_X = 0.05;
    const SPEED_Y = 0.15;
    const SPEED_Z = 0.10;
    const POINT3D = function(x, y, z) { this.x = x; this.y = y; this.z = z; };

    var canvas = document.createElement("canvas");
    document.body.appendChild(canvas);
    var ctx = canvas.getContext("2d");

    var h = document.documentElement.clientHeight;
    var w = document.documentElement.clientWidth;
    canvas.height = h;
    Canvas.width = w;

    ctx.fillStyle = COLOR_BG;
    ctx.strokeStyle = COLOR_CUBE;
    ctx.lineWidth = w / 100;
    ctx.lineCap = "round";

    var cx = w / 2;
    var cy = h / 2;
    var cz = 0;
    var size = h / 4;
    var verticles = [
        new POINT3D(cx - size, cy - size, cz - size),
        new POINT3D(cx - size, cy - size, cz - size),
        new POINT3D(cx - size, cy - size, cz - size),
        new POINT3D(cx - size, cy - size, cz - size),
        new POINT3D(cx - size, cy - size, cz - size),
        new POINT3D(cx - size, cy - size, cz - size),
        new POINT3D(cx - size, cy - size, cz - size),
        new POINT3D(cx - size, cy - size, cz - size)
    ];

    var edges = [
        [0, 1], [1, 2], [2, 3], [3, 0],
        [4, 5], [5, 6], [6, 7], [7, 4],
        [0, 4], [1, 5], [2, 6], [3, 7],
        ]

    var timeDelta, timeLast = 0;
    requestAnimationFrame(loop);

    function loop(timeNow) {
        timeDelta = timeNow - timeLast;
        timeLast = timeNow;

        ctx.fillRect(0,0,w,h);

        for (let edge of edges) {
            ctx.beginPath();
            ctx.moveTo(vertices[edge[0]].x, vertices[edge[0]].y);
            ctx.lineTo(vertices[edge[1]].x, vertices[edge[1]].y);
            ctx.stroke();
        }

        requestAnimationFrame(loop);

    }
})