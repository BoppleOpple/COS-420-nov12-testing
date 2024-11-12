import React, { useState } from "react";
import { Button } from "react-bootstrap";

function veryHelpful(): void {
    let a: number = 5;
    a += 5;
    console.log(a);
    return;
}

export function RevealAnswer(): React.JSX.Element {
    const [answerVisible, setanswerVisible] = useState<boolean>(false);
    const [answerHintVisible, setanswerHintVisible] = useState<boolean>(false);

    function toggleVisibility() {
        if (answerVisible) {
            setanswerVisible(false);
        } else {
            setanswerVisible(true);
        }
    }

    return (
        <div>
            Answer: {answerVisible && 42}
            <span>
                <Button onClick={toggleVisibility}>
                    Toggle Answer Visibility
                </Button>
            </span>
            {answerHintVisible ? "here is the hint" : ""}
        </div>
    );
}
