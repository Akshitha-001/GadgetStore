import { NavLink } from "react-router-dom"

const Navbar = () => {
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
    return (
        <>
<nav className= 'bg-white border-gray-200 dark:bg-gray-90'>
    
<div className='w-screen h-14 shadow-pink-500 shadow-md flex flex-row justify-center items-center'>
                <div className='w-[40%] flex justify-start items-center font-bold text-2xl text-pink-500'>
                    Gadget Store
                </div>
                <div class="flex items-center space-x-6 rtl:space-x-reverse justify-end">
            <a href="tel:5541251234" class="text-sm  text-blue-500 dark:text-white hover:underline">(555) 412-1234</a>
            <a href="#" class="text-sm  text-blue-600 dark:text-blue-500 hover:underline">Login</a>
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
            




</>
    )
}

export default Navbar

                        
                       


