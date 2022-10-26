import { motion } from "framer-motion"
import { SocialIcon } from "react-social-icons"
type Props = {}

const Header = (props: Props) => {
	return (
		<header className="sticky top-0 flex items-start justify-between max-w-7xl mx-auto z-20 p-5 xl:items-center">
			<motion.div
				initial={{ x: -500, opacity: 0, scale: 0.5 }}
				animate={{ x: 0, opacity: 1, scale: 1 }}
				transition={{ duration: 1.5 }}
				className="flex flex-row items-center">
				<SocialIcon url="twitter.com" fgColor="gray" bgColor="transparent" />
				<SocialIcon url="twitter.com" fgColor="gray" bgColor="transparent" />
				<SocialIcon url="twitter.com" fgColor="gray" bgColor="transparent" />
			</motion.div>
			<motion.div
				initial={{ x: 500, opacity: 0, scale: 0.5 }}
				animate={{ x: 0, opacity: 1, scale: 1 }}
				transition={{ duration: 1.5 }}
				className="flex flex-row items-center text-gray-300 cursor-pointer">
				<SocialIcon
					network="email"
					fgColor="gray"
					bgColor="transparent"
					className="cursor-pointer"
				/>
				<p className="uppercase hidden md:inline-flex text-sm text-gray-400">
					get in touch
				</p>
			</motion.div>
		</header>
	)
}

export default Header
