<!DOCTYPE html>
<html lang="en-US">
<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>欢迎来到我的博客</title>
</head>
<body>
<div class="container-lg px-3 my-5 markdown-body">
<h1><a href="https://suineee77.github.io/"></a></h1>


<h1 id="欢迎来到我的博客" style="text-align: center;">欢迎来到我的网页</h1>
<h2 id="计算机图形学作业" style="text-align: center;">计算机图形学作业</h2>
<!-- HTML 部分 -->
<h3 id="menuTitle1">实验一</h3>

<div id="popupMenu1" class="menu">
<ul>
<li><a href="https://suineee77.github.io/202212211403024岑佳榆实验一/html代码/三角形.html">任务1</a></li>
<li><a href="https://suineee77.github.io/202212211403024岑佳榆实验一/html代码/不同色三角形和四边形.html">任务2</a></li>
<li><a href="https://suineee77.github.io/202212211403024岑佳榆实验一/html代码/同颜色三角形和四边形.html">任务3</a></li>
<li><a href="https://suineee77.github.io/202212211403024岑佳榆实验一/html代码/四边形.html">任务4</a></li>
</ul>
</div>
<p></p>
<h3 id="menuTitle2">实验二</h3>
<div id="popupMenu2" class="menu">
<ul>
<li><a href="https://suineee77.github.io/202212211403024岑佳榆实验二/html/任务a.html">任务a</a></li>
<li><a href="https://suineee77.github.io/202212211403024岑佳榆实验二/html/任务b.html">任务b</a></li>
<li><a href="https://suineee77.github.io/202212211403024岑佳榆实验二/html/任务c.html">任务c</a></li>
</ul>
</div>
<p></p>
<h3 id="menuTitle3">实验三</h3>
<div id="popupMenu3" class="menu">
<ul>
<li><a href="https://suineee77.github.io/202212211403024岑佳榆实验三/html/任务a.html">任务a</a></li>
<li><a href="https://suineee77.github.io/202212211403024岑佳榆实验三/html/任务b.html">任务b</a></li>
</ul>
</div>
<p></p>
<h3 id="menuTitle4">实验四</h3>
<div id="popupMenu4" class="menu">
<ul>
<li><a href="https://suineee77.github.io/202212211403024岑佳榆实验四/html/任务a.html">任务a</a></li>
<li><a href="https://suineee77.github.io/202212211403024岑佳榆实验四/html/任务b.html">任务b</a></li>
<li><a href="https://suineee77.github.io/202212211403024岑佳榆实验四/html/任务c.html">任务c</a></li>
<li><a href="https://suineee77.github.io/202212211403024岑佳榆实验四/html/任务d.html">任务d</a></li>
<li><a href="https://suineee77.github.io/202212211403024岑佳榆实验四/html/任务e.html">任务d</a></li>
</ul>
</div>
<p></p>
<h3 id="menuTitle5">实验五</h3>
<div id="popupMenu5" class="menu">
<ul>
<li><a href="https://suineee77.github.io/202212211403024岑佳榆实验五/html/实验五.html">任务a</a></li>
</ul>
</div>
<p></p>
<h3 id="menuTitle6">实验六</h3>
<div id="popupMenu6" class="menu">
<ul>
<li><a href="https://suineee77.github.io/202212211403024岑佳榆实验六/html/任务a.html">任务a</a></li>
<li><a href="https://suineee77.github.io/202212211403024岑佳榆实验六/html/任务b.html">任务b</a></li>
<li><a href="https://suineee77.github.io/202212211403024岑佳榆实验六/html/任务c.html">任务c</a></li>
</ul>
</div>
<p></p>
<h3 id="menuTitle7">实验五</h3>
<div id="popupMenu7" class="menu">
<ul>
<li><a href="https://suineee77.github.io/202212211403024岑佳榆实验七/html/任务a.html">任务a</a></li>
</ul>
</div>
<p></p>

<!-- CSS 部分 -->
<style>
body {
font-family: Arial, sans-serif;
background-color: aliceblue;
}
a {
    text-decoration: none;
    color: inherit;
}
h1{
	color: lightblue;
}
h2{
	color: lightblue;
}
h3 {
cursor: pointer;
background-color: lightgoldenrodyellow;
padding: 10px;
border: 1px aliceblue;
border-radius: 3px;
width: 250px;
text-align: center;
color: lightblue;
margin: 0 auto;
}

h3:hover {
background-color: lightyellow;
}

/* 菜单初始隐藏状态 */
.menu {
max-height: 0;
overflow: hidden;
transition: max-height 0.5s ease-out;
background-color: lightyellow;
border: 1px solid #ddd;
border-radius: 5px;
width: 240px;
margin-top: 5px;
margin: 0 auto;
}

.menu ul {
list-style-type: none;
padding: 0;
margin: 0;
}

.menu ul li {
padding: 10px;
}

.menu ul li a {
text-decoration: none;
color:lightskyblue;
}

.menu ul li a:hover {
color: cadetblue;
}

.menu.show {
max-height: 300px; 
}
</style>

<!-- JavaScript 部分 -->
<script>
document.getElementById('menuTitle1').addEventListener('click', function() {
var menu = document.getElementById('popupMenu1');
menu.classList.toggle('show');
});
document.getElementById('menuTitle2').addEventListener('click', function() {
var menu = document.getElementById('popupMenu2');
menu.classList.toggle('show');
});
document.getElementById('menuTitle3').addEventListener('click', function() {
var menu = document.getElementById('popupMenu3');
menu.classList.toggle('show');
});
document.getElementById('menuTitle4').addEventListener('click', function() {
var menu = document.getElementById('popupMenu4');
menu.classList.toggle('show');
});
</script>




<div class="footer border-top border-gray-light mt-5 pt-3 text-right text-gray">
</div>

</div>
<script src="https://cdnjs.cloudflare.com/ajax/libs/anchor-js/4.1.0/anchor.min.js" integrity="sha256-lZaRhKri35AyJSypXXs4o6OPFTbTmUoltBbDCbdzegg=" crossorigin="anonymous"></script>
<script>anchors.add();</script>
</body>
</html>

