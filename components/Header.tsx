import { motion } from "framer-motion"
import Link from "next/link"
import { SocialIcon } from "react-social-icons"
import { Social } from "../typings"
type Props = { socials: Social[] }

const Header = ({ socials }: Props) => {
	return (
		<header className="sticky top-0 flex items-start justify-between max-w-7xl mx-auto z-20 p-5 xl:items-center">
			<motion.div
				initial={{ x: -500, opacity: 0, scale: 0.5 }}
				animate={{ x: 0, opacity: 1, scale: 1 }}
				transition={{ duration: 1.5 }}
				className="flex flex-row items-center">
				{socials.map((social) => (
					<SocialIcon
						key={social._id}
						url={social.url}
						fgColor="gray"
						bgColor="transparent"
					/>
				))}
			</motion.div>
			<motion.div
				initial={{ x: 500, opacity: 0, scale: 0.5 }}
				animate={{ x: 0, opacity: 1, scale: 1 }}
				transition={{ duration: 1.5 }}
				className="flex flex-row items-center text-gray-300 cursor-pointer ">
				<SocialIcon
					network="email"
					fgColor="gray"
					bgColor="transparent"
					className="cursor-pointer "
				/>
				<Link href="#contact">
					<p className="uppercase hidden md:inline-flex text-sm text-gray-400 hover:text-[#329F5B]">
						get in touch
					</p>
				</Link>
			</motion.div>
		</header>
	)
}

export default Header
