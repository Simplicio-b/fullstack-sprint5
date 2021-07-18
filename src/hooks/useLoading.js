import { useState } from 'react';

function useLoading() {
	const [liveRequests, setLiveRequests] = useState(0);

	function addRequest() {
		// eslint-disable-next-line no-shadow
		setLiveRequests((liveRequests) => liveRequests + 1);
	}

	function removeRequest() {
		// eslint-disable-next-line no-shadow
		setLiveRequests((liveRequests) => liveRequests - 1);
	}

	function isLoading() {
		return liveRequests > 0;
	}

	return [addRequest, removeRequest, isLoading];
}

export default useLoading;
