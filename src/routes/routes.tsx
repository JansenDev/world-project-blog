import Page from "@page/index"

export const routes: IRoute[] = [
    {
        path: '',
        element: <Page.Home />,
    },
    {
        path: '*',
        element: <div>Not found </div>
    }

]

export interface IRoute {
    path?: string
    element: JSX.Element,
    caseSensitive?: boolean,
    children?: IRoute[],
    index?: boolean;
}