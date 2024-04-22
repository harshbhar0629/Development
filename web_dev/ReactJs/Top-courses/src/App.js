/** @format */

import React, { useEffect, useState } from "react";
import Navbar from "./component/Navbar";
import Filter from "./component/Filter";
import Cards from "./component/Cards";
import { apiUrl, filterData } from "./data";

const App = () => {

	const [courses, setCourses] = useState("")
	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await fetch(apiUrl);
				const output = res.json();
				setCourses(output.data);
			}
			catch (err) {
				console.error("Something went wrong");
			}
		}
		fetchData();
	},[])

	return (
		<div className="wrapper">
			<Navbar></Navbar>
			<Filter filterData={filterData}></Filter>
			<Cards></Cards>
		</div>
	);
};

export default App;
