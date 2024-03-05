/* eslint-disable react/no-unknown-property */
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import {
  Environment,
  OrbitControls,
  PerspectiveCamera,
} from '@react-three/drei';
import Scene from '../../public/Scene';

function HeroModel() {
  return (
    <Canvas className="cursor-grab">
      <ambientLight intensity={1} />
      <PerspectiveCamera />
      <OrbitControls enableZoom={false} enablePan={false} />
      <Suspense fallback={null}>
        <Scene />
      </Suspense>
      <Environment preset="sunset" />
    </Canvas>
  );
}

export default HeroModel;
