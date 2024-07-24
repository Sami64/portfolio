import Form from '@/app/components/contact/Form'
import bg from '@/public/assets/backgrounds/background1.jpeg'
import Image from 'next/image'

const Page = () => {
	return (
		<>
			<Image
				src={bg}
				alt="background-image"
				className="w-full h-full object-cover fixed top-0 left-0 object-center opacity-10 -z-50"
			/>
			<article className="relative w-full flex flex-col items-center justify-center py-8 sm:py-0 space-y-8">
				<div className="flex flex-col items-center justify-center space-y-6 w-full sm:w-3/4">
					<h1 className="text-accent font-semibold text-center text-4xl capitalize">
						access the cortex
					</h1>
					<p className="text-center font-light text-sm xs:text-base">
						Enter my cortex and access the information you need to know about me
						and how I can help you with your project, Or let us work together..
						Or you can just say hi.
					</p>
				</div>
			</article>
			<Form />
		</>
	)
}
export default Page
