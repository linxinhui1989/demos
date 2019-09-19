var container;
var camera, scene, renderer;
var uniforms;
var startTime;
init();
animate();
function init() {
    container = document.getElementById('container');
    startTime = Date.now();
    camera = new THREE.Camera();
    camera.position.z = 1;
    scene = new THREE.Scene();
    var geometry = new THREE.PlaneBufferGeometry(2, 2);
    uniforms = {
        iGlobalTime: {
            type: "f",
            value: 1.0
        },
        iResolution: {
            type: "v1",
            value: new THREE.Vector2(),
        }
    };
    var material = new THREE.ShaderMaterial({
        uniforms: uniforms,
        vertexShader: document.getElementById('vertexShader').textContent,
        fragmentShader: document.getElementById('fragmentShader').textContent
    });
    var mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);
    renderer = new THREE.WebGLRenderer();
    container.appendChild(renderer.domElement);
    onWindowResize();
    window.addEventListener('resize', onWindowResize, false)
}
function onWindowResize(event) {
    uniforms.iResolution.value.x = window.innerWidth;
    uniforms.iResolution.value.y = window.innerHeight;
    renderer.setSize(window.innerWidth, window.innerHeight)
}
function animate() {
    requestAnimationFrame(animate);
    render()
}
function render() {
    var currentTime = Date.now();
    uniforms.iGlobalTime.value = (currentTime - startTime) * 0.0002;
    renderer.render(scene, camera)
}

window.onload = function() {
    //底层共用
    var iBase = {
        Id: function(name) {
            return document.getElementById(name);
        },
        //设置元素透明度,透明度值按IE规则计,即0~100
        SetOpacity: function(ev, v) {
            ev.filters ? ev.style.filter = 'alpha(opacity=' + v + ')': ev.style.opacity = v / 100;
        }
    }
    //淡入效果(含淡入到指定透明度)
    function fadeIn(elem, speed, opacity) {
        /*
         * 参数说明
         * elem==>需要淡入的元素
         * speed==>淡入速度,正整数(可选)
         * opacity==>淡入到指定的透明度,0~100(可选)
         */
        speed = speed || 20;
        opacity = opacity || 100;
        //显示元素,并将元素值为0透明度(不可见)
        elem.style.display = 'block';
        iBase.SetOpacity(elem, 0);
        //初始化透明度变化值为0
        var val = 0;
        //循环将透明值以5递增,即淡入效果
        (function() {
            iBase.SetOpacity(elem, val);
            val += 10;
            if (val <= opacity + 500) {
                setTimeout(arguments.callee, speed);
            }
        })();
    }

    fadeIn(container, 50);
}