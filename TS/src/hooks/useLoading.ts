import { useState } from 'react';

function useLoading() {
	const [liveRequests, setLiveRequests] = useState(0);

	function addRequest() : void {
		// eslint-disable-next-line no-shadow
		setLiveRequests((liveRequests : number) => liveRequests + 1);
	}

	function removeRequest() : void {
		// eslint-disable-next-line no-shadow
		setLiveRequests((liveRequests : number) => liveRequests - 1);
	}

	function isLoading() : boolean {
		return liveRequests > 0;
	}

	return [addRequest, removeRequest, isLoading];
}

export default useLoading;
