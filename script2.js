// set timeout to allow other libraries to load
// TODO fix this NOW 
//setTimeout(function(){ 
var camera, scene, renderer;
var mesh;
init();
animate();


function init() {
    camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 1, 1000 );
    camera.position.z =200;
    scene = new THREE.Scene();
    
//    var mario_path = chrome.extension.getURL("models/test_mario/");
    var mario_model = chrome.extension.getURL("models/test_mario/mario_v01.json");
//    
 
    
    var loader = new THREE.JSONLoader();
    loader.load( mario_model, function( geometry_mario ) {
        mesh_mario = new THREE.Mesh( 
            geometry_mario,
            new THREE.MeshBasicMaterial( { color: new THREE.Color( 0xff0000 ) } )
        );
        mesh_mario.visible = true;
        mesh_mario.scale.set(100,100,100);
        scene.add( mesh_mario );
        console.log(mesh_mario.position);
    } );   
//    var parsed_mario = loader.parse(mario_model);
//    var model = new THREE.Mesh( parsed_mario.geometry, new THREE.MeshBasicMaterial() );
//    scene.add( model );    

    
    var geometry = new THREE.BoxBufferGeometry( 200, 200, 200 );
    var material = new THREE.MeshBasicMaterial( { color: new THREE.Color( 0xff0000 ) } );
    mesh = new THREE.Mesh( geometry, material );
    //scene.add( mesh );
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
    
    particleLight = new THREE.Mesh( 
        new THREE.SphereGeometry( 4, 8, 8 ), 
        new THREE.MeshBasicMaterial( { color: 0xffffff } ) 
    );
    scene.add( particleLight );
    
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
} 

// After loading JSON from our file, we add it to the scene
function addModelToScene( geometry, materials ) {
    var material = new THREE.MultiMaterial(materials);
    model = new THREE.Mesh( geometry, material );
    model.scale.set(0.5,0.5,0.5);
    scene.add( model );
}
//}, 3000);