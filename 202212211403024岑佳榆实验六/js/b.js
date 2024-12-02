var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// 设置背景颜色为天空蓝
renderer.setClearColor(0x87CEEB, 1);

var geometry = new THREE.SphereGeometry(1, 32, 32);
var material = new THREE.MeshPhongMaterial({
    color: 0xFFC0CB, // 粉色
    specular: 0x111111,
    shininess: 50,
});
var sphere = new THREE.Mesh(geometry, material);
scene.add(sphere);

camera.position.z = 5;

// 创建光源
var ambientLight = new THREE.AmbientLight(0xffffff, 0.8); // 增加环境光强度
var pointLight = new THREE.PointLight(0xffffff, 2, 50); // 增加点光源强度和范围
pointLight.position.set(0, 2, 5); // 调整点光源位置
var spotLight = new THREE.SpotLight(0xffffff, 2); // 增加聚光灯强度
spotLight.position.set(5, 5, 5); // 调整聚光灯位置
spotLight.angle = Math.PI / 6;
spotLight.penumbra = 0.1; // 调整光斑边缘的柔和度

// 初始化时只显示环境光
pointLight.visible = false;
spotLight.visible = false;

// 将光源添加到场景中
scene.add(ambientLight);
scene.add(pointLight);
scene.add(spotLight);

var currentLight = ambientLight;

function animate() {
    requestAnimationFrame(animate);
    sphere.rotation.x += 0.01;
    sphere.rotation.y += 0.01;
    renderer.render(scene, camera);
}

animate();

// 绑定按钮事件
document.getElementById('ambientLightBtn').addEventListener('click', function() {
    ambientLight.visible = true;
    pointLight.visible = false;
    spotLight.visible = false;
    currentLight = ambientLight;
});

document.getElementById('pointLightBtn').addEventListener('click', function() {
    ambientLight.visible = false;
    pointLight.visible = true;
    spotLight.visible = false;
    currentLight = pointLight;
});

document.getElementById('spotLightBtn').addEventListener('click', function() {
    ambientLight.visible = false;
    pointLight.visible = false;
    spotLight.visible = true;
    currentLight = spotLight;
});