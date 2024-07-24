'use client'

import { useEffect, useState } from 'react'

const createParticles = () => ({
	id: Math.random(),
	top: `${Math.random() * 100}%`,
	left: `${Math.random() * 100}%`,
	animationDuration: `${Math.random() * 5 + 5}s`,
})

const ParticlesBackground = () => {
	const [particles, setParticles] = useState<
		{ id: number; top: string; left: string; animationDuration: string }[]
	>([])

	useEffect(() => {
		const addParticlePeriodic = () => {
			const newParticle = createParticles()
			setParticles((prevParticles) => [
				...prevParticles.slice(-10),
				newParticle,
			])
		}

		const interval = setInterval(addParticlePeriodic, 1000)

		return () => clearInterval(interval)
	}, [])

	return (
		<div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden">
			{particles.map((particle) => (
				<div
					key={particle.id}
					className="absolute rounded-full bg-accent w-[5px] h-[5px] bg-particle-radial"
					style={{
						top: particle.top,
						left: particle.left,
						animation: `move ${particle.animationDuration} infinite alternate`,
					}}
				/>
			))}
		</div>
	)
}
export default ParticlesBackground
