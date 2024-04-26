/** @format */

import React, { useEffect, useState } from "react";
import Navbar from "./component/Navbar";
import Filter from "./component/Filter";
import Cards from "./component/Cards";
import { apiUrl, filterData } from "./data";
// import {toast} from "react-toastify"

const App = () => {

	const [courses, setCourses] = useState("")
	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await fetch(apiUrl);
				const output = await res.json();
				setCourses(output.data);
				console.log(output.data);
			}
			catch (err) {
				// toast.error("something went wrong");
				console.error("Something went wrong");
			}
		}
		fetchData();
	},[])

	return (
		<div className="wrapper">
			<Navbar></Navbar>
			<Filter filterData={filterData}></Filter>
			<Cards courses={courses}></Cards>
		</div>
	);
};

export default App;
