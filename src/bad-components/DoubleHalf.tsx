import React from "react";
import { Button } from "react-bootstrap";
import { useDhValue } from "./DoubleHalfState";

function Doubler({
    setDhValue,
    dhValue,
}: {
    setDhValue: (val: number) => void;
    dhValue: number;
}): React.JSX.Element {
    return <Button onClick={() => setDhValue(2 * dhValue)}>Double</Button>;
}

function Halver({
    setDhValue,
    dhValue,
}: {
    setDhValue: (val: number) => void;
    dhValue: number;
}): React.JSX.Element {
    return <Button onClick={() => setDhValue(0.5 * dhValue)}>Halve</Button>;
}

export function DoubleHalf(): React.JSX.Element {
    const [dhValue, setDhValue] = useDhValue();

    return (
        <div>
            <h3>Double Half</h3>
            <div>
                The current value is: <span>{dhValue}</span>
            </div>
            <Doubler dhValue={dhValue} setDhValue={setDhValue} />
            <Halver dhValue={dhValue} setDhValue={setDhValue} />
        </div>
    );
}
