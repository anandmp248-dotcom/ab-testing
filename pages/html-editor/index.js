import { useEffect, useRef, useState } from "react";
import { EditorView, basicSetup } from "codemirror";
import { html } from "@codemirror/lang-html";
import { css } from "@codemirror/lang-css";
import { oneDark } from "@codemirror/theme-one-dark";
import styles from './EditorPage.module.scss'

export default function EditorPage() {
    const htmlRef = useRef(null);
    const cssRef = useRef(null);

    const [htmlCode, setHtmlCode] = useState("<h1>Hello World</h1>");
    const [cssCode, setCssCode] = useState("h1 { color:red }");


    // HTML Editor
    useEffect(() => {
        const view = new EditorView({
            doc: htmlCode,
            extensions: [
                basicSetup,
                html(),
                oneDark,
                EditorView.updateListener.of((v) => {
                    if (v.docChanged) {
                        setHtmlCode(v.state.doc.toString());
                    }
                }),
            ],
            parent: htmlRef.current,
        });

        return () => view.destroy();
    }, []);

    // CSS Editor
    useEffect(() => {
        const view = new EditorView({
            doc: cssCode,
            extensions: [
                basicSetup,
                css(),
                oneDark,
                EditorView.updateListener.of((v) => {
                    if (v.docChanged) {
                        setCssCode(v.state.doc.toString());
                    }
                }),
            ],
            parent: cssRef.current,
        });

        return () => view.destroy();
    }, []);

    const preview = `
    <html>
      <head>
        <style>${cssCode}</style>
      </head>
      <body>
        ${htmlCode}
      </body>
    </html>
  `;

    console.log("preview", preview)


    return (
        <div style={{ display: "flex", height: "100vh" }}>

            {/* LEFT SIDE EDITORS */}
            <div style={{ width: "50%", padding: 10 }}>
                <h3>HTML</h3>
                <div ref={htmlRef} style={{ height: "45%", border: "1px solid #333", maxHeight: "500px" }} />

                <h3>CSS</h3>
                <div ref={cssRef} style={{ height: "45%", border: "1px solid #333", maxHeight: "500px" }} />
            </div>
            <div className={styles.contentSpace}>
                <iframe
                    srcDoc={preview}
                    style={{ width: "100%",height:"100%", border: "none", background: "white" }}
                    title="preview"
                />
            </div>
        </div>
    );
}
