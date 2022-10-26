import { Link } from 'react-router-dom'

function Header() {
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-700 dark:border-gray-700 py-2 shadow mb-[2px]">
      <section className="flex flex-wrap justify-between items-center w-5/6 md:w-[825px]   xl:w-[1170px]  mx-auto ">
        <Link to="/" className="flex items-center">
          <img src="https://flowbite.com/docs/images/logo.svg" className="pl-2 mr-3 h-6 sm:h-10 w-[31px]  sm:w-[40px] lg:w-[46px]" alt="Flowbite Logo" />
          <span className="text-md self-center sm:text-xl font-semibold whitespace-nowrap dark:text-white font-elsie">World Project</span>
        </Link>
        <button data-collapse-toggle="mobile-menu" type="button" className="inline-flex justify-center items-center ml-3 text-gray-400 rounded-lg md:hidden hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300 dark:text-gray-400 dark:hover:text-white dark:focus:ring-gray-500" aria-controls="mobile-menu-2" aria-expanded="false">
          <span className="sr-only">Open main menu</span>
          <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
        </button>
        <div className=" hidden w-full md:block md:w-auto" id="mobile-menu">
          <ul className=" uppercase flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-700 md:dark:bg-gray-700 dark:border-gray-700">
            <li>
              <Link to="/" className="font-bold hover:text-blue-700 block py-2 pr-4 pl-3 text-white bg-gray-700 rounded md:bg-transparent md:text-gray-700 md:p-0 md:dark:text-white dark:bg-blue-600 md:dark:bg-transparent" aria-current="page">Inicio</Link>
            </li>
            <li>
              <Link to="/novelas/activas" className="font-bold hover:text-blue-700 block py-2 pr-4 pl-3 text-white bg-gray-700 rounded md:bg-transparent md:text-gray-700 md:p-0 md:dark:text-white dark:bg-blue-600 md:dark:bg-transparent " aria-current="page">Novelas activas</Link>
            </li>
            <li>
              <Link to="/" className="font-bold hover:text-blue-700 block py-2 pr-4 pl-3 text-white bg-gray-700 rounded md:bg-transparent md:text-gray-700 md:p-0 md:dark:text-white dark:bg-blue-600 md:dark:bg-transparent" aria-current="page">Novelas Finalizadas</Link>
            </li>
            <li>
              <Link to="/" className="font-bold hover:text-blue-700 block py-2 pr-4 pl-3 text-white bg-gray-700 rounded md:bg-transparent md:text-gray-700 md:p-0 md:dark:text-white dark:bg-blue-600 md:dark:bg-transparent" aria-current="page">Apóyanos</Link>
            </li>
            {/* <li className='relative'> */}
            {/* Button Novelas */}
            {/* <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" className="flex justify-between items-center py-2 pr-4 pl-3 w-full font-medium text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-gray-400 dark:hover:text-white dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">Novelas <svg className="ml-1 w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg></button> */}
            {/* <!-- Dropdown menu --> */}
            {/* <div id="dropdownNavbar" className=" hidden absolute z-10 w-44 font-normal bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600" data-popper-reference-hidden="" data-popper-escaped="" data-popper-placement="bottom" style={{  inset: " 0px auto auto 0px", transform: "translate(0px, 25px)" }}>
                <ul className="py-1 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                  <li>
                    <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Activas</a>
                  </li>
                  <li>
                    <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Finalizadas</a>
                  </li>
                  <li>
                    <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Con Acortadores</a>
                  </li>
                  <li>
                    <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Más</a>
                  </li>
                </ul>
              </div> */}
            {/* </li> */}
            {/* créditos */}
            {/* <li>
              <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Créditos</a>
            </li> */}

          </ul>
        </div>
      </section>
    </nav>


  )
}

export default Header