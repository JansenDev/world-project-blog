import { Outlet } from 'react-router-dom'
import Shared from '@shared/index'

function InitDefault() {
    return (
        <>
            <Shared.Header />
            <main className='bg-white'>
                <section className='w-5/6  xs:w-[300px] sm:w-[404px] md:w-[825px] xl:w-[1170px] mx-auto pb-8'>
                    <Outlet />
                </section>
            </main>
            {/* <footer className='w-full'>
                <hr className=" sm:border-gray-200 sm:mx-auto dark:border-gray-700 bg-slate-800  w-full" />
            </footer> */}
                <Shared.Footer />
        </>
    )
}

export default InitDefault