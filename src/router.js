import {createBrowserRouter, Navigate} from "react-router-dom";
import {TodosPage} from "./pages/TodosPage";
import {MainLayout} from "./layouts/MainLayout";
import {AlbumsPage} from "./pages/AlbumsPage"
import {ErrorPage} from "./pages/ErrorPage";
import {CommentsPage} from "./pages/CommentsPage";
import {Albums} from "./components/albumsContainer/albums";
import {PostsPage} from "./pages/PostsPage";
import {Posts} from "./components/postsContainer/posts";

const router = createBrowserRouter([
    {
        path:'', element:<MainLayout/>,errorElement:<ErrorPage/>, children:[
            {
                path:'todos', element:<TodosPage/>

            },
            {
                path:'comments', element:<CommentsPage/>, children:[
                    {
                        path:'posts', element:<PostsPage/>
                    }
                ]
            },
            {
                path:'albums', element:<AlbumsPage/>
            }
        ]
    }
])


export {
    router
}