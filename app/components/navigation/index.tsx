'use client'

import { BtnList } from '@/lib/data'
import { motion } from 'framer-motion'
import useScreenSize from '../hooks/useScreenSize'
import ResponsiveComponent from '../ResponsiveComponent'
import NavButton from './NavButton'

const container = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: {
			staggerChildren: 0.3,
		},
	},
}

const Navigation = () => {
	const angleIncrement = 360 / BtnList.length
	const size = useScreenSize()

	const isLarge = size >= 1024
	const isMedium = size >= 768

	return (
		<div className="w-full fixed h-screen flex items-center justify-center">
			<ResponsiveComponent>
				{({ size }: { size: number }) => {
					return size && size >= 480 ? (
						<motion.div
							variants={container}
							initial="hidden"
							animate="show"
							className="w-max flex items-center justify-center group relative animate-spin-slow hover:pause">
							{BtnList.map((btn, index) => {
								const angleRad = (angleIncrement * index * Math.PI) / 180
								const radius = isLarge
									? 'calc(20vw - 1rem)'
									: isMedium
									? 'calc(30vw - 1rem)'
									: 'calc(40vw - 1rem)'

								const x = `calc(${radius} * ${Math.cos(angleRad)})`
								const y = `calc(${radius} * ${Math.sin(angleRad)})`

								return (
									<NavButton
										key={btn.label}
										x={x}
										y={y}
										{...btn}
									/>
								)
							})}
						</motion.div>
					) : (
						<>
							<motion.div
								variants={container}
								initial="hidden"
								animate="show"
								className="w-full px-2.5 xs:p-0 xs:w-max flex flex-col space-y-4 items-start xs:items-center justify-center group relative">
								{BtnList.slice(0, BtnList.length / 2).map((btn, index) => {
									return (
										<NavButton
											key={btn.label}
											x={'0'}
											y={'0'}
											{...btn}
										/>
									)
								})}
							</motion.div>

							<motion.div
								variants={container}
								initial="hidden"
								animate="show"
								className="w-full px-2.5 xs:p-0 xs:w-max flex flex-col space-y-4 items-end xs:items-center justify-center group relative">
								{BtnList.slice(BtnList.length / 2, BtnList.length).map(
									(btn, index) => {
										return (
											<NavButton
												key={btn.label}
												x={'0'}
												y={'0'}
												labelDirection="left"
												{...btn}
											/>
										)
									}
								)}
							</motion.div>
						</>
					)
				}}
			</ResponsiveComponent>
		</div>
	)
}
export default Navigation
