import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../../action/CounterAction";
import { Button } from "@mui/material";

const Counter = () => {
    const dispatch = useDispatch();
    const count = useSelector((state) => state.counter);

    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "1rem",
                minHeight: "100vh"
        }}>
            <Button
                onClick={() => dispatch(increment())}
                variant="contained"
                size="large"
            >
                +
            </Button>
            <span
                style={{ fontSize: "2rem" }}
            >
                {count}
            </span>
            <Button
                onClick={() => dispatch(decrement())}
                variant="contained"
                size="large"
            >
                -
            </Button>
        </div>
    );
};

export default Counter;