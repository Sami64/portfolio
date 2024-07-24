'use client'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import * as THREE from 'three'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
	nodes: {
		Object_4: THREE.Mesh
		Object_5: THREE.Mesh
		Object_6: THREE.Mesh
		Object_7: THREE.Mesh
		Object_8: THREE.Mesh
		Object_10: THREE.Mesh
		Object_11: THREE.Mesh
		Object_12: THREE.Mesh
		Object_13: THREE.Mesh
		Object_14: THREE.Mesh
		Object_16: THREE.Mesh
		Object_17: THREE.Mesh
		Object_19: THREE.Mesh
		Object_21: THREE.Mesh
		Object_23: THREE.Mesh
	}
	materials: {
		['Material.003']: THREE.MeshStandardMaterial
		['Material.001']: THREE.MeshStandardMaterial
		['Material.002']: THREE.MeshStandardMaterial
		['Material.007']: THREE.MeshStandardMaterial
		['Material.010']: THREE.MeshStandardMaterial
		['Material.017']: THREE.MeshStandardMaterial
		['Material.004']: THREE.MeshStandardMaterial
		['Material.009']: THREE.MeshStandardMaterial
		['Material.006']: THREE.MeshStandardMaterial
		['Material.005']: THREE.MeshStandardMaterial
		['Material.018']: THREE.MeshStandardMaterial
	}
}

export default function Headset(props: JSX.IntrinsicElements['group']) {
	const { nodes, materials } = useGLTF(
		'/assets/models/headset.glb'
	) as unknown as GLTFResult
	const modelRef = useRef<THREE.Group | null>(null) // Ensure the ref type is Group | null

	useFrame(() => {
		if (modelRef.current) modelRef.current.rotation.y += 0.007
	})

	return (
		<group
			{...props}
			ref={modelRef}
			dispose={null}
			scale={[1.5, 1.5, 1.5]}
			position={[0, 1.6, 0]}
			rotation={[0.4, -1, 0]}>
			<group
				position={[-0.02, -0.644, -0.534]}
				rotation={[1.035, 0, 0]}
				scale={[0.487, 0.484, 0.484]}>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Object_4.geometry}
					material={materials['Material.003']}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Object_5.geometry}
					material={materials['Material.003']}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Object_6.geometry}
					material={materials['Material.003']}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Object_7.geometry}
					material={materials['Material.003']}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Object_8.geometry}
					material={materials['Material.003']}
				/>
			</group>
			<group position={[0, 0.597, 0]}>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Object_10.geometry}
					material={materials['Material.001']}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Object_11.geometry}
					material={materials['Material.002']}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Object_12.geometry}
					material={materials['Material.007']}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Object_13.geometry}
					material={materials['Material.010']}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Object_14.geometry}
					material={materials['Material.017']}
				/>
			</group>
			<group
				position={[-0.149, -0.041, 0.009]}
				rotation={[0, 0, -Math.PI / 2]}
				scale={[0.992, 1.204, 0.97]}>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Object_16.geometry}
					material={materials['Material.004']}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Object_17.geometry}
					material={materials['Material.009']}
				/>
			</group>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Object_19.geometry}
				material={materials['Material.006']}
				position={[0, 0.597, 0]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Object_21.geometry}
				material={materials['Material.005']}
				position={[0, 0.597, 0]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Object_23.geometry}
				material={materials['Material.018']}
				position={[0.288, -1.107, -0.693]}
				rotation={[-2.242, 0.523, -0.426]}
				scale={[-0.023, 0.023, 0.023]}
			/>
		</group>
	)
}

useGLTF.preload('/assets/models/headset.glb')
