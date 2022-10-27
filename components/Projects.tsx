import { motion } from "framer-motion"
import { urlFor } from "../sanity"
import { Project } from "../typings"
type Props = {
	projects: Project[]
}

const Projects = ({ projects }: Props) => {
	const letters = Array.from("projects")

	const container = {
		hidden: { opacity: 0 },
		visible: (i = 1) => ({
			opacity: 1,
			transition: { staggerChildren: 0.03, delayChildren: 0.04 * i },
		}),
	}

	const child = {
		visible: {
			opacity: 1,
			x: 0,
			y: 0,
			transition: {
				type: "spring",
				damping: 12,
				stiffness: 100,
			},
		},
		hidden: {
			opacity: 0,
			x: -20,
			y: 10,
			transition: {
				type: "spring",
				damping: 12,
				stiffness: 100,
			},
		},
	}

	return (
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 1.5 }}
			className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0 ">
			<motion.div
				initial={{ x: -500, opacity: 0, scale: 0.5 }}
				animate={{ x: 0, opacity: 1, scale: 1 }}
				transition={{ duration: 1.5 }}
				whileInView={{ x: 0, opacity: 1 }}
				className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
				{letters.map((letter, index) => (
					<motion.span key={index}>{letter}</motion.span>
				))}
			</motion.div>
			<div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#329F5B]/80">
				{projects.map((project, i) => (
					<div
						key={project._id}
						className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
						<motion.img
							initial={{ y: -300, opacity: 0 }}
							transition={{ duration: 1.2 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							src={urlFor(project?.image).url()}
							alt=""
						/>
						<div className="space-y-10 px-0 md:px-10 max-w-6xl">
							<h4 className="text-4xl font-semibold text-center">
								<span className="underline decoration-[#329F5B]/50">
									Case study {i + 1} of {projects.length}:
								</span>{" "}
								{project?.title}
							</h4>
							<div className="flex items-center space-x-2 justify-center">
								{project?.technologies.map((technology) => (
									<img
										className="h-10 w-10"
										key={technology._id}
										src={urlFor(technology.image).url()}
									/>
								))}
							</div>
							<p className="text-lg text-center md:text-left">
								{project?.summary}
							</p>
						</div>
					</div>
				))}
			</div>
			<div className="w-full absolute top-[30%] bg-[#329F5B]/10 left-0 h-[500px] -skew-y-12"></div>
		</motion.div>
	)
}

export default Projects
