"use client";
import { useEffect } from "react";
import { pageview, event } from "@/lib/ga";
import styles from "./Variant.module.scss";

export default function VariantA() {
    useEffect(() => {
        pageview("/variantA");
    }, []);

    return (
        <div className={styles.container}>
            <h1>Variant A</h1>
            <p>This is the A version of the landing page.</p>
            <button
                onClick={() => event({ action: "click_button", params: { variant: "A" } })}
            >
                Click Me (A)
            </button>
        </div>
    );
}
