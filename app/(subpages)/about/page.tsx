import AboutDetails from '@/app/components/about'
import Headset from '@/app/components/models/Headset'
import bg from '@/public/assets/backgrounds/about.jpeg'
import Image from 'next/image'
import RenderModel from '../../components/RenderModel'

const Page = () => {
	return (
		<>
			<Image
				src={bg}
				alt="background-image"
				className="w-full h-full object-cover fixed top-0 left-0 object-center opacity-10 -z-50"
			/>
			<div className="w-full h-3/5 xs:h-3/4 sm:h-screen absolute top-1/2 -translate-y-1/2 left-0">
				<RenderModel className="">
					<Headset />
				</RenderModel>
			</div>
			<div className="relative w-full h-screen flex flex-col items-center justify-center">
				<div className="absolute flex flex-col items-center text-center top-[60%] left-1/2 -translate-y-1/2 -translate-x-1/2">
					<h1 className="font-bold text-6xl xs:text-7xl sm:text-8xl lg:text-9xl text-accent">
						Samuel Paintsil
					</h1>
					<p className="font-light text-foreground text-lg">Meet me</p>
				</div>
			</div>

			<AboutDetails />
		</>
	)
}
export default Page
