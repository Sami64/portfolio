'use client'

import { Environment } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import clsx from 'clsx'
import { Suspense } from 'react'

const RenderModel = ({
	children,
	className,
}: {
	className: string
	children: React.ReactNode
}) => {
	return (
		<Canvas className={clsx('w-screen h-screen relative -z-10', className)}>
			<Suspense fallback={null}>{children}</Suspense>
			<Environment preset="city" />
		</Canvas>
	)
}
export default RenderModel
