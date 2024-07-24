import clsx from 'clsx'

const ItemLayout = ({
	children,
	className,
}: {
	children: React.ReactNode
	className: string
}) => {
	return (
		<div
			className={clsx(
				'custom-bg p-6 sm:p-8 rounded-xl flex items-center justify-center space-y-8',
				className
			)}>
			{children}
		</div>
	)
}

const AboutDetails = () => {
	return (
		<section className="py-20 w-full">
			<div className="grid grid-cols-12 gap-4 xs:gap-6 md:gap-8 w-full">
				<ItemLayout className="col-span-full lg:col-span-8 row-span-2 flex-col items-start">
					<h2 className="text-xl md:text-2xl text-left w-full capitalize">
						He Crafts
					</h2>
					<p className="font-light text-xs sm:text-sm md:text-base">
						He crafts beautiful and functional websites and applications. He is
						a full-stack developer with a passion for creating beautiful and
						functional websites and applications. He has experience with a
						variety of technologies, including React, Node.js, and MongoDB. He
						is always looking for new challenges and opportunities to learn and
						grow as a developer.
					</p>
				</ItemLayout>
				<ItemLayout className="col-span-full xs:col-span-6 lg:col-span-4 text-accent">
					<p className="font-semibold w-full text-left text-2xl sm:text-5xl">
						10+ <sub className="font-semibold text-base">clients</sub>
					</p>
				</ItemLayout>
				<ItemLayout className="col-span-full xs:col-span-6 lg:col-span-4 text-accent">
					<p className="font-semibold w-full text-left text-2xl sm:text-5xl">
						5+{' '}
						<sub className="font-semibold text-base">years of experience</sub>
					</p>
				</ItemLayout>
				<ItemLayout className="col-span-full sm:col-span-6 lg:col-span-4 !p-0">
					<img
						className="w-full h-auto"
						src="https://github-readme-stats.vercel.app/api/top-langs?username=Sami64&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false"
						alt="Sami64"
						loading="lazy"
					/>
				</ItemLayout>

				<ItemLayout className="col-span-full md:col-span-8 !p-0">
					<img
						className="w-full h-auto"
						src="https://github-readme-stats.vercel.app/api?username=Sami64&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false"
						alt="Sami64"
						loading="lazy"
					/>
				</ItemLayout>

				<ItemLayout className="col-span-full">
					<img
						className="w-full h-auto"
						src="https://skillicons.dev/icons?i=nextjs,nodejs,flutter,react,unity,firebase,graphql,cloudflare,postgres"
						alt="Sami64"
						loading="lazy"
					/>
				</ItemLayout>
				<ItemLayout className="col-span-full md:col-span-6 !p-0">
					<img
						className="w-full h-auto"
						src="https://github-readme-streak-stats.herokuapp.com?user=Sami64&theme=dark&hide_border=true&type=png&background=EB545400&ring=FEFE5BC2&currStreakLabel=FEFE5B"
						alt="GitHub Streak"
					/>
				</ItemLayout>
				<ItemLayout className="col-span-full md:col-span-6 !p-0">
					<img
						className="w-full h-auto"
						src="https://github-readme-stats.vercel.app/api/pin?username=Sami64&repo=stack-flow&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false"
						alt="Sami64"
						loading="lazy"
					/>
				</ItemLayout>
			</div>
		</section>
	)
}
export default AboutDetails
