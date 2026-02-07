document.addEventListener("DOMContentLoaded", () => {

    const btnDeposer = document.getElementById('btn-deposer');
    const overlay = document.getElementById('overlay-form');
    const closeBtn = document.querySelector('.closing-btn');
    const retourBtn = document.querySelector('.retour-btn');
    const form1 = document.getElementById('form1');
    const form2 = document.getElementById('form2');
    const carte = document.getElementById('three-canvas');

    btnDeposer.addEventListener('click', () => {
        overlay.classList.remove('hidden');
        carte.classList.add('blur');
    });

    closeBtn.addEventListener('click', () => {
        overlay.classList.add('hidden');
        overlay.classList.add('hidden');
        carte.classList.remove('blur');

    });

    retourBtn.addEventListener('click', () => {
        form1.classList.remove('hidden');
        form2.classList.add('hidden');
    })

    form1.addEventListener('submit', (e) => {
        e.preventDefault();
        form1.classList.add('hidden');
        form2.classList.remove('hidden');
    });

    form2.addEventListener('submit', (e) => {
        e.preventDefault();
        alert("Votre demande a bien été envoyée !");
        form2.reset();
    })
});


const MAP_IMAGE = './img/map.png';

// Projets et couleurs
const projectTypes = {
    ecologique: { name: 'Écologique', color: 0x2ecc71, description: 'Projets environnementaux et développement durable' },
    immobilier: { name: 'Immobilier', color: 0xe74c3c, description: 'Projets de développement immobilier' },
    associatif: { name: 'Associatif', color: 0xf39c12, description: 'Projets associatifs et solidaires' },
    communautaire: { name: 'Communautaire', color: 0xFFC0CB, description: 'Projets communautaires et culturels' },
    citoyen: { name: 'Citoyen', color: 0x27C8F5, description: 'Projets communautaires et culturels' }
};

const projectsByRegion = {
    '04': [
        { type: 'ecologique', title: 'Parc Naturel Verdon', content: 'Protection de la biodiversité autour du Verdon avec sentiers écologiques.' },
        { type: 'communautaire', title: 'Atelier autour du numérique', content: 'Association TERRA NUMERICA' },
        { type: 'associatif', title: 'Voyage Scolaire Accompagné', content: 'Association Staf 06' },
        { type: 'communautaire', title: 'TRAIL des Gorets à Gilette', content: 'Partenariat L\'ÉSTERON' },
        { type: 'communautaire', title: 'Tournoi de Pétanque', content: 'Financement et Hommage – Claude TOPPI' },
        { type: 'communautaire', title: 'Réalisation de journaux', content: 'Association Les P’Tits Gilettois' }
    ],
    '06': [
        { type: 'ecologique', title: 'Foire agricole', content: 'Foire Agricole de la Ruralité Puget-Théniers' },
        { type: 'citoyen', title: 'Participation au café de la création Saint-Martin du Var', content: 'Participation au café de la création Saint-Martin du Var' },
        { type: 'associatif', title: 'Rencontre des Sociétaires', content: 'La Rencontre des Sociétaires Avril 2025' },
        { type: 'associatif', title: 'IDAY', content: 'Journée de l’IDAY à l’agence' },
        { type: 'associatif', title: 'Café Mutualiste', content: 'Café Mutualiste à l’agence de Puget-Théniers' }
    ],
    '83': [
        { type: 'associatif', title: 'Chantier d\'insertion Guédelon', content: 'ARGIMSA fait un chantier d\'insertion.' },
        { type: 'communautaire', title: 'Festival Blues Sillans', content: 'Festival Blues à Sillans la Cascade organisé par Association Blues.' },
        { type: 'communautaire', title: 'Présentation École Militaire', content: 'Avec nos Héros 2025 - École militaire de Draguignan' },
        { type: 'communautaire', title: 'Olympiades du Haut Var', content: 'Olympiades du Haut Var organisées par ACCE du VAR - École des Salles.' },
        { type: 'associatif', title: 'Matinale Entreprenariat', content: 'La Matinale de l’Entreprenariat 116 porteurs de projets' },
        { type: 'communautaire', title: 'Vernissage et Exposition', content: 'Vernissage et Exposition Omar LOGANG' },
        { type: 'associatif', title: '4ième Séminaire de la CL de Nice', content: '14 Administrateurs et 14 Managers' },
        { type: 'immobilier', title: 'Conférence immobilier', content: 'Conférence dédiée à l’immobilier et à la transmission' },
        { type: 'communautaire', title: 'La Foulée des Gazelles', content: 'Prévention du Cancer du sein' },
        { type: 'communautaire', title: 'Azur Music Festival', content: ' Réaliser les rêves des enfants malades' },
        { type: 'communautaire', title: 'Les Régates de la Rade', content: 'Toulon' },
        { type: 'communautaire', title: 'Loto des Restos du Coeur', content: 'Toulon' },
        { type: 'communautaire', title: 'Sporting club Toulon', content: 'Partenariat' },
        { type: 'communautaire', title: 'Course Pédestre', content: 'La Gassinoise – 257 coureurs « classées »' },
        { type: 'associatif', title: 'Cavalair’ Repair Café', content: 'Partenariat Saint-Tropez' },
        { type: 'ecologie', title: 'Football Clud Ramatuellois', content: 'Partenariat Saint-Tropez' },
        { type: 'ecologie', title: 'La Boule Tropézienne', content: 'Partenariat Saint-Tropez' },
        { type: 'citoyen', title: 'Sensibilisation', content: 'Ateliers Budget Collège de Gassin' },
        { type: 'citoyen', title: 'Histoire de Tende', content: 'Nice' },
        { type: 'communautaire', title: '«2ème Édition Bormes en roue libre »', content: 'les Klus Des Caisses à Savons' },
        { type: 'associatif', title: 'Achat de matériel', content: 'pour le FC Le Lavandou Bormes»' },
        { type: 'communautaire', title: '1er prix du loto Guinguette', content: 'Association des Commerçants' },
        { type: 'associatif', title: 'Achat des maillots de compétition', content: 'Tennis de table Lavandou-Bormes' },
        { type: 'communautaire', title: '1ère Édition du Lavandou Classic', content: 'Lavandou-Bormes Athlétisme' },
        { type: 'communautaire', title: 'La Fête de la Courge à Rians', content: 'La CL a soutenu ce projet' },
        { type: 'communautaire', title: 'Les Producteurs des Palières', content: 'La CL les a accompagnés' },
        { type: 'communautaire', title: 'Le ballon avec ASL Les Vallons', content: 'La CL les ont motivés' },
        { type: 'communautaire', title: 'Au son des fifres et des tambours', content: 'Votre CL a harmonisé avec' },
        { type: 'communautaire', title: 'Le Club de Rugby de Barjols et Rians', content: 'La CL s’est engagé à eux' }
    ],
};

let scene, camera, renderer;
let cells = [];
let raycaster, mouse;
let mapCanvas, mapCtx;
let mapImage;
let mapLoaded = false;
let mapBounds = { minX: 0, maxX: 0, minY: 0, maxY: 0, width: 0, height: 0 };

const regions = [
    { id: '04', name: '04 - Alpes-de-Haute-Provence', polygon: [{ x: 0.55, y: 0.15 }, { x: 0.85, y: 0.15 }, { x: 0.85, y: 0.35 }, { x: 0.55, y: 0.35 }] },
    { id: '06', name: '06 - Alpes-Maritimes', polygon: [{ x: 0.65, y: 0.35 }, { x: 0.95, y: 0.35 }, { x: 0.95, y: 0.70 }, { x: 0.65, y: 0.70 }] },
    { id: '83', name: '83 - Var', polygon: [{ x: 0.15, y: 0.65 }, { x: 0.75, y: 0.65 }, { x: 0.75, y: 0.95 }, { x: 0.15, y: 0.95 }] },
    { id: '13-ouest', name: '13 - Bouches-du-Rhône (ouest)', polygon: [{ x: 0.05, y: 0.30 }, { x: 0.35, y: 0.30 }, { x: 0.35, y: 0.70 }, { x: 0.05, y: 0.70 }] },
    { id: '13-centre', name: '13 - Bouches-du-Rhône (centre)', polygon: [{ x: 0.30, y: 0.40 }, { x: 0.60, y: 0.40 }, { x: 0.60, y: 0.65 }, { x: 0.30, y: 0.65 }] }
];

function init() {
    mapCanvas = document.getElementById('map-canvas');
    mapCtx = mapCanvas.getContext('2d');

    mapImage = new Image();
    mapImage.onload = function () {
        resizeCanvas();
        drawMap();
        mapLoaded = true;
        initThree();
        document.getElementById('loading').style.display = 'none';
    };
    mapImage.onerror = function () {
        createDefaultMap();
        mapLoaded = true;
        initThree();
        document.getElementById('loading').style.display = 'none';
    };
    mapImage.src = MAP_IMAGE;
    window.addEventListener('resize', onWindowResize);
}

function createDefaultMap() {
    resizeCanvas();
    mapCtx.fillStyle = '#2a4a3a';
    mapCtx.fillRect(0, 0, mapCanvas.width, mapCanvas.height);
}

function resizeCanvas() {
    mapCanvas.width = window.innerWidth;
    mapCanvas.height = window.innerHeight;
}

function drawMap() {
    const canvasAspect = mapCanvas.width / mapCanvas.height;
    const imageAspect = mapImage.width / mapImage.height;
    let drawWidth, drawHeight, offsetX, offsetY;

    if (canvasAspect > imageAspect) {
        drawHeight = mapCanvas.height;
        drawWidth = drawHeight * imageAspect;
        offsetX = (mapCanvas.width - drawWidth) / 2;
        offsetY = 0;
    } else {
        drawWidth = mapCanvas.width;
        drawHeight = drawWidth / imageAspect;
        offsetX = 0;
        offsetY = (mapCanvas.height - drawHeight) / 2;
    }

    mapCtx.fillStyle = '#f5f5f0';
    mapCtx.fillRect(0, 0, mapCanvas.width, mapCanvas.height);
    mapCtx.drawImage(mapImage, offsetX, offsetY, drawWidth, drawHeight);
}

function initThree() {
    scene = new THREE.Scene();
    const container = document.getElementById('container');
    const width = container.clientWidth;
    const height = container.clientHeight;

    camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 40, 15);
    camera.lookAt(0, 0, 0);

    const canvas = document.getElementById('three-canvas');
    renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setClearColor(0x000000, 0);
   
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.3);
    directionalLight.position.set(10, 20, 10);
    directionalLight.castShadow = true;
    directionalLight.shadow.mapSize.width = 2048;
    directionalLight.shadow.mapSize.height = 2048;
    directionalLight.shadow.camera.near = 1;
    directionalLight.shadow.camera.far = 50;
    directionalLight.shadow.camera.left = -20;
    directionalLight.shadow.camera.right = 20;
    directionalLight.shadow.camera.top = 20;
    directionalLight.shadow.camera.bottom = -20;
    scene.add(directionalLight);

    const groundGeometry = new THREE.PlaneGeometry(50, 50);
    const groundMaterial = new THREE.ShadowMaterial({ opacity: 0.3 });
    const ground = new THREE.Mesh(groundGeometry, groundMaterial);
    ground.rotation.x = -Math.PI / 2;
    ground.position.y = 0;
    ground.receiveShadow = true;
    scene.add(ground);

    raycaster = new THREE.Raycaster();
    mouse = new THREE.Vector2();

    createCells();
    animate();

    canvas.style.pointerEvents = 'auto';
    canvas.addEventListener('click', onCellClick);
}

function pointInPolygon(point, polygon) {
    let inside = false;
    for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
        const xi = polygon[i].x, yi = polygon[i].y;
        const xj = polygon[j].x, yj = polygon[j].y;
        const intersect = ((yi > point.y) !== (yj > point.y)) && (point.x < (xj - xi) * (point.y - yi) / (yj - yi) + xi);
        if (intersect) inside = !inside;
    }
    return inside;
}

function normalizedToWorld(normX, normY) {
    const worldWidth = 20;
    const worldHeight = 20;
    return { x: (normX - 0.5) * worldWidth, z: (normY - 0.5) * worldHeight };
}

function createCells() {
    let globalCellId = 1;
    const minDistance = 1.8;
    const MAX_CELLS = 15;

    regions.forEach(region => {
        if (cells.length >= MAX_CELLS) return;
        const regionProjects = projectsByRegion[region.id];
        if (!regionProjects || regionProjects.length === 0) return;

        regionProjects.forEach(projectData => {
            if (cells.length >= MAX_CELLS) return;
            let placed = false;
            let attempts = 0;
            const maxAttempts = 200;

            while (!placed && attempts < maxAttempts) {
                attempts++;
                const normX = Math.random();
                const normY = Math.random();
                if (!pointInPolygon({ x: normX, y: normY }, region.polygon)) continue;

                const worldPos = normalizedToWorld(normX, normY);
                let tooClose = false;
                for (let cell of cells) {
                    const dx = cell.position.x - worldPos.x;
                    const dz = cell.position.z - worldPos.z;
                    if (Math.sqrt(dx * dx + dz * dz) < minDistance) { tooClose = true; break; }
                }
                if (tooClose) continue;

                const projectType = projectTypes[projectData.type];
                if (!projectType) return;

                const geometry = new THREE.BoxGeometry(1.2, 2.5, 1.2);
                const material = new THREE.MeshPhongMaterial({
                    color: projectType.color,
                    emissive: projectType.color,
                    emissiveIntensity: 0.3, 
                    shininess: 30
                });

                const cell = new THREE.Mesh(geometry, material);
                cell.position.set(worldPos.x, 1.25, worldPos.z);
               
                // Activation ombres sur la cellule
                cell.castShadow = true;
                cell.receiveShadow = true;

                cell.userData = {
                    id: globalCellId,
                    title: projectData.title,
                    content: projectData.content,
                    projectType: projectData.type,
                    projectTypeName: projectType.name,
                    region: region.name,
                    regionId: region.id,
                    originalColor: projectType.color,
                    originalEmissive: projectType.color
                };

                scene.add(cell);
                cells.push(cell);
                globalCellId++;
                placed = true;
            }
        });
    });
}

function onCellClick(event) {
    const rect = renderer.domElement.getBoundingClientRect();
    mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects(cells);

    if (intersects.length > 0) {
        const clickedCell = intersects[0].object;
        showPopup(clickedCell, event.clientX, event.clientY);
        animateCellClick(clickedCell);
    } else {
        closePopup();
    }
}

function animateCellClick(cell) {
    const originalEmissive = cell.userData.originalEmissive;
    cell.material.emissive.setHex(0xffffff);
    cell.material.emissiveIntensity = 1.0;

    setTimeout(() => {
        cell.material.emissive.setHex(originalEmissive);
        cell.material.emissiveIntensity = 0.1; 
    }, 200);
}

function getProjectTypeColor(typeName) {
    const colors = { 'Écologique': '#2ecc71', 'Immobilier': '#e74c3c', 'Associatif': '#f39c12', 'Communautaire': '#FFC0CB', 'Citoyen': '#27C8F5' };
    return colors[typeName] || '#00ff88';
}

function showPopup(cell, mouseX, mouseY) {
    const popup = document.getElementById('popup');
    const title = document.getElementById('popup-title');
    const content = document.getElementById('popup-content');
    const typeColor = getProjectTypeColor(cell.userData.projectTypeName);

    title.textContent = cell.userData.title;
    content.innerHTML = `
        <div class="project-type" style="background-color: ${typeColor}; color: white;">${cell.userData.projectTypeName}</div>
        <span class="region-badge">${cell.userData.regionId}</span>
        <br><br>
        <strong>Région:</strong> ${cell.userData.region}<br><br>
        ${cell.userData.content}
    `;

    let left = mouseX + 20;
    let top = mouseY - 50;
    if (left + 400 > window.innerWidth) left = mouseX - 420;
    if (top < 0) top = 20;

    popup.style.left = left + 'px';
    popup.style.top = top + 'px';
    popup.style.display = 'block';
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
}

function animate() {
    requestAnimationFrame(animate);
    cells.forEach((cell) => { cell.rotation.y += 0.003; });
    renderer.render(scene, camera);
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    if (mapLoaded) {
        resizeCanvas();
        drawMap();
    }
}

init();