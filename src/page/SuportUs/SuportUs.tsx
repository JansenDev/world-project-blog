import { ICollection, novel_status } from "@data/novelas";
import { meses, suportUs } from "@data/suportUs";
import { INovel, NovelItem, RenderNovelProps } from "@page/NovelActives/NovelActives";

function SuportUs() {
    const status: novel_status = "Apoyanos";

    const suportUsPresentYear = suportUs.filter((novel) => {
        const [novelDay, novelMonth, novelYear] = novel.create_at
            ?.toString()
            .split("-")!;
        const presentYear = new Date().getFullYear().toString();
        return novelYear === presentYear;
    });

    const suportUsSortedDict: any = sortByMonth(suportUsPresentYear);
    const suportUsMonthList =
        Object.keys(suportUsSortedDict).sort(compareNumbers);

    console.log(suportUsMonthList);
    console.log(suportUsSortedDict);

    return (
        <main className="">
            <div className="text-center ">
                <h1 className="text-3xl sm:text-[35px] md:text-[40px] font-medium pb-10 pt-10">
                    <p className="flex justify-center font-elsie ">Apóyanos</p>
                </h1>
                <p className="md:w-[600px] lg:w-[800px] m-auto">
                    En esta sección se subirán novelas que tengan acortadores que sirven
                    para apoyar al grupo tan solo dándole un click en la imagen, por
                    supuesto esto es opcional.
                </p>
            </div>
            <hr className=" sm:border-gray-200 sm:mx-auto dark:border-gray-700 bg-slate-800 w-full my-5 sm:my-10" />

            <section>
                <NovelItemList
                    novelDictionary={suportUsSortedDict}
                    suportUsMonthList={suportUsMonthList}
                    status={status}
                />
                ;
            </section>
        </main>
    );
}

function NovelItemList({ novelDictionary, suportUsMonthList }: any) {
    return (
        <>
            {suportUsMonthList.length &&
                suportUsMonthList.map((month: string, index: number) => {
                    const novelList: ICollection[] = novelDictionary[month];

                    return (
                        <div key={index}>
                            <div className="text-center"> <h1 className="text-xl sm:text-2xl md:text-[30px] capitalize py-1 md:py-5">Estrenos {meses[month as keyof typeof meses].toLowerCase()}</h1></div>
                            <section className="grid  grid-cols-1 xs:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-y-2 sm:gap-y-5  justify-center align-middle overflow-hidden pt-5 md:pt-7 pb-10 md:pb-14" >
                                <RenderNovelItemByMonth novelList={novelList} />
                            </section>
                        </div>
                    );
                })}
        </>
    );
}

const RenderNovelItemByMonth = ({
    novelList,
}: {
    novelList: ICollection[];
}) => {
    return (
        <>
            {novelList.map((novel, index) => {
                return <NovelItem novel={novel} status="Apoyanos" key={index} />;
            })}
        </>
    );
};

export default SuportUs;

const sortByMonth = (novels: ICollection[]) => {
    const novelsSortedDictionary: any = {};
    const isEmpty = !novels.length;

    if (isEmpty) return [];

    novels.map((novel) => {
        const [novelDay, novelMonth, novelYear] = novel.create_at
            ?.toString()
            .split("-")!;
        const includesMonthIntoDictionary =
            novelsSortedDictionary.hasOwnProperty(novelMonth);

        if (!includesMonthIntoDictionary) {
            novelsSortedDictionary[novelMonth] = [{ ...novel }];
        } else {
            novelsSortedDictionary[novelMonth].push({ ...novel });
        }
    });

    return novelsSortedDictionary;
};

function compareNumbers(a: any, b: any) {
    return a - b;
}
