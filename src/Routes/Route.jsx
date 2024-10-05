import {
    createBrowserRouter,
} from "react-router-dom";
import Home from "../Pages/Home";
import ListedBooks from "../Pages/ListedBooks";
import PagesRead from "../Pages/PagesRead";
import MainLayout from "../Layout/MainLayout";
import BookDetails from "../Components/BookDetails";
import ReadBooks from "../Components/ReadBooks";
import Wishlist from "../Components/Wishlist";
import ErrorElement from "../Components/ErrorElement";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement:<ErrorElement></ErrorElement>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader:()=>fetch('books.JSON')
            },
            {
                path: '/listedBooks',
                element:<ListedBooks></ListedBooks>,
                children:[
                    {
                        index:true,
                        element:<ReadBooks></ReadBooks>
                    },
                    {
                        path:'wishlist',
                        element:<Wishlist></Wishlist>

                    }
                ]
            },
            {
                path: '/pagesRead',
                element:<PagesRead></PagesRead>
            },
            {
                path:'/bookDetails/:id',
                element:<BookDetails></BookDetails>,
                loader:()=>fetch('books.JSON')
            }

        ]
    },
]);
