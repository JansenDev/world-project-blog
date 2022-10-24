import Page from "@page/index"
import Shared from "@shared/index";

export const routes: IRoute[] = [
    {
        path: '',
        element: <Shared.Init />,
        children: [
            {
                index: true,
                element: <Page.Home />,
            }
        ]
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