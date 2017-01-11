setTimeout(function(){ 
var camera, scene, renderer;
var mesh;
init();
animate();

function init() {
    camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 1, 1000 );
    camera.position.z = 400;
    scene = new THREE.Scene();
    var geometry = new THREE.BoxBufferGeometry( 200, 200, 200 );
    var material = new THREE.MeshBasicMaterial( { color: new THREE.Color( 0xff0000 ) } );
    mesh = new THREE.Mesh( geometry, material );
    scene.add( mesh );
   renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true
    });
    renderer.setClearColor(0xffffff, 1);
    renderer.setPixelRatio( window.devicePixelRatio );
    renderer.setSize( 550, 550 );
    document.getElementById("mainCanvas").appendChild( renderer.domElement );
    //
    window.addEventListener( 'resize', onWindowResize, false );
}
function onWindowResize() {
    camera.aspect = 1;
    camera.updateProjectionMatrix();
    renderer.setSize( 550, 550 );
}
function animate() {
    requestAnimationFrame( animate );
    mesh.rotation.x += 0.005;
    mesh.rotation.y += 0.01;
    renderer.render( scene, camera );
} }, 3000);