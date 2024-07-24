/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: unknown.fbx (https://sketchfab.com/unknown.fbx)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/custom-mechanical-keyboard-90d61eec0c484332ab562c5f4eda6f52
Title: Custom - Mechanical Keyboard
*/
'use client'

import { useGLTF } from '@react-three/drei'
import * as THREE from 'three'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
	nodes: {
		defaultMaterial: THREE.Mesh
		defaultMaterial_1: THREE.Mesh
		defaultMaterial_2: THREE.Mesh
	}
	materials: {
		Keyboard: THREE.MeshStandardMaterial
		Wood_00: THREE.MeshStandardMaterial
	}
}

export default function Keyboard(props: JSX.IntrinsicElements['group']) {
	const { nodes, materials } = useGLTF(
		'/assets/models/keyboard.glb'
	) as GLTFResult
	return (
		<group
			{...props}
			dispose={null}
			position={[0.2, 0.5, 0]}
			scale={[0.003, 0.003, 0.003]}
			rotation={[1, 2, 1]}>
			<group rotation={[-Math.PI / 2, 0, 0]}>
				<group rotation={[Math.PI / 2, 0, 0]}>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.defaultMaterial.geometry}
						material={materials.Keyboard}
						position={[0, -23.907, 0]}
						rotation={[-Math.PI / 2, 0, 0]}
						scale={100}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.defaultMaterial_1.geometry}
						material={materials.Wood_00}
						position={[0, -23.907, 0]}
						rotation={[-Math.PI / 2, 0, 0]}
						scale={100}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.defaultMaterial_2.geometry}
						material={materials.Keyboard}
						position={[-21.666, 173.137, -75.702]}
						rotation={[-1.476, 0, 0]}
						scale={5.744}
					/>
				</group>
			</group>
		</group>
	)
}

useGLTF.preload('/assets/models/keyboard.glb')