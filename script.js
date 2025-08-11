
const escena = new THREE.Scene();
const renderizador = new THREE.WebGLRenderer();
renderizador.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderizador.domElement);


const ancho = window.innerWidth;
const alto = window.innerHeight;
const camara = new THREE.OrthographicCamera(ancho / -2, ancho / 2, alto / 2, alto / -2, 0.1, 1000);
camara.position.z = 10;


const geometría = new THREE.PlaneGeometry(100, 100); 
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
const rectángulo = new THREE.Mesh(geometría, material);
escena.add(rectángulo);

function animacion() {
    requestAnimationFrame(animacion);
    rectángulo.rotation.z += 0.01;  
    renderizador.render(escena, camara);
}

animacion();

window.addEventListener('resize', () => {
    const ancho = window.innerWidth;
    const alto = window.innerHeight;
    camara.left = ancho / -2;
    camara.right = ancho / 2;
    camara.top = alto / 2;
    camara.bottom = alto / -2;
    camara.updateProjectionMatrix();
    renderizador.setSize(ancho, alto);
});