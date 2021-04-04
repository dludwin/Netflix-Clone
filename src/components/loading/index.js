import React from 'react';
import { LockBody, ReleaseBody, Spinner, Picture } from './styles/loading'; // Spinner and LockBody are interesting

export default function Loading({ src, ...restProps }) {
	return (
		<Spinner {...restProps}>
			<LockBody /> {/* no scrolling */}
			<Picture src={`/images/users/${src}.png`} />
		</Spinner>
	);
}

Loading.ReleaseBody = function LoadingReleaseBody() {
	// put background to normal
	return <ReleaseBody />;
};
