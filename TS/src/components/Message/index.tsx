import { useContext } from 'react';
import MessageContext from '../../contexts/MessageContext';

import { Alert, CloseBtn } from './styles';

function Message() : JSX.Element {
	const { message, setMessage } = useContext(MessageContext);

	return (
		message && (
			<Alert>
				<CloseBtn
					onClick={() => setMessage('')}
					data-testid="message-button-test"
				>
					&times;
				</CloseBtn>
				{message}
			</Alert>
		)
	);
}

export default Message;
