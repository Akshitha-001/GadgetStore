
import { Outlet } from 'react-router-dom'

const WebLayout = () => {
    return (
        <>
            <div className=''>
                
                <Outlet />
            </div>
        </>
    )
}

export default WebLayout