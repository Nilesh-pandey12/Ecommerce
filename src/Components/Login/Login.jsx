import loginCart from '../Assets/loginCart.png'
import google from '../Assets/google.png'
import loginbg from '../Assets/loginbg.jpeg'

import * as React from 'react'

const Login = () =>{
    return (
        // main body background grey
        <div className='mx-20 rounded-sm border-solid border-2 border-slate-300 bg-slate-300 bg-auto'> 
            {/* //body inside bg white */}
           <div className='m-12 rounded-lg bg-slate-50'>
           <div className='flex'>
                <div>
                    <div className='flex'>
                    <img src={loginCart} alt='icon' className='w-12'></img>
                    <h1 className='my-3'>Ecommerce</h1>
                    </div>
                </div>
                
                    <div className='my-8 ml-0'>
                        <h4 className='text-3xl mb-2 mt-14'>Welcome Back</h4>
                        <h1 className='text-xl mb-2'>Continue with Google or enter your details.</h1>
                        <button className='flex rounded-lg border-solid border-2 w-full border-slate-600 '><img src={google} className='h-8 mx-6'></img> <p className='my-1 mx-1'>Log in with Google</p></button>
                        <h1 className=''>or</h1>
                        <label>
                            <input type='text' className='w-full  mb-2 border-b-2 shadow-slate-900 shadow-2xl placeholder:text-slate-900' placeholder='Email'/> 
                        </label>
                        <label>
                            <input type='text' className='w-full mb-2 border-b-2 shadow-slate-900 shadow-2xl placeholder:text-slate-900' placeholder='Password'/> 
                        </label>
                        <label className='flex'>
                            <input type="checkbox"/>
                            <h1 className='ml-1 '>Remember me</h1>
                        </label>    
                        <button className='rounded-lg border-solid border-2 w-full border-slate-900 mb-2 bg-slate-900 text-slate-50'>Login</button>

                        <h2>Don't have an account? <a className='font-semibold'>Sign up for free</a></h2>
                    </div>
                    <div className='ml-16 '>
                        <img src={loginbg} className='h-full rounded-l-full'></img>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;