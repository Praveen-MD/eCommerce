import React from "react";
import axios from "axios";
const API = "https://fakestoreapi.com";

function Getproduct(path, method) {
	const [response, setResponse] = React.useState(null);
	const [loading, setLoading] = React.useState(true);
	const LINK = API + path;
	//console.log(path);
	React.useEffect(() => {
		axios(LINK, {
			method,
			//...(body ? { body } : {}),
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
		})
			.then((response) => {
				console.log(response);
				//	if (!signal.aborted) {
				setResponse(response.data);
				setLoading(false);
				//	}
			})
			.catch((error) => console.warn("Something gone wrong", error));

		//return () => abortController.abort();
	}, [path, method]);
	return { response, loading };
	return <div></div>;
}

export default Getproduct;
