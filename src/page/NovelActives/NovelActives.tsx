import { ICollecion, novelas as dataNovels, novel_status, } from '@data/novelas'
interface INovel {
    status: novel_status
}

function NovelActives({ status }: INovel) {
    return (
        <main className=''>
            <div className='text-center pt-6 pb-10 md:pt-10 md:pb-16'>
                {status === "Activo" && (<h1 className=' xs:text-2xl sm:text-3xl  md:text-[40px] font-elsie font-medium'>Proyectos en Curso</h1>)
                }

                {status === "Finalizado" && (<h1 className=' xs:text-2xl sm:text-3xl  md:text-[40px] font-elsie font-medium'>Proyectos Finalizados</h1>)
                }
            </div>
            <section className='grid  grid-cols-1 xs:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-y-2 sm:gap-y-5  justify-center align-middle overflow-hidden'>
                {
                    dataNovels.length && dataNovels.map((novel, index) => {

                        return <RenderNovelFindByStatus novel={novel} status={status} key={index} />
                    })
                }
            </section>
        </main>
    )
}

// shadow-[inset_0_-10px_15px_0_rgba(0,0,0,0.3)] 
// TODO: Si es mejor a 21 cracteres deberia centrar el titulo
function RenderNovelFindByStatus({ novel, status }: RenderNovelProps) {

    return (
        <>
            {(
                status === novel.status && (
                    <div className='flex justify-center relative'>
                        <div className='rounded-md overflow-hidden inline-block shadow-lg bg-center cursor-pointer hover:opacity-80 transition-opacity duration-200 h-full w-[120px] xs:w-[130px] sm:w-[190px] sm:h-[270px]'>
                            <img className='bg-contain bg-center w-full h-full  rounded-md ' src={novel.novels[0].cover_url} alt={novel.novels[0].cover_url} />
                            <div className='absolute bottom-0 w-[120px] xs:w-[130px] sm:w-[190px]  h-1/6 justify-center rounded-md after:rounded-b-md after:absolute after:content-[""] after:bottom-0 after:h-full after:left-0 after:opacity-[1] after:w-full after:bg-gradient-to-t after:from-gray-900 after:to-transparent'>
                                <p className='text-xs mb-1 absolute bottom-0 sm:py-2 sm:text-base  px-4  sm:leading-[1.1] text-center font-semibold h-full w-full text-ellipsis overflow-hidden text-gray-50 z-10 capitalize'>
                                    {novel.title.toLowerCase()}
                                </p>
                            </div>
                        </div>
                        <div className=' absolute top-0  block w-[120px] xs:w-[130px] sm:w-[190px] '>
                            <div className='relative '>
                                <span className='absolute top-1 right-1 flex justify-center items-center w-5 h-5  sm:w-6 sm:h-6 text-[9px] sm:text-xs font-extrabold  sm:font-semibold text-gray-50 rounded-full bg-orange-400 border-[1px]' title='Volúmenes' >{novel.novels.length}</span>
                            </div>
                        </div>
                    </div>
                )
            )
            }
        </>

    )
}

interface RenderNovelProps {
    novel: ICollecion;
    status: novel_status;
}
export default NovelActives