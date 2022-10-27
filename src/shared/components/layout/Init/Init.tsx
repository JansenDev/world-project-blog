import { Outlet } from 'react-router-dom'
import Shared from '@shared/index'

function InitDefault() {
    return (
        <>
            <Shared.Header />
            <main className='bg-white'>
                <section className='w-5/6  xs:w-[300px] sm:w-[404px] md:w-[825px] xl:w-[1170px] mx-auto pb-8 noselect'>
                    <Outlet />
                </section>
            </main>
                <Shared.Footer />
        </>
    )
}

export default InitDefault