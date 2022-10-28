import Page from "..";

function NovelFinished() {
    return (
        <div className="h-[calc(100%-219px)] xs:h-[calc(100vh-219px)]md:h-[calc(100%-219px)] lg:h-[calc(100vh-227px)]">
            <Page.NovelActives status="Finalizado" />
        </div>
    );
}

export default NovelFinished;
