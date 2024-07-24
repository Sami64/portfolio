import clsx from 'clsx'
import { motion } from 'framer-motion'
import {
	ContactIcon,
	GithubIcon,
	Home,
	LinkedinIcon,
	NotebookTextIcon,
	Palette,
	TwitterIcon,
	User,
} from 'lucide-react'
import Link from 'next/link'
import ResponsiveComponent from '../ResponsiveComponent'

const getIcon = (icon: string) => {
	switch (icon) {
		case 'home':
			return (
				<Home
					className="w-full h-auto"
					strokeWidth={1.5}
				/>
			)
		case 'about':
			return <User />
		case 'projects':
			return <Palette />
		case 'contact':
			return <ContactIcon />
		case 'github':
			return <GithubIcon />
		case 'linkedin':
			return <LinkedinIcon />
		case 'twitter':
			return <TwitterIcon />
		case 'resume':
			return <NotebookTextIcon />
		default:
			return (
				<Home
					className="w-full h-auto"
					strokeWidth={1.5}
				/>
			)
	}
}

const item = {
	hidden: { scale: 0 },
	show: { scale: 1 },
}

const NavLink = motion(Link)

const NavButton = ({
	x,
	y,
	label,
	link,
	icon,
	newTab,
	labelDirection = 'right',
}: {
	x: string
	y: string
	label: string
	link: string
	icon: string
	newTab: boolean
	labelDirection?: string
}) => {
	return (
		<ResponsiveComponent>
			{({ size }: { size: number }) => {
				return size && size >= 480 ? (
					<div
						className="absolute cursor-pointer z-50"
						style={{ transform: `translate(${x}, ${y})` }}>
						<NavLink
							variants={item}
							href={link}
							aria-label={label}
							target={newTab ? '_blank' : '_self'}
							className="text-foreground rounded-full flex  items-center justify-center custom-bg">
							<span className="relative w-14 h-14 p-4 animate-spin-slow-reverse group-hover:pause hover:text-accent">
								{getIcon(icon)}
								<span className="peer bg-transparent absolute top-0 left-0 w-full h-full" />
								<span className="absolute hidden peer-hover:block px-2 py-1 left-full mx-2 top-1/2 -translate-y-1/2 bg-background text-foreground text-sm rounded-md shadow-lg whitespace-nowrap">
									{label}
								</span>
							</span>
						</NavLink>
					</div>
				) : (
					<div className="w-fit cursor-pointer z-50">
						<NavLink
							variants={item}
							href={link}
							aria-label={label}
							target={newTab ? '_blank' : '_self'}
							className="text-foreground rounded-full flex  items-center justify-center custom-bg">
							<span className="relative w-10 h-10 xs:w-14 xs:h-14 p-2.5 xs:p-4 hover:text-accent">
								{getIcon(icon)}
								<span className="peer bg-transparent absolute top-0 left-0 w-full h-full" />
								<span
									className={clsx(
										'absolute hidden peer-hover:block px-2 py-1 left-full mx-2 top-1/2 -translate-y-1/2 bg-background text-foreground text-sm rounded-md shadow-lg whitespace-nowrap',
										labelDirection === 'left' ? 'right-full left-auto' : ''
									)}>
									{label}
								</span>
							</span>
						</NavLink>
					</div>
				)
			}}
		</ResponsiveComponent>
	)
}
export default NavButton
