import clsx from 'clsx'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import ParticlesBackground from './components/ParticlesBackground'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
	title: 'Samuel Kow Paintsil',
	description: 'A full-stack developer with a passion for building things.',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body className={clsx(inter.variable, 'bg-background text-foreground')}>
				{children}
				<ParticlesBackground />
			</body>
		</html>
	)
}
