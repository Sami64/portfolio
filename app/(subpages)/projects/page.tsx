import { projectsData } from '@/lib/data'
import bg from '@/public/assets/backgrounds/background1.jpeg'
import Image from 'next/image'
import RenderModel from '../../components/RenderModel'
import Keyboard from '../../components/models/Keyboard'
import ProjectList from '../../components/projects'

const Page = () => {
	return (
		<>
			<Image
				src={bg}
				alt="background-image"
				className="w-full h-full object-cover fixed top-0 left-0 object-center opacity-10 -z-50"
			/>
			<ProjectList projects={projectsData} />
			<div className="flex items-center justify-center fixed top-16 lg:top-20 -translate-x-1/2 lg:translate-x-0 -z-10 left-1/2 lg:-left-16 h-screen">
				<RenderModel className="">
					<Keyboard />
				</RenderModel>
			</div>
		</>
	)
}
export default Page
