// 获取canvas元素
var canvas = document.getElementById("myCanvas");
// 获取2D上下文
var ctx = canvas.getContext("2d");

// 定义球体的半径
var radius = 150;

// 定义球体的中心点
var centerX = canvas.width / 2;
var centerY = canvas.height / 2;

// 定义递归细分的次数
var subdivisions = 3;

// 定义单位圆内接正四面体的顶点
var tetrahedronVertices = [
    { x: -1, y: -1, z: -1 },
    { x: 1, y: -1, z: -1 },
    { x: 0, y: 1, z: -1 },
    { x: 0, y: 0, z: 1 }
];

// 递归细分函数
function subdivide(tetrahedron, depth) {
    if (depth === 0) {
        return tetrahedron;
    }

    var newTetrahedron = [];

    for (var i = 0; i < tetrahedron.length; i++) {
        var a = tetrahedron[i];
        var b = tetrahedron[(i + 1) % tetrahedron.length];
        var c = tetrahedron[(i + 2) % tetrahedron.length];

        var midAB = {
            x: (a.x + b.x) / 2,
            y: (a.y + b.y) / 2,
            z: (a.z + b.z) / 2
        };

        var midBC = {
            x: (b.x + c.x) / 2,
            y: (b.y + c.y) / 2,
            z: (b.z + c.z) / 2
        };

        var midCA = {
            x: (c.x + a.x) / 2,
            y: (c.y + a.y) / 2,
            z: (c.z + a.z) / 2
        };

        newTetrahedron.push(a, midAB, midBC, midCA);
    }

    return subdivide(newTetrahedron, depth - 1);
}

// 细分正四面体并绘制球体
var sphereVertices = subdivide(tetrahedronVertices, subdivisions);

ctx.beginPath();
ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
ctx.fillStyle = "lightblue";
ctx.fill();
ctx.closePath();