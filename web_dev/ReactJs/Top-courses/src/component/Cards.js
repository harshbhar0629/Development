/** @format */

import React from "react";
import Card from "./Card";

function Cards({ courses }) {
	let allCourses = [];
	const getCourses = () => {
		Object.values(courses).forEach((courseCategory) => {
			courseCategory.forEach((data) => {
				allCourses.push(data);
			});
		});
		return allCourses;
	};

	return (
		<div>
			{getCourses().map((course) => {
				<Card course={course}></Card>;
			})}
		</div>
	);
}

export default Cards;
