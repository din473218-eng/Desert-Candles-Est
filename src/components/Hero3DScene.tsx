import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

interface Hero3DProps {
  className?: string;
  onSceneReady?: () => void;
}

export const Hero3DScene: React.FC<Hero3DProps> = ({ className = '', onSceneReady }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLowPerformance, setIsLowPerformance] = useState<boolean>(false);
  const mouseRef = useRef<{ x: number; y: number; targetX: number; targetY: number }>({
    x: 0,
    y: 0,
    targetX: 0,
    targetY: 0,
  });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;
    const isMobile = window.innerWidth < 768;

    // Detect high DPR and cap to 1.5 for performance
    const pixelRatio = Math.min(window.devicePixelRatio || 1, 1.5);

    // 1. Scene & Camera
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x1a120b, 0.015);

    const camera = new THREE.PerspectiveCamera(48, width / height, 0.1, 200);
    camera.position.set(0, 1.8, 6.5);

    // 2. Renderer
    const renderer = new THREE.WebGLRenderer({
      antialias: !isMobile,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(pixelRatio);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    renderer.shadowMap.enabled = !isMobile;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    container.appendChild(renderer.domElement);

    // 3. Lighting (Golden Hour Desert Sunlight + Glowing Candle Light)
    const ambientLight = new THREE.AmbientLight(0x4a3525, 1.2);
    scene.add(ambientLight);

    // Golden sun directional light from the horizon
    const sunLight = new THREE.DirectionalLight(0xf59e0b, 2.8);
    sunLight.position.set(15, 8, -25);
    sunLight.castShadow = !isMobile;
    if (!isMobile) {
      sunLight.shadow.mapSize.width = 1024;
      sunLight.shadow.mapSize.height = 1024;
      sunLight.shadow.bias = -0.001;
    }
    scene.add(sunLight);

    // Soft sky fill
    const skyLight = new THREE.HemisphereLight(0xffd194, 0x1f140e, 0.9);
    scene.add(skyLight);

    // Central Desert Candle Light (PointLight with warm amber emission)
    const candleLight = new THREE.PointLight(0xf59e0b, 2.6, 12, 1.4);
    candleLight.position.set(1.6, 1.35, 1.2);
    candleLight.castShadow = !isMobile;
    scene.add(candleLight);

    // Secondary subtle light for organizational elements
    const blueHRLight = new THREE.PointLight(0xe8c170, 1.0, 10, 1.5);
    blueHRLight.position.set(-2.5, 2.2, 0.5);
    scene.add(blueHRLight);

    // 4. Background: Golden Hour Desert Sky & Rolling Dunes
    // Sky Dome Cylinder
    const skyGeo = new THREE.CylinderGeometry(80, 80, 60, 32, 1, true);
    const skyMat = new THREE.ShaderMaterial({
      side: THREE.BackSide,
      uniforms: {
        topColor: { value: new THREE.Color(0x2a1a12) },
        midColor: { value: new THREE.Color(0xb45309) },
        horizonColor: { value: new THREE.Color(0xf59e0b) },
        bottomColor: { value: new THREE.Color(0x54280e) },
      },
      vertexShader: `
        varying vec3 vWorldPosition;
        void main() {
          vec4 worldPosition = modelMatrix * vec4(position, 1.0);
          vWorldPosition = worldPosition.xyz;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform vec3 topColor;
        uniform vec3 midColor;
        uniform vec3 horizonColor;
        uniform vec3 bottomColor;
        varying vec3 vWorldPosition;
        void main() {
          float h = normalize(vWorldPosition).y;
          vec3 col;
          if (h > 0.0) {
            col = mix(horizonColor, midColor, smoothstep(0.0, 0.35, h));
            col = mix(col, topColor, smoothstep(0.35, 0.9, h));
          } else {
            col = mix(horizonColor, bottomColor, smoothstep(0.0, -0.5, h));
          }
          gl_FragColor = vec4(col, 1.0);
        }
      `,
    });
    const skyMesh = new THREE.Mesh(skyGeo, skyMat);
    scene.add(skyMesh);

    // Distant Dunes
    const duneGeo = new THREE.PlaneGeometry(120, 60, 48, 32);
    const dunePos = duneGeo.attributes.position;
    for (let i = 0; i < dunePos.count; i++) {
      const vx = dunePos.getX(i);
      const vy = dunePos.getY(i);
      const z = Math.sin(vx * 0.08) * 3.5 + Math.cos(vy * 0.12) * 2.5 + Math.sin(vx * 0.2 + vy * 0.15) * 1.2;
      dunePos.setZ(i, z);
    }
    duneGeo.computeVertexNormals();

    const duneMat = new THREE.MeshStandardMaterial({
      color: 0x8a4b1d,
      roughness: 0.92,
      metalness: 0.05,
      flatShading: false,
    });
    const duneMesh = new THREE.Mesh(duneGeo, duneMat);
    duneMesh.rotation.x = -Math.PI / 2;
    duneMesh.position.set(0, -3.5, -25);
    scene.add(duneMesh);

    // Second dune ridge closer
    const dune2Geo = new THREE.PlaneGeometry(80, 40, 36, 24);
    const dune2Pos = dune2Geo.attributes.position;
    for (let i = 0; i < dune2Pos.count; i++) {
      const vx = dune2Pos.getX(i);
      const vy = dune2Pos.getY(i);
      const z = Math.cos(vx * 0.1) * 2.2 + Math.sin(vy * 0.18) * 1.6;
      dune2Pos.setZ(i, z);
    }
    dune2Geo.computeVertexNormals();
    const dune2Mat = new THREE.MeshStandardMaterial({
      color: 0xa86026,
      roughness: 0.88,
      metalness: 0.08,
    });
    const dune2Mesh = new THREE.Mesh(dune2Geo, dune2Mat);
    dune2Mesh.rotation.x = -Math.PI / 2;
    dune2Mesh.position.set(6, -2.8, -14);
    scene.add(dune2Mesh);

    // 5. Modern Corporate Office Architecture
    // Polished executive floor (reflecting warm light)
    const floorGeo = new THREE.PlaneGeometry(30, 20);
    const floorMat = new THREE.MeshStandardMaterial({
      color: 0x16120e,
      roughness: 0.25,
      metalness: 0.35,
    });
    const floor = new THREE.Mesh(floorGeo, floorMat);
    floor.rotation.x = -Math.PI / 2;
    floor.position.set(0, -0.3, 2);
    floor.receiveShadow = !isMobile;
    scene.add(floor);

    // Floor-to-ceiling glass window mullions (columns framing the desert vista)
    const columnMat = new THREE.MeshStandardMaterial({
      color: 0x1f1914,
      metalness: 0.8,
      roughness: 0.2,
    });

    const windowPillarPositions = [-7.5, -3.8, 0, 3.8, 7.5];
    windowPillarPositions.forEach((xPos) => {
      const pillarGeo = new THREE.BoxGeometry(0.18, 6, 0.22);
      const pillar = new THREE.Mesh(pillarGeo, columnMat);
      pillar.position.set(xPos, 2.5, -4.5);
      pillar.castShadow = !isMobile;
      scene.add(pillar);
    });

    // Horizontal window framing beam
    const beamGeo = new THREE.BoxGeometry(22, 0.2, 0.25);
    const topBeam = new THREE.Mesh(beamGeo, columnMat);
    topBeam.position.set(0, 4.8, -4.5);
    scene.add(topBeam);

    const midBeam = new THREE.Mesh(beamGeo, columnMat);
    midBeam.position.set(0, 1.9, -4.5);
    scene.add(midBeam);

    const bottomBeam = new THREE.Mesh(beamGeo, columnMat);
    bottomBeam.position.set(0, -0.2, -4.5);
    scene.add(bottomBeam);

    // Subtle glass reflection plane on windows
    const glassPaneGeo = new THREE.PlaneGeometry(20, 5);
    const glassPaneMat = new THREE.MeshPhysicalMaterial({
      color: 0xfff4e0,
      transparent: true,
      opacity: 0.16,
      roughness: 0.05,
      metalness: 0.2,
      transmission: 0.85,
      ior: 1.45,
    });
    const glassPane = new THREE.Mesh(glassPaneGeo, glassPaneMat);
    glassPane.position.set(0, 2.3, -4.4);
    scene.add(glassPane);

    // 6. Modern Office Furniture Silhouettes: Executive Pedestal & Table
    const tableGeo = new THREE.BoxGeometry(5.5, 0.12, 2.4);
    const tableMat = new THREE.MeshStandardMaterial({
      color: 0x221a15,
      roughness: 0.35,
      metalness: 0.2,
    });
    const table = new THREE.Mesh(tableGeo, tableMat);
    table.position.set(1.5, 0.45, 1.2);
    table.receiveShadow = !isMobile;
    table.castShadow = !isMobile;
    scene.add(table);

    // Table legs
    const legGeo = new THREE.CylinderGeometry(0.06, 0.06, 0.75, 16);
    const legPositions = [
      [3.8, 0.05, 0.3],
      [3.8, 0.05, 2.1],
      [-0.8, 0.05, 0.3],
      [-0.8, 0.05, 2.1],
    ];
    legPositions.forEach(([lx, ly, lz]) => {
      const leg = new THREE.Mesh(legGeo, columnMat);
      leg.position.set(lx, ly, lz);
      scene.add(leg);
    });

    // 7. Desert Candles Symbolic Light / Candle Monument
    const candleGroup = new THREE.Group();
    candleGroup.position.set(1.6, 0.55, 1.2);

    // Base: Brushed Desert Gold Plinth
    const plinthGeo = new THREE.CylinderGeometry(0.35, 0.4, 0.1, 32);
    const goldMat = new THREE.MeshStandardMaterial({
      color: 0xd49b35,
      metalness: 0.85,
      roughness: 0.25,
    });
    const plinth = new THREE.Mesh(plinthGeo, goldMat);
    candleGroup.add(plinth);

    // Glass Hurricane Cylinder (Translucent frosted glass)
    const candleGlassGeo = new THREE.CylinderGeometry(0.3, 0.3, 0.75, 32, 1, true);
    const candleGlassMat = new THREE.MeshPhysicalMaterial({
      color: 0xfff6e5,
      transparent: true,
      opacity: 0.4,
      roughness: 0.1,
      metalness: 0.15,
      transmission: 0.75,
      ior: 1.5,
    });
    const candleGlass = new THREE.Mesh(candleGlassGeo, candleGlassMat);
    candleGlass.position.y = 0.42;
    candleGroup.add(candleGlass);

    // Sculpted Ivory Candle Body
    const waxGeo = new THREE.CylinderGeometry(0.2, 0.22, 0.5, 32);
    const waxMat = new THREE.MeshStandardMaterial({
      color: 0xfbf8f2,
      roughness: 0.6,
      metalness: 0.05,
    });
    const wax = new THREE.Mesh(waxGeo, waxMat);
    wax.position.y = 0.3;
    candleGroup.add(wax);

    // Candle Wick
    const wickGeo = new THREE.CylinderGeometry(0.015, 0.015, 0.08);
    const wickMat = new THREE.MeshBasicMaterial({ color: 0x111111 });
    const wick = new THREE.Mesh(wickGeo, wickMat);
    wick.position.y = 0.58;
    candleGroup.add(wick);

    // Elegant Glowing Candle Flame (Teardrop shape + luminous halo)
    const flameGeo = new THREE.ConeGeometry(0.065, 0.2, 24);
    const flameMat = new THREE.MeshBasicMaterial({
      color: 0xfffae0,
    });
    const flameMesh = new THREE.Mesh(flameGeo, flameMat);
    flameMesh.position.y = 0.68;
    candleGroup.add(flameMesh);

    // Flame outer halo sprite / billboard
    const canvasHalo = document.createElement('canvas');
    canvasHalo.width = 128;
    canvasHalo.height = 128;
    const ctxHalo = canvasHalo.getContext('2d');
    if (ctxHalo) {
      const grad = ctxHalo.createRadialGradient(64, 64, 4, 64, 64, 60);
      grad.addColorStop(0, 'rgba(255, 250, 220, 0.95)');
      grad.addColorStop(0.3, 'rgba(245, 158, 11, 0.6)');
      grad.addColorStop(0.7, 'rgba(217, 119, 6, 0.2)');
      grad.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctxHalo.fillStyle = grad;
      ctxHalo.fillRect(0, 0, 128, 128);
    }
    const haloTexture = new THREE.CanvasTexture(canvasHalo);
    const haloMat = new THREE.SpriteMaterial({
      map: haloTexture,
      transparent: true,
      blending: THREE.AdditiveBlending,
      opacity: 0.85,
    });
    const flameHalo = new THREE.Sprite(haloMat);
    flameHalo.scale.set(0.75, 0.75, 1);
    flameHalo.position.y = 0.72;
    candleGroup.add(flameHalo);

    scene.add(candleGroup);

    // 8. Subtle Floating Digital HR Interfaces & Nodes
    const hrPanelsGroup = new THREE.Group();
    scene.add(hrPanelsGroup);

    // Floating Glass HR Widget 1: Talent Synergy Node
    const panel1Geo = new THREE.PlaneGeometry(1.2, 0.8);
    const panel1Mat = new THREE.MeshPhysicalMaterial({
      color: 0x1e1710,
      transparent: true,
      opacity: 0.75,
      roughness: 0.15,
      metalness: 0.2,
      side: THREE.DoubleSide,
    });
    const panel1 = new THREE.Mesh(panel1Geo, panel1Mat);
    panel1.position.set(-2.8, 2.2, -0.8);
    panel1.rotation.y = 0.25;
    hrPanelsGroup.add(panel1);

    // Glowing border outline for panel 1
    const edges1 = new THREE.EdgesGeometry(panel1Geo);
    const line1Mat = new THREE.LineBasicMaterial({ color: 0xd97706, transparent: true, opacity: 0.8 });
    const panel1Border = new THREE.LineSegments(edges1, line1Mat);
    panel1.add(panel1Border);

    // Floating Glass HR Widget 2: Strategic Alignment Meter
    const panel2Geo = new THREE.PlaneGeometry(0.9, 0.6);
    const panel2 = new THREE.Mesh(panel2Geo, panel1Mat);
    panel2.position.set(-1.8, 3.2, -1.8);
    panel2.rotation.y = 0.18;
    hrPanelsGroup.add(panel2);

    const edges2 = new THREE.EdgesGeometry(panel2Geo);
    const panel2Border = new THREE.LineSegments(edges2, line1Mat);
    panel2.add(panel2Border);

    // Organizational nodes (spheres connected by glowing lines)
    const nodeGeo = new THREE.SphereGeometry(0.045, 16, 16);
    const nodeMat = new THREE.MeshBasicMaterial({ color: 0xfbbf24 });
    const nodePositions = [
      new THREE.Vector3(-2.6, 2.3, -0.7),
      new THREE.Vector3(-2.3, 2.5, -0.6),
      new THREE.Vector3(-2.1, 2.1, -0.8),
      new THREE.Vector3(-1.7, 3.3, -1.6),
      new THREE.Vector3(-1.5, 3.0, -1.5),
    ];
    nodePositions.forEach((pos) => {
      const nodeMesh = new THREE.Mesh(nodeGeo, nodeMat);
      nodeMesh.position.copy(pos);
      hrPanelsGroup.add(nodeMesh);
    });

    // Connecting line segments between nodes
    const nodeLineGeo = new THREE.BufferGeometry().setFromPoints([
      nodePositions[0],
      nodePositions[1],
      nodePositions[2],
      nodePositions[0],
      nodePositions[3],
      nodePositions[4],
    ]);
    const nodeLine = new THREE.Line(nodeLineGeo, new THREE.LineBasicMaterial({ color: 0xc88a2c, transparent: true, opacity: 0.6 }));
    hrPanelsGroup.add(nodeLine);

    // 9. Atmospheric Warm Desert Dust Particles
    const particleCount = isMobile ? 80 : 220;
    const particleGeo = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    const particleScales = new Float32Array(particleCount);

    for (let i = 0; i < particleCount; i++) {
      particlePositions[i * 3] = (Math.random() - 0.5) * 16;
      particlePositions[i * 3 + 1] = Math.random() * 5 + 0.1;
      particlePositions[i * 3 + 2] = (Math.random() - 0.5) * 12 + 1;
      particleScales[i] = Math.random() * 0.05 + 0.02;
    }
    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));

    const particleMat = new THREE.PointsMaterial({
      color: 0xf59e0b,
      size: 0.04,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // 10. Mouse Interaction Event Listeners
    const handleMouseMove = (e: MouseEvent) => {
      const normX = (e.clientX / window.innerWidth) * 2 - 1;
      const normY = -(e.clientY / window.innerHeight) * 2 + 1;
      mouseRef.current.targetX = normX;
      mouseRef.current.targetY = normY;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Handle Resize
    const handleResize = () => {
      if (!container) return;
      const newW = container.clientWidth || window.innerWidth;
      const newH = container.clientHeight || window.innerHeight;
      camera.aspect = newW / newH;
      camera.updateProjectionMatrix();
      renderer.setSize(newW, newH);
    };
    window.addEventListener('resize', handleResize);

    // Signal ready
    if (onSceneReady) {
      onSceneReady();
    }

    // 11. Animation Loop with Cinematic Parallax & Candle Flicker
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse interpolation (cinematic damping)
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.035;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.035;

      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      // Subtle camera parallax
      camera.position.x = mx * 0.55;
      camera.position.y = 1.8 + my * 0.35;
      camera.lookAt(mx * 0.15, 1.5 + my * 0.1, 0);

      // Organic gentle candle flicker
      const flicker = Math.sin(elapsedTime * 4.5) * 0.15 + Math.sin(elapsedTime * 8.2) * 0.08;
      candleLight.intensity = 2.4 + flicker;
      flameMesh.scale.y = 1.0 + flicker * 0.4;
      flameHalo.scale.set(0.75 + flicker * 0.2, 0.75 + flicker * 0.2, 1);

      // Subtle float for digital HR interfaces
      hrPanelsGroup.position.y = Math.sin(elapsedTime * 0.8) * 0.08;
      hrPanelsGroup.rotation.y = Math.sin(elapsedTime * 0.5) * 0.03 + mx * 0.05;

      // Gentle drift for dust particles
      const posArray = particleGeo.attributes.position.array as Float32Array;
      for (let i = 0; i < particleCount; i++) {
        const yIndex = i * 3 + 1;
        posArray[yIndex] += Math.sin(elapsedTime * 0.5 + i) * 0.002;
      }
      particleGeo.attributes.position.needsUpdate = true;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [onSceneReady]);

  return (
    <div className={`relative w-full h-full overflow-hidden ${className}`}>
      {/* ThreeJS Container */}
      <div ref={containerRef} className="absolute inset-0 w-full h-full pointer-events-none" />

      {/* Atmospheric Overlays: Vignette & Soft Gradient Transition */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0e0c0a] via-transparent to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-radial-[circle_at_70%_50%] from-transparent via-transparent to-[#0e0c0a]/60 pointer-events-none" />

      {/* Subtle indicator of 3D interactivity */}
      <div className="absolute bottom-6 right-8 hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-[#c88a2c]/30 text-[#f5ecd5] text-xs font-medium">
        <span className="w-2 h-2 rounded-full bg-[#f59e0b] animate-ping" />
        <span className="tracking-wide">Interactive 3D Atmosphere • Move cursor</span>
      </div>
    </div>
  );
};
