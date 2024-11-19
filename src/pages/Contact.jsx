import { NavLink, useNavigate } from "react-router-dom"
import { Cross, User, X } from 'lucide-react'
import { useRef, useState } from "react"
import { Login, Register } from "../api/api"
import { getRole, storeToken } from "../service/auth"
import { toast } from "sonner"

const Navbar = () => {
    const [showLogin, setShowLogin] = useState(false)
    const [showRegister, setShowRegister] = useState(false)
    const emailRef = useRef('')
    const passwordRef = useRef('')
    const nameRef = useRef('')
    const phoneRef = useRef('')
    const navigate = useNavigate()
    const Linksdata = [
        {
            title: 'Home',
            path: '/'
        },
        {
            title: 'Products',
            path: '/products'
        },
        {
            title: 'Contact',
            path: '/contact'
        }
    ]
    const handleLogin = async (e) => {
        e.preventDefault()
        const credentials = {
            email: emailRef.current.value,
            password: passwordRef.current.value
        }
        try {
            const response = await Login(credentials)
            const data = await JSON.stringify(response.data)
            if (response.status === 200) {
                const token = response.data.token
                // console.log(response.data.token)
                toast.success("Login Success")
                setShowLogin(false)
                storeToken(token)
                if (token) {
                    const role = getRole()
                    if (role === "ADMIN") {
                        //navigate to dashboard
                        navigate('/admin/dashboard')
                    } else if (role === "USER") {
                        //navigate to products
                        navigate('/products')
                    }
                }
            } else {
                console.log("Login Error" + data)
            }

        } catch (error) {
            if (error.response && (error.response.status === 401 || error.response.status === 400)) {
                toast.warning(error.response.data.message)
            } else {
                toast.error("Server Error")
            }
        }

        console.log(credentials)
    }

    const handleRegister = async (e) => {
        e.preventDefault()
        const credentials = {
            name: nameRef.current.value,
            phone: phoneRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value

        }
        try {
            const response = await Register(credentials)
            const data = await JSON.stringify(response.data)
            if (response.status === 200) {
                console.log("Signup Success" + data)
                toast.success("Signup Success")
                setShowRegister(false)
                setShowLogin(true)
            }
            else {
                toast.error("Error while signup")
            }

        } catch (error) {
            // console.error(error)
            if (error.response && (error.response.status === 409 || error.response && error.response.status === 400)) {
                toast.warning(error.response.data.message)
            } else {
                toast.error("Server Error")
            }
        }

        console.log(credentials)
    }
    const switchAuth = () => {
        if (showLogin) {
            setShowLogin(false)
            setShowRegister(true)
        } else if (showRegister) {
            setShowLogin(true)
            setShowRegister(false)
        }
    }
    return (
        <>
<nav className= 'bg-white border-gray-200 dark:bg-gray-90'>
    
<div className='w-screen h-14 shadow-pink-500 shadow-md flex flex-row justify-center items-center'>
                <div className='w-[40%] flex justify-start items-center font-bold text-2xl text-pink-500'>
                    Gadget Store
                </div>
                <div class="flex items-center space-x-6 rtl:space-x-reverse justify-end">
            <a href="tel:5541251234" class="text-sm  text-blue-500 dark:text-white hover:underline">(555) 412-1234</a>
             <button className="h-9 w-10 flex justify-center items-center border-2 border-black rounded-full hover:border-pink-500 hover:text-pink-500 ml-4 shadow-md" onClick={() => { setShowLogin(!showLogin) }}>
                        <User className="h-6 w-6" />
                    </button>
        </div>
        </div>
</nav>

<nav>
                <div className='w-[40%] h-full flex justify-end items-center'>
                    <div className='w-full h-full flex flex-row justify-end items-center gap-8 font-bold'>
                        {Linksdata.map((link, index) => (
                            <NavLink to={link.path} key={index} className='h-[65%] w-20 hover:bg-pink-500 hover:text-white flex justify-center items-center rounded-sm'>
                                {link.title}
                            </NavLink>
                        ))
                        }
                    </div>
                    
                </div>
                    
</nav>



{showLogin && (
                <div className="absolute top-0 left-0 z-50 h-screen w-screen flex justify-center items-center bg-black/40 ">
                    <div className='h-[45%] w-1/3 flex flex-col justify-center items-center bg-white shadow-2xl rounded-md'>
                        <div className='h-full w-full flex flex-col justify-center items-center text-lg font-semibold'>
                            <div className="h-[20%] w-[80%] flex flex-row justify-center items-center">
                                <h1 className='w-1/2 text-left text-xl my-6 font-bold text-pink-500'>Login</h1>
                                <div className="w-1/2 flex justify-end items-center text-red-500 cursor-pointer" onClick={() => { setShowLogin(!showLogin) }}>
                                    <X className="h-8 w-8 border-2 p-1  border-red-500 rounded-full  hover:bg-red-500 hover:text-white" />
                                </div>
                            </div>
                            <form className='h-[70%] w-[80%] flex flex-col justify-center items-center gap-8' onSubmit={handleLogin}>
                                <input ref={emailRef} type="email" name="" id="email" placeholder='Email' className='w-full shadow-sm outline-none bg-[#f5f5f7] border-b-2 border-transparent p-4 focus:shadow-lg focus:border-b-2 focus:border-purple-400 rounded-sm' required />
                                <input ref={passwordRef} type="password" name="" id="password" placeholder='Password' className='w-full shadow-sm outline-none bg-[#f5f5f7] border-b-2 border-transparent p-4 focus:shadow-lg focus:border-b-2 focus:border-purple-400 rounded-sm' required />
                                <button type="submit" className="w-full h-[3rem]  shadow-lg shadow-gray-400 hover:shadow-pink-400 bg-pink-500 text-white rounded-sm outline-none">Login</button>
                            </form>
                            <div className="h-[10%] w-[80%] flex justify-center items-start">
                                <p className="cursor-pointer text-pink-500 hover:text-pink-600" onClick={switchAuth}>Register ?</p>
                            </div>
                        </div>
                    </div>
                </div>
            )
            }
            {showRegister && (
                <div className="absolute top-0 left-0 z-50 h-screen w-screen flex justify-center items-center bg-black/40 ">
                    <div className='h-[65%] w-1/3 flex flex-col justify-center items-center bg-white shadow-2xl rounded-md'>
                        <div className='h-full w-full flex flex-col justify-center items-center text-lg font-semibold'>
                            <div className="h-[20%] w-[80%] flex flex-row justify-center items-center">
                                <h1 className='w-1/2 text-left text-xl my-6 font-bold text-pink-500'>Register</h1>
                                <div className="w-1/2 flex justify-end items-center text-red-500 cursor-pointer" onClick={() => { setShowRegister(!showRegister) }}>
                                    <X className="h-8 w-8 border-2 p-1  border-red-500 rounded-full  hover:bg-red-500 hover:text-white" />
                                </div>
                            </div>
                            <form className='h-[70%] w-[80%] flex flex-col justify-center items-center gap-8' onSubmit={handleRegister}>
                                <input ref={nameRef} type="text" name="" id="name" placeholder='Name' className='w-full shadow-sm outline-none bg-[#f5f5f7] border-b-2 border-transparent p-4 focus:shadow-lg focus:border-b-2 focus:border-purple-400 rounded-sm' required />
                                <input ref={emailRef} type="email" name="" id="email" placeholder='Email' className='w-full shadow-sm outline-none bg-[#f5f5f7] border-b-2 border-transparent p-4 focus:shadow-lg focus:border-b-2 focus:border-purple-400 rounded-sm' required />
                                <input ref={passwordRef} type="password" name="" id="password" placeholder='Password' className='w-full shadow-sm outline-none bg-[#f5f5f7] border-b-2 border-transparent p-4 focus:shadow-lg focus:border-b-2 focus:border-purple-400 rounded-sm' required />
                                <input ref={phoneRef} type="number" name="" id="phone" placeholder='Phone' className='w-full shadow-sm outline-none bg-[#f5f5f7] border-b-2 border-transparent p-4 focus:shadow-lg focus:border-b-2 focus:border-purple-400 rounded-sm' required />
                                <button type="submit" className="w-full h-[3rem] shadow-lg shadow-gray-400 hover:shadow-purple-400 bg-pink-500 text-white rounded-sm outline-none">Register</button>
                            </form>
                            <div className="h-[10%] w-[80%] flex justify-center items-start">
                                <p className="cursor-pointer text-pink-500 hover:text-pink-600" onClick={switchAuth}>Login ?</p>
                            </div>
                        </div>
                    </div>
                </div>
            )
            }
            




</>
    )
}

export default Navbar

                        
                       


