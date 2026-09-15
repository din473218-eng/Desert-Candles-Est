import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface AboutNetwork3DProps {
  className?: string;
}

export const AboutNetwork3D: React.FC<AboutNetwork3DProps> = ({ className = '' }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const width = container.clientWidth || 500;
    const height = container.clientHeight || 420;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 7.5);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    container.appendChild(renderer.domElement);

    // Group to hold all revolving elements
    const networkGroup = new THREE.Group();
    scene.add(networkGroup);

    // 1. Central Guiding Light Node (Desert Candles)
    const centerGeo = new THREE.SphereGeometry(0.38, 32, 32);
    const centerMat = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      emissive: 0xf59e0b,
      emissiveIntensity: 1.8,
      roughness: 0.2,
      metalness: 0.1,
    });
    const centerNode = new THREE.Mesh(centerGeo, centerMat);
    networkGroup.add(centerNode);

    // Radiant halo for central light
    const canvasHalo = document.createElement('canvas');
    canvasHalo.width = 128;
    canvasHalo.height = 128;
    const ctx = canvasHalo.getContext('2d');
    if (ctx) {
      const grad = ctx.createRadialGradient(64, 64, 5, 64, 64, 60);
      grad.addColorStop(0, 'rgba(255, 245, 200, 0.95)');
      grad.addColorStop(0.3, 'rgba(245, 158, 11, 0.6)');
      grad.addColorStop(0.7, 'rgba(217, 119, 6, 0.15)');
      grad.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, 128, 128);
    }
    const haloTex = new THREE.CanvasTexture(canvasHalo);
    const haloMat = new THREE.SpriteMaterial({
      map: haloTex,
      blending: THREE.AdditiveBlending,
      transparent: true,
      opacity: 0.9,
    });
    const centerHalo = new THREE.Sprite(haloMat);
    centerHalo.scale.set(1.8, 1.8, 1);
    networkGroup.add(centerHalo);

    // Central Point Light casting real illumination
    const centerPointLight = new THREE.PointLight(0xf59e0b, 3, 10, 1.2);
    networkGroup.add(centerPointLight);

    // 2. Connected Organizational Nodes (Human Capital & Technology Hubs)
    const nodeData = [
      { name: 'Talent Acquisition', radius: 1.8, angle: 0, height: 0.5, size: 0.18, color: 0xf59e0b },
      { name: 'Strategic Planning', radius: 2.2, angle: 1.2, height: -0.4, size: 0.16, color: 0xd49b35 },
      { name: 'E-Services Hub', radius: 2.5, angle: 2.3, height: 0.6, size: 0.2, color: 0xfbbf24 },
      { name: 'Performance Mgmt', radius: 2.0, angle: 3.5, height: -0.6, size: 0.16, color: 0xd97706 },
      { name: 'Employee Engagement', radius: 2.6, angle: 4.6, height: 0.3, size: 0.19, color: 0xf59e0b },
      { name: 'Compliance & Risk', radius: 2.3, angle: 5.5, height: -0.2, size: 0.17, color: 0xd49b35 },
      { name: 'Human Potential', radius: 1.5, angle: 2.9, height: 0.2, size: 0.14, color: 0xfef3c7 },
      { name: 'Operational Flow', radius: 1.9, angle: 4.1, height: 0.8, size: 0.15, color: 0xfbbf24 },
    ];

    interface NodeMeshItem {
      mesh: THREE.Mesh;
      baseAngle: number;
      radius: number;
      height: number;
      speed: number;
    }

    const nodeMeshes: NodeMeshItem[] = [];

    nodeData.forEach((item, index) => {
      const geo = new THREE.SphereGeometry(item.size, 20, 20);
      const mat = new THREE.MeshStandardMaterial({
        color: item.color,
        emissive: item.color,
        emissiveIntensity: 0.5,
        roughness: 0.3,
        metalness: 0.4,
      });
      const mesh = new THREE.Mesh(geo, mat);

      const x = Math.cos(item.angle) * item.radius;
      const z = Math.sin(item.angle) * item.radius;
      mesh.position.set(x, item.height, z);

      networkGroup.add(mesh);
      nodeMeshes.push({
        mesh,
        baseAngle: item.angle,
        radius: item.radius,
        height: item.height,
        speed: 0.15 + (index % 3) * 0.05,
      });
    });

    // 3. Dynamic Curved Connecting Lines (Central Light -> Nodes and Node -> Node)
    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0xc88a2c,
      transparent: true,
      opacity: 0.45,
    });

    const linesGroup = new THREE.Group();
    networkGroup.add(linesGroup);

    // 4. Subtle Ambient & Directional Lights
    const ambLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambLight);

    const dirLight = new THREE.DirectionalLight(0xfef3c7, 1.2);
    dirLight.position.set(3, 4, 5);
    scene.add(dirLight);

    // Orbiting particles (sparks representing ideas & human connectivity)
    const sparkCount = 70;
    const sparkGeo = new THREE.BufferGeometry();
    const sparkPos = new Float32Array(sparkCount * 3);
    for (let i = 0; i < sparkCount; i++) {
      const r = Math.random() * 2.8 + 0.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = (Math.random() - 0.5) * Math.PI * 0.7;
      sparkPos[i * 3] = r * Math.cos(theta) * Math.cos(phi);
      sparkPos[i * 3 + 1] = r * Math.sin(phi);
      sparkPos[i * 3 + 2] = r * Math.sin(theta) * Math.cos(phi);
    }
    sparkGeo.setAttribute('position', new THREE.BufferAttribute(sparkPos, 3));
    const sparkMat = new THREE.PointsMaterial({
      color: 0xf59e0b,
      size: 0.045,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending,
    });
    const sparkPoints = new THREE.Points(sparkGeo, sparkMat);
    networkGroup.add(sparkPoints);

    // Mouse tilt on container
    let mouseX = 0;
    let mouseY = 0;
    const handlePointerMove = (e: PointerEvent) => {
      const rect = container.getBoundingClientRect();
      mouseX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouseY = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
    };
    container.addEventListener('pointermove', handlePointerMove);

    // Animation Loop
    let animId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const time = clock.getElapsedTime();

      // Slow revolve
      networkGroup.rotation.y = time * 0.12 + mouseX * 0.3;
      networkGroup.rotation.x = Math.sin(time * 0.08) * 0.1 + mouseY * 0.2;

      // Pulse central light
      const pulse = Math.sin(time * 3) * 0.15 + 1.8;
      centerMat.emissiveIntensity = pulse;
      centerHalo.scale.set(1.7 + Math.sin(time * 2.5) * 0.15, 1.7 + Math.sin(time * 2.5) * 0.15, 1);

      // Update nodes positions & rebuild lines
      // Clear old line geometries
      while (linesGroup.children.length > 0) {
        const obj = linesGroup.children[0];
        linesGroup.remove(obj);
      }

      const pointsForLines: THREE.Vector3[] = [];
      const centerVec = new THREE.Vector3(0, 0, 0);

      nodeMeshes.forEach((item, idx) => {
        const curAngle = item.baseAngle + time * item.speed * 0.3;
        const x = Math.cos(curAngle) * item.radius;
        const z = Math.sin(curAngle) * item.radius;
        const y = item.height + Math.sin(time * 1.5 + idx) * 0.15;
        item.mesh.position.set(x, y, z);

        // Line from center light to node
        pointsForLines.push(centerVec, item.mesh.position);

        // Line to neighboring node
        const nextIdx = (idx + 1) % nodeMeshes.length;
        pointsForLines.push(item.mesh.position, nodeMeshes[nextIdx].mesh.position);
      });

      const lineGeo = new THREE.BufferGeometry().setFromPoints(pointsForLines);
      const linesMesh = new THREE.LineSegments(lineGeo, lineMaterial);
      linesGroup.add(linesMesh);

      // Rotate sparks
      sparkPoints.rotation.y = -time * 0.08;

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
      container.removeEventListener('pointermove', handlePointerMove);
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-[360px] sm:h-[420px] lg:h-[480px] rounded-3xl overflow-hidden border border-[#c88a2c]/30 bg-gradient-to-br from-[#1a1410] via-[#120e0b] to-[#0d0a08] shadow-[0_20px_50px_rgba(0,0,0,0.6)] ${className}`}
    >
      {/* Interactive Overlay Badges */}
      <div className="absolute top-4 left-4 z-10 flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#1e1712]/80 border border-[#c88a2c]/40 backdrop-blur-md text-[11px] font-medium text-[#f5ebd7]">
        <span className="w-2 h-2 rounded-full bg-[#f59e0b] animate-ping" />
        <span>Connected Organizational Network</span>
      </div>

      <div className="absolute bottom-4 right-4 z-10 px-3 py-1.5 rounded-full bg-[#1e1712]/80 border border-[#c88a2c]/40 backdrop-blur-md text-[11px] text-[#c88a2c] flex items-center gap-1.5">
        <span className="text-[#f59e0b]">✦</span> Central Guiding Light: Desert Candles
      </div>
    </div>
  );
};
