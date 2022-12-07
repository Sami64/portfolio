import { EnvelopeIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/24/solid"
import { SubmitHandler, useForm } from "react-hook-form"

type Props = {}

type Inputs = {
	name: string
	email: string
	subject: string
	message: string
}

const ContactMe = (props: Props) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<Inputs>()
	const onSubmit: SubmitHandler<Inputs> = (formData) => {
		window.location.href = `mailto:smashbros54@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`
	}
	return (
		<div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
			<h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
				contact
			</h3>
			<div className="flex flex-col space-y-10">
				<h4 className="text-4xl  font-semibold text-center">
					<span className="decoration-[#329F5B]/50 underline capitalize">
						lets connect.
					</span>
				</h4>

				<div className="space-y-10">
					<div className="flex items-center space-x-5">
						<PhoneIcon className="text-[#329F5B] h-7 w-7 animate-pulse" />
						<p>+233501083601</p>
					</div>

					<div className="flex items-center space-x-5">
						<EnvelopeIcon className="text-[#329F5B] h-7 w-7 animate-pulse" />
						<p>smashbros54@gmail.com</p>
					</div>

					<div className="flex items-center space-x-5">
						<MapPinIcon className="text-[#329F5B] h-7 w-7 animate-pulse" />
						<p>KNUST</p>
					</div>
				</div>

				<form
					onSubmit={handleSubmit(onSubmit)}
					className="flex flex-col space-y-2 w-fit mx-auto">
					<div className="flex space-x-2">
						<input
							{...register("name")}
							placeholder="Name"
							className="contactInput"
							type="text"
						/>
						<input
							{...register("email")}
							placeholder="Email"
							className="contactInput"
							type="email"
						/>
					</div>
					<input
						{...register("subject")}
						placeholder="Subject"
						className="contactInput"
						type="text"
					/>
					<textarea
						{...register("message")}
						placeholder="Message"
						className="contactInput"
					/>
					<button
						type="submit"
						className="bg-[#329F5B] py-5 px-10 rounded-md text-black font-bold text-lg capitalize">
						submit
					</button>
				</form>
			</div>
		</div>
	)
}

export default ContactMe
