/* eslint-disable react/no-unknown-property */
/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 scene.gltf 
Author: Ray Dima (https://sketchfab.com/JRxRay)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/crystal-moon-stick-ed2556dabf0f4759a27fbba3b7cdeb05
Title: Crystal Moon Stick
*/

import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';

export default function Model(props) {
  const { nodes, materials } = useGLTF('/scene.gltf');
  return (
    <group {...props} dispose={null}>
      <group rotation={[0, -Math.PI / 2, 0]}>
        <mesh
          geometry={nodes.Luna_blinn4_0.geometry}
          material={materials.blinn4}
          position={[0, -10.8, 0]}
          scale={1.3}
        />
      </group>
    </group>
  );
}

useGLTF.preload('/scene.gltf');