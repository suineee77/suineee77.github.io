// main.js
document.addEventListener("DOMContentLoaded", function() {
    var canvas = document.getElementById("gl-canvas");
    var gl = canvas.getContext("webgl");
    if (!gl) {
        alert("Unable to initialize WebGL. Your browser may not support it.");
        return;
    }

    // 初始化着色器
    var program = initShaders(gl, document.getElementById("vertex-shader").text, document.getElementById("fragment-shader").text);
    gl.useProgram(program);

    // 创建棋盘格纹理
    var texture = createCheckerboardTexture(gl, 256, 256, 4, [255, 0, 0, 255], [0, 0, 0, 255]);

    // 设置纹理坐标
    var texCoordBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, texCoordBuffer);
    var texCoords = [
        // 球体纹理坐标
        0.5, 0.5, 0.25, 0.75, 0.75, 0.25, 0.75, 0.75, 0.25, 0.25,
        // 圆柱体纹理坐标
        0.0, 0.0, 0.5, 0.0, 0.5, 1.0, 0.5, 1.0, 0.0, 1.0
    ];
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(texCoords), gl.STATIC_DRAW);

    var texCoordLocation = gl.getAttribLocation(program, "aTextureCoord");
    gl.enableVertexAttribArray(texCoordLocation);
    gl.vertexAttribPointer(texCoordLocation, 2, gl.FLOAT, false, 0, 0);

    // 将纹理传入着色器
    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.uniform1i(gl.getUniformLocation(program, "uSampler"), 0);

    // 绘制球体
    var positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    var positions = [
        // 球体顶点位置数据
        0.0, 1.0, 0.0, -1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, -1.0, 0.0
    ];
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);

    var positionLocation = gl.getAttribLocation(program, "aVertexPosition");
    gl.enableVertexAttribArray(positionLocation);
    gl.vertexAttribPointer(positionLocation, 3, gl.FLOAT, false, 0, 0);

    // 绘制球体
    var indexBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);
    var indices = [
        // 球体索引数据
        0, 1, 2, 0, 2, 3
    ];
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(indices), gl.STATIC_DRAW);

    gl.drawElements(gl.TRIANGLES, 6, gl.UNSIGNED_SHORT, 0);
});

function createCheckerboardTexture(gl, width, height, resize, color1, color2) {
    var canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    var ctx = canvas.getContext('2d');
    var imageData = ctx.getImageData(0, 0, width, height);
    for (var i = 0; i < width; i++) {
        for (var j = 0; j < height; j++) {
            var idx = (i + j * width) * 4;
            var color = (i + j) % 2 === 0 ? color1 : color2;
            imageData.data[idx] = color[0];
            imageData.data[idx + 1] = color[1];
            imageData.data[idx + 2] = color[2];
            imageData.data[idx + 3] = color[3];
        }
    }
    ctx.putImageData(imageData, 0, 0);
    var texture = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, canvas);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.REPEAT);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.REPEAT);
    return texture;
}