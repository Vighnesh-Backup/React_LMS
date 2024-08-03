import React, { useState } from 'react'
import { Navbar } from './Navbar'

export function RegisterForm(props) {

	const [Fname, setFname] = useState()
	const [lname, setlname] = useState()
	const [email, setemail] = useState()
	const [address, setaddress] = useState()
	const [city, setcity] = useState()
	const [state, setstate] = useState()
	const [zip, setzip] = useState()

	function submitHandler(e){
		e.preventDefault();


		//let response = fetch("")


		alert("form submitted successfully");
	}
    
    return (
        <>
		<Navbar />
            <section className="p-6  dark:text-gray-900">
	<form 
	onSubmit={submitHandler}
	noValidate="" 
	action="" 
	className="container flex flex-col mx-auto space-y-12">
		<fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-50">
			<div className="space-y-2 col-span-full lg:col-span-1">
				<p className="font-medium">Personal Inormation</p>
				<p className="text-xs">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci fuga autem eum!</p>
			</div>
			<div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
				<div className="col-span-full sm:col-span-3">
					<label htmlFor="firstname" className="text-sm">First name</label>
					<input
					onChange={(e)=>{setfname(email.target.value)}}
					 id="firstname"
					  type="text" 
					  placeholder="First name"
					  className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label htmlFor="lastname" className="text-sm">Last name</label>
					<input
					onChange={(e)=>{setlname(email.target.value)}}
					 id="lastname"
					 type="text" 
					 placeholder="Last name" 
					 className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label htmlFor="email" className="text-sm">Email</label>
					<input 
					onChange={(e)=>{setemail(email.target.value)}}
					id="email" 
					type="email" 
					placeholder="Email" 
					className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
				</div>
				<div className="col-span-full">
					<label htmlFor="address" className="text-sm">Address</label>
					<input 
					onChange={(e)=>{setaddress(email.target.value)}}
					id="address" 
					type="text" 
					placeholder="" 
					className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
				</div>
				<div className="col-span-full sm:col-span-2">
					<label htmlFor="city" className="text-sm">City</label>
					<input 
					onChange={(e)=>{setcity(email.target.value)}}
					id="city" 
					type="text" 
					placeholder="" 
					className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
				</div>
				<div className="col-span-full sm:col-span-2">
					<label htmlFor="state" className="text-sm">State / Province</label>
					<input 
					onChange={(e)=>{setstate(email.target.value)}}
					id="state" 
					type="text" 
					placeholder="" 
					className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
				</div>
				<div className="col-span-full sm:col-span-2">
					<label htmlFor="zip" className="text-sm">ZIP / Postal</label>
					<input 
					id="zip" 
					onChange={(e)=>{setzip(e.target.value)}}
					type="text" 
					placeholder="" 
					className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
				</div>
				<div className="col-span-full sm:col-span-2 capitalize ">
					<label htmlFor="zip" className="text-lg" >Upload Profile</label>
					<input 
					onChange={(e)=>{setprofil(e.target.value)}}
					id="profile" 
					type="file" 
					placeholder="" 
					className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-800 focus:dark:ring-violet-600 dark:border-gray-950" />
				</div>
				<div className="col-span-full capitalize btn btn-info">			
				<button className='capitalize text-lg'>register</button>				</div>
			</div>
		</fieldset>
		{/* <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-50">
			<div className="space-y-2 col-span-full lg:col-span-1">
				<p className="font-medium">Profile</p>
				<p className="text-xs">Adipisci fuga autem eum!</p>
			</div>
			<div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
				<div className="col-span-full sm:col-span-3">
					<label htmlFor="username" className="text-sm">Username</label>
					<input id="username" type="text" placeholder="Username" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label htmlFor="website" className="text-sm">Website</label>
					<input id="website" type="text" placeholder="https://" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
				</div>
				<div className="col-span-full">
					<label htmlFor="bio" className="text-sm">Bio</label>
					<textarea id="bio" placeholder="" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"></textarea>
				</div>
				<div className="col-span-full">
					<label htmlFor="bio" className="text-sm">Photo</label>
					<div className="flex items-center space-x-2">
						<img src="https://source.unsplash.com/30x30/?random" alt="" className="w-10 h-10 dark:bg-gray-500 rounded-full dark:bg-gray-300" />
						<button type="button" className="px-4 py-2 border rounded-md dark:border-gray-800">Change</button>
					</div>
				</div>
			</div>
		</fieldset> */}
	</form>
</section>
        </>
    )
}
