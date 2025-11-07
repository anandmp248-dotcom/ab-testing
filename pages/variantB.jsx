"use client";
import { useEffect } from "react";
import { pageview, event } from "@/lib/ga";
import styles from "./Variant.module.scss";

export default function VariantB() {
    useEffect(() => {
        pageview("/variantB");
    }, []);

    return (
        <div className={styles.container}>
            <h1>Variant B</h1>
            <p>This is the B version of the landing page.</p>
            <button
                onClick={() => event({ action: "click_button", params: { variant: "B" } })}
            >
                Click Me (B)
            </button>
        </div>
    );
}
