// Escena y renderizador
const escena = new THREE.Scene();
const renderizador = new THREE.WebGLRenderer();
renderizador.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderizador.domElement);

// Cámara ortográfica para 2D
const ancho = window.innerWidth;
const alto = window.innerHeight;
const camara = new THREE.OrthographicCamera(ancho / -2, ancho / 2, alto / 2, alto / -2, 0.1, 1000);
camara.position.z = 10;

// Crear un rectángulo (plano en 2D)
const geometría = new THREE.PlaneGeometry(100, 100);  // Tamaño del rectángulo
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
const rectángulo = new THREE.Mesh(geometría, material);
escena.add(rectángulo);

// Animación (opcional)
function animacion() {
    requestAnimationFrame(animacion);
    rectángulo.rotation.z += 0.01;  // Rotación en 2D
    renderizador.render(escena, camara);
}
animacion();

// Ajuste al redimensionar ventana
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