import { useContext } from "react";
import MessageContext from "../../contexts/MessageContext";

import {
    Alert,
    CloseBtn
} from "./styles"

function Message() {
    const { message, setMessage } = useContext(MessageContext);

    return (
        message &&
        <Alert>
            <CloseBtn onClick={() => setMessage("")} >&times;</CloseBtn>
            {message}
        </Alert>
    );
}

export default Message;