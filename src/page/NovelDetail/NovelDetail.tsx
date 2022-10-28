import React from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { ICollection, INovela, novelas as collections } from "@data/novelas";
import {
    cleanWhiteSpacesExtra,
    textUnSerialize,
} from "@shared/utils/utilities";

function NovelDetail() {
    const { name: nameCollection } = useParams();

    const nameCollectionURLUnSerialized = textUnSerialize(nameCollection).trim();

    const collectionFiltered =
        collections.filter((collection) => {
            const nameCollection = cleanWhiteSpacesExtra(
                collection.title.toLowerCase()
            ).trim();
            return nameCollection === nameCollectionURLUnSerialized;
        }) || [];

    if (!collectionFiltered.length) return <Navigate to="/not-found" />;

    const collectionFound = collectionFiltered[0];
    return (
        <section className="mt-10 md:mb-16">
            <div className="capitalize text-center font-semibold text-2xl xs:text-3xl  md:text-[40px] pt-1 pb-5  md:pb-10 font-elsie">
                {collectionFound.title.toLocaleLowerCase()}
            </div>
            <div className="text-xs xs:text-[14px] sm:text-sm  md:text-base w-full   md:w-4/5 text-justify mx-auto mb-12">
                <span className="font-semibold">Sinopsis: </span>
                {collectionFound.synopsis}
            </div>
            <DetailVolumes collectionFound={collectionFound} />
        </section>
    );
}

function DetailVolumes({ collectionFound }: { collectionFound: ICollection }) {
    return (
        <div className="grid xs:grid-cols-2 gap-y-5 xs:gap-y-[22px]  md:grid-cols-3 md:gap-y-[30px]   xl:grid-cols-4 xl:gap-y-11  w-full md:w-4/5 text-justify mx-auto">
            {collectionFound.novels.length &&
                collectionFound.novels.map((novel, index) => {
                    return (
                        <VolumeItem
                            key={index}
                            novel={novel}
                            collection={collectionFound}
                        />
                    );
                })}
        </div>
    );
}

function VolumeItem({
    novel,
    collection,
}: {
    novel: INovela;
    collection: ICollection;
}) {
    const { title = "" } = collection;

    return (
        <div
  
            className="flex justify-center relative"
        >
            <div className="rounded-md overflow-hidden inline-block shadow-lg bg-center cursor-pointer hover:opacity-95 transition-opacity duration-200 h-full w-[120px] xs:w-[130px] sm:w-[180px] sm:h-[270px]  md:w-[190px] ">
                <img
                    className="bg-contain bg-center w-full h-full  rounded-md "
                    src={novel.cover_url}
                />
                <div className='absolute bottom-0 w-[120px] xs:w-[130px] sm:w-[180px] md:w-[190px]  h-1/6 justify-center rounded-md after:rounded-b-md after:absolute after:content-[""] after:bottom-0 after:h-full after:left-0 after:opacity-[.8] after:w-full after:bg-gradient-to-t after:from-gray-900 after:to-transparent'>
                    <div className="text-xs  absolute bottom-0  sm:text-base   sm:leading-[1.1] text-center font-semibold h-full w-full text-ellipsis overflow-hidden text-gray-50 z-10 capitalize">
                        <div className="flex h-full justify-around">
                            <a
                                href={novel.download_pdf_url}
                                target="__blank"
                                className="m-auto hover:text-red-300"
                            >
                                {" "}
                                Descargar
                            </a>
                            <a
                                href={novel.read_online_url}
                                target="__blank"
                                className="m-auto hover:text-yellow-400"
                            >
                                Leer
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" absolute top-0  block w-[120px] xs:w-[130px] sm:w-[180px] ">
                <div className="relative ">
                    <span
                        className="absolute top-1 right-1 flex justify-center items-center w-5 h-5  sm:w-6 sm:h-6 text-[9px] sm:text-xs font-extrabold  sm:font-semibold text-gray-50 rounded-full bg-orange-400 border-[1px]"
                        title="Volúmenes"
                    >
                        {novel.volume_number}
                    </span>
                </div>
            </div>
        </div>
    );
}
export default NovelDetail;
