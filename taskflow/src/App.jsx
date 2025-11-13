import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import TaskManager from './pages/TaskManager/TaskManager';
import PerformanceChart from './pages/PerformanceChart/PerformanceChart';
import './App.css';

function App() {
  const mountRef = useRef(null);
  const [tasks, setTasks] = useState([]); // shared state for both components

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      mount.clientWidth / mount.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    mount.appendChild(renderer.domElement);

    // Create particles
    const particlesCount = 200;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 10;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const material = new THREE.PointsMaterial({ color: 0x0099ff, size: 0.1 });
    const points = new THREE.Points(geometry, material);
    scene.add(points);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      points.rotation.y += 0.001;
      points.rotation.x += 0.001;
      renderer.render(scene, camera);
    };
    animate();

    // Handle resizing
    const handleResize = () => {
      renderer.setSize(mount.clientWidth, mount.clientHeight);
      camera.aspect = mount.clientWidth / mount.clientHeight;
      camera.updateProjectionMatrix();
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      mount.removeChild(renderer.domElement);
      geometry.dispose();
      material.dispose();
    };
  }, []);

  return (
    <>
      {/* 3D Background */}
      <div className="background-container">
        <div ref={mountRef} className="three-bg"></div>
        <div className="overlay"></div>
      </div>

      {/* Foreground Content */}
      <div className="main-content">
        {/* Pass state & setter to TaskManager */}
        <TaskManager tasks={tasks} setTasks={setTasks} />
        {/* Pass live data to chart */}
        <PerformanceChart tasks={tasks} />
      </div>
    </>
  );
}

export default App;
