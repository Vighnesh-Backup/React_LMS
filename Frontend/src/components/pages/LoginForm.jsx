import React, { useState } from 'react'


export function LoginForm(props) {
	const [email, setemail] = useState()
    const [password, setpassword] = useState()


	

	
	 async function submitHandler(e){
		e.preventDefault();
		alert("form submitted successfully");
		await login();
	}
	async function login(){
		const Data = await fetch.post("",
			{email: email,
			 password: password	,})
	}

    return (
        <>
        <div className='flex justify-center'>
            <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 dark:text-gray-50 dark:bg-gray-950">
	<div className="mb-8 text-center">
		<h1 className="my-3 text-4xl font-bold">Sign in</h1>
		<p className="text-sm dark:text-gray-600">Sign in to access your account</p>
	</div>
	<form 
	method='post'
	onSubmit={submitHandler}
	noValidate="" 
	action="" 
	className="space-y-12">
		<div className="space-y-4">
			<div>
				<label htmlFor="email" className="block mb-2 text-sm">Email address</label>
				<input 
				onChange={(e)=>{setemail(e.target.value)
					console.log("sdsds")
				}}
				type="email" 
				name="email" 
				id="email" 
				placeholder="leroy@jenkins.com" 
				className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
			</div>
			<div>
				<div className="flex justify-between mb-2">
					<label htmlFor="password" className="text-sm">Password</label>
					<a rel="noopener noreferrer" href="#" className="text-xs hover:underline dark:text-gray-600">Forgot password?</a>
				</div>
				<input
				onChange={(e)=>setpassword(e.target.value)} 
				type="password" name="password"
				 id="password" placeholder="*****" 
				 className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
			</div>
		</div>
		<div className="space-y-2">
			<div>
				<button type="Submit" className="w-full px-8 py-3 font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50">Sign in</button>
			</div>
			<p className="px-6 text-sm text-center dark:text-gray-600">Don't have an account yet?
				<a rel="noopener noreferrer" href="#" className="hover:underline dark:text-violet-600">Sign up</a>.
			</p>
		</div>
	</form>
</div>
</div>
        </>
    )
}
