import bg from '@/public/assets/backgrounds/background2.jpeg'
import Image from 'next/image'
import RenderModel from './components/RenderModel'
import Guitar from './components/models/Guitar'
import Navigation from './components/navigation'

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between relative">
			<Image
				src={bg}
				alt="background-image"
				fill
				className="w-full h-full object-cover object-center opacity-10 -z-50"
			/>
			<div className="w-full h-screen">
				<Navigation />
				<RenderModel className="">
					<Guitar />
				</RenderModel>
			</div>
		</main>
	)
}
