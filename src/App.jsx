import React from "react";
import Navbar from "./components/Navbar";
import { createBrowserRouter, RouterProvider} from "react-router";
import HomeLayout from "./pages/HomeLayout";

const router = createBrowserRouter([
	{
		path: "/",
		element: <HomeLayout />,
	},
	{
		path: "/project/:id",
		element: <HomeLayout />,
	},
]);
const App = () => {
	return (
		<RouterProvider router={router}>
		</RouterProvider>
	);
};
export default App;
