/** @format */

import { useEffect, useState } from "react";

function WindowLength() {
	const [width, setWidth] = useState(getWindowWidth());

    function getWindowWidth() {
        return window.innerWidth;
    }

	useEffect(() => {
        function handleResize() {
            setWidth(getWindowWidth());
            console.log(getWindowWidth());
        }
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener("resize", handleResize);
    });
    
    // if we don't return callback then it will print twice so we have to remove previous state so we use here useEffect->{variation-4}.

	return (
		<div>
			<h2>{width}</h2>
		</div>
	);
}

export default WindowLength;
