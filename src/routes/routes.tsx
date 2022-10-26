import Page from "@page/index"
import Shared from "@shared/index";
import { Navigate } from "react-router-dom";

export const routes: IRoute[] = [
    {
        path: '',
        element: <Shared.Init />,
        children: [
            {
                index: true,
                element: <Page.Home />,
            },
            {
                path: 'novelas',
                children: [
                    {
                        index: true,
                        element: <Navigate to="activas" />
                    },
                    {
                        path: "activas",
                        element: <Page.NovelActives />
                    }
                ]
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
    element?: JSX.Element,
    caseSensitive?: boolean,
    children?: IRoute[],
    index?: boolean;
}