import Link from "next/link"
import { Cursor, useTypewriter } from "react-simple-typewriter"
import { urlFor } from "../sanity"
import { PageInfo } from "../typings"
import BackgroundCircles from "./BackgroundCircles"

type Props = { pageInfo: PageInfo }

const Hero = ({ pageInfo }: Props) => {
	const [text, count] = useTypewriter({
		words: [`${pageInfo?.name} here`, "Gamer"],
		loop: true,
		delaySpeed: 2000,
	})

	return (
		<div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
			<BackgroundCircles />
			<img
				className="relative rounded-full h-32 w-32 mx-auto object-cover"
				src={urlFor(pageInfo?.heroImage).url()}
				alt=""
			/>
			<div className="z-20">
				<h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
					{pageInfo?.role}
				</h2>
				<h1 className="text-5xl lg:6xl font-semibold px-10">
					<span className="mr-3">{text}</span>
					<Cursor cursorColor="#329F5B" />
				</h1>
				<div className="pt-5">
					<Link href="#about">
						<button className="heroButton">about</button>
					</Link>
					<Link href="#experience" className="">
						<button className="heroButton">experience</button>
					</Link>
					<Link href="#skills">
						<button className="heroButton">skills</button>
					</Link>
					<Link href="#projects">
						<button className="heroButton">projects</button>
					</Link>
				</div>
			</div>
		</div>
	)
}

export default Hero
