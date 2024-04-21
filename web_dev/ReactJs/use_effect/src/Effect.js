/** @format */

import { useState } from "react";
import { useEffect } from "react";
import React from "react";

function Effect() {
	const [text, setText] = useState("");
	const [cnt, setCnt] = useState(0);
	let [wdow, setWindow] = useState(Window.length);

	//in this case it execute again and again when any change is done in our UI {varation-1}
	// useEffect(() => {
	//   console.log("UI is rendring:");
	// });

	// {variation-2} -> it render only one time when the rendering occur first time
	// useEffect(() => {
	// 	console.log("Rendering:");
	// }, []); // empty array represent dependencies

	// {variation-3} -> it render only one time when the rendering occur first time + whenever any change in their dependency
	// useEffect(() => {
	// 	console.log("Rendering:");
	// }, [text]);

	// {variation->4} in this case we r handling unamount of components
	useEffect(() => {

	  //add event listener if we change in our UI then previous add event listener will be removed..? how is it possible let see..
	  console.log("Listener added:", cnt);
	  return () => {
	    console.log("Previous listener removed", cnt);
	  }
	});
	// in this effect cnt will help you to see how previous listener will be removed:)
	// like it just cleaning the event

	function inputHandler(event) {
		setCnt(cnt + 1);
		console.log(event.target.value);
		setText(event.target.value);
	}

	return (
		<div>
			<input
				type="text"
				onChange={inputHandler}></input>
			<h2>This is a current text: {text}</h2>
		</div>
	);
}

export default Effect;
