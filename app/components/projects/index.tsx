import ProjectLayout from './ProjectLayout'

const ProjectList = ({
	projects,
}: {
	projects: {
		id: number
		name: string
		description: string
		demoLink: string
		date: string
	}[]
}) => {
	return (
		<div className="w-full max-w-auto  xl:max-w-4xl px-4 mx-auto lg:px-16 space-y-6 md:space-y-8 flex flex-col items-center">
			{projects.map((project) => (
				<ProjectLayout
					key={project.id}
					{...project}
				/>
			))}
		</div>
	)
}
export default ProjectList
