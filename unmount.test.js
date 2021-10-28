import React, { useEffect } from "react";
import { create } from "react-test-renderer";

const Boom = () => {
    useEffect(() => {
        return () => {
            throw new Error("Boom");
        };
    }, []);

    return null;
};

it("prints an error to the console on next is fine on latest", () => {
    const res = create(<Boom />);
    res.unmount();    
});