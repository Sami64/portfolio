'use client'

import { useForm } from 'react-hook-form'

export default function Form() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm()
	const onSubmit = (data: any) => console.log(data)
	console.log(errors)

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className="max-w-md w-full flex flex-col items-center justify-center space-y-4">
			<input
				type="text"
				placeholder="Name"
				{...register('Name', { required: true })}
				className="w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg"
			/>
			<input
				type="email"
				placeholder="email"
				{...register('email', { required: true })}
				className="w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg"
			/>
			<textarea
				placeholder="message"
				{...register('message', { required: true, max: 256, min: 50 })}
				className="w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg"
			/>

			<input
				value="Initiate Contact"
				className="px-10 py-4 rounded-md shadow-lg bg-background border border-accent/30 border-solid hover:shadow-glass-sm backdrop-blur-sm text-foreground focus:outline-none cursor-pointer capitalize"
				type="submit"
			/>
		</form>
	)
}
