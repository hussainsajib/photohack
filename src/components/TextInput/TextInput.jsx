import React from "react";
import { InputGroup, FormControl } from "react-bootstrap";

const TextInput = () => {
    return (
        <InputGroup className="mb-3">
            <InputGroup.Prepend>
                <InputGroup.Text>Search Image</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl aria-label="Amount (to the nearest dollar)" />
        </InputGroup>
    );
};

export default TextInput;
