
import { useEffect, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Environment,
  Float,
  useAnimations,
  useGLTF,
} from "@react-three/drei";
import {
  MathUtils,
  type Group,
  type Mesh,
  type Object3D,
} from "three";

import { clone as cloneSkeleton } from "three/addons/utils/SkeletonUtils.js";

function Character() {
  const groupRef = useRef<Group>(null);
  const { scene, animations } = useGLTF(
    "/models/aditya-character.glb"
  );

  const character = useMemo(
    () => cloneSkeleton(scene),
    [scene]
  );

  const { actions } = useAnimations(animations, groupRef);

  useEffect(() => {
    const idle = actions.idle;

    if (idle) {
      idle.reset().fadeIn(0.5).play();
    }

    return () => {
      idle?.fadeOut(0.3);
    };
  }, [actions]);

  useEffect(() => {
    character.traverse((object: Object3D) => {
      const mesh = object as Mesh;

      if (!mesh.isMesh) return;

      // Hide the original scout cap.
      if (
        mesh.name.toLowerCase().includes("cap")
      ) {
        mesh.visible = false;
      }

      if (!mesh.material) return;

      const recolor = (material: any) => {
        const updated = material.clone();

        switch (updated.name) {
          case "scout-cloth":
            updated.color.set("#17191f");
            break;

          case "scout-pants":
            updated.color.set("#111318");
            break;

          case "scout-trim":
            updated.color.set("#454954");
            break;

          case "scout-leather":
            updated.color.set("#e6e7e9");
            break;

          case "scout-sole":
            updated.color.set("#f4f4f2");
            break;

          case "scout-metal":
            updated.color.set("#aeb4c0");
            break;
        }

        return updated;
      };

      mesh.material = Array.isArray(mesh.material)
        ? mesh.material.map(recolor)
        : recolor(mesh.material);
    });
  }, [character]);


  useFrame(({ pointer, clock }, delta) => {
    if (!groupRef.current) return;

    // Continuous rotation: approximately one full turn every 18 seconds
    const autoRotation = clock.elapsedTime * 0.35;

    // Stronger mouse response
    const targetRotationY = autoRotation + pointer.x * 0.85;
    const targetRotationX = -pointer.y * 0.3;

    // Faster, smoother response
    groupRef.current.rotation.y = MathUtils.damp(
      groupRef.current.rotation.y,
      targetRotationY,
      5,
      delta
    );

    groupRef.current.rotation.x = MathUtils.damp(
      groupRef.current.rotation.x,
      targetRotationX,
      5,
      delta
    );
  });


  return (
    <Float
      speed={1.1}
      rotationIntensity={0.015}
      floatIntensity={0.045}
    >
      <group
        ref={groupRef}
        position={[0, -1.05, 0]}
        scale={1.35}
      >
        <primitive object={character} />
      </group>
    </Float>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.8} />

      <directionalLight
        position={[4, 5, 5]}
        intensity={2}
      />

      <pointLight
        position={[-4, -2, 3]}
        intensity={1.5}
        color="#5267E8"
      />

      <Character />

      <Environment preset="studio" />
    </>
  );
}

export default function HeroScene() {
  return (
    <div className="relative h-[420px] w-full lg:h-[560px]">
      {/* Lightweight mobile fallback */}
      <div className="absolute inset-0 flex items-center justify-center lg:hidden">
        <div className="relative h-64 w-64">
          <div className="absolute inset-8 rotate-45 rounded-full border border-[#5267E8]/60" />
          <div className="absolute inset-12 -rotate-45 rounded-full border border-[#77736D]/70" />
          <div className="absolute inset-20 rotate-12 border border-[#5267E8]/50" />
          <div className="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-[#5267E8] shadow-xl" />
        </div>
      </div>

      {/* Interactive 3D desktop scene */}
      <div className="absolute inset-0 hidden lg:block">
        <Canvas
          camera={{ position: [0, 0, 5], fov: 40 }}
          dpr={[1, 1.5]}
          gl={{
            antialias: true,
            alpha: true,
            powerPreference: "high-performance",
          }}
        >
          <Scene />
        </Canvas>
      </div>
    </div>
  );
}

useGLTF.preload("/models/aditya-character.glb");
