import { Outlet } from 'react-router-dom'
import Shared from '@shared/index'

function InitDefault() {
    return (
        <>
            <header className='m-auto shadow w-full mb-[2px]'>
                <Shared.Header />
            </header>
            <main className='bg-white'>
                <section className='w-5/6 mx-auto pb-8'>
                <Outlet />
                </section>
            </main>
            <footer className='w-full'>
                <hr className=" sm:border-gray-200 sm:mx-auto dark:border-gray-700 bg-slate-800  w-full" />
                <Shared.Footer />
            </footer>
        </>
    )
}

export default InitDefault