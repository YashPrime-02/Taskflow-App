import React, { useRef, useEffect, useState } from "react";
import * as THREE from "three";

import { AuthProvider, useAuth } from "./Context/AuthContext";

import Login from "./pages/Login/Login"; // ADD THIS
import TaskManager from "./pages/TaskManager/TaskManager";
import PerformanceChart from "./pages/PerformanceChart/PerformanceChart";

import "./App.css";

// ------------------------------
// APP INNER LOGIC (auth handled)
// ------------------------------
function AppContent() {
  const mountRef = useRef(null);
  const { isAuthenticated } = useAuth();
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

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

    const particles = 200;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particles * 3);

    for (let i = 0; i < particles * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 10;
    }

    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const material = new THREE.PointsMaterial({ color: 0x0099ff, size: 0.1 });
    const points = new THREE.Points(geometry, material);
    scene.add(points);

    const animate = () => {
      requestAnimationFrame(animate);
      points.rotation.y += 0.001;
      points.rotation.x += 0.001;
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      renderer.setSize(mount.clientWidth, mount.clientHeight);
      camera.aspect = mount.clientWidth / mount.clientHeight;
      camera.updateProjectionMatrix();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      mount.removeChild(renderer.domElement);
      geometry.dispose();
      material.dispose();
    };
  }, []);

return (
  <>
    {/* Background ALWAYS visible */}
    <div className="background-container">
      <div ref={mountRef} className="three-bg"></div>
      <div className="overlay"></div>
    </div>

    {/* Foreground Content */}
    <div className="main-content">
      {!isAuthenticated ? (
        <div className="login-wrapper">
          <Login />
        </div>
      ) : (
        <>
          <TaskManager tasks={tasks} setTasks={setTasks} />
          <PerformanceChart tasks={tasks} />
        </>
      )}
    </div>
  </>
);

}


// ------------------------------
// OUTER PROVIDER WRAPPER
// ------------------------------
export default function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}
