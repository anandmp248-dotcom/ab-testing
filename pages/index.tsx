// import { useEffect, useRef, useState } from "react";
// import { EditorView, basicSetup } from "codemirror";
// import { html } from "@codemirror/lang-html";
// import { css } from "@codemirror/lang-css";
// import { oneDark } from "@codemirror/theme-one-dark";
// import styles from "./EditorPage.module.scss";

// import { HTMLHint } from "htmlhint";
// import { CSSLint } from "csslint";

// export default function EditorPage() {
//     const htmlRef = useRef(null);
//     const cssRef = useRef(null);

//     const initailDta = `<!DOCTYPE html>
// <html>
// <head>
//   <title>Page</title>
// </head>
// <body>
//   <h1>Hello</h1>
// </body>
// </html>
// `

//     const [htmlCode, setHtmlCode] = useState(initailDta);
//     const [cssCode, setCssCode] = useState("h1 { color:red }");

//     const [htmlValidation, setHtmlValidation] = useState(null);
//     const [cssValidation, setCssValidation] = useState(null);
//     const [isValidating, setIsValidating] = useState(false);

//     // ✅ VALIDATE BOTH
//     const validateAll = () => {
//         setIsValidating(true);

//         // HTML VALIDATION
//         const htmlMessages = HTMLHint.verify(htmlCode);
//         if (htmlMessages.length === 0) {
//             setHtmlValidation({ valid: true, message: "✓ HTML is valid" });
//         } else {
//             setHtmlValidation({
//                 valid: false,
//                 message: htmlMessages[0].message,
//             });
//         }

//         // CSS VALIDATION
//         const cssResult = CSSLint.verify(cssCode);
//         if (cssResult.messages.length === 0) {
//             setCssValidation({ valid: true, message: "✓ CSS is valid" });
//         } else {
//             setCssValidation({
//                 valid: false,
//                 message: cssResult.messages[0].message,
//             });
//         }

//         setTimeout(() => setIsValidating(false), 300);
//     };

//     // HTML Editor
//     useEffect(() => {
//         const view = new EditorView({
//             doc: htmlCode,
//             extensions: [
//                 basicSetup,
//                 html(),
//                 oneDark,
//                 EditorView.updateListener.of((v) => {
//                     if (v.docChanged) {
//                         setHtmlCode(v.state.doc.toString());
//                         setHtmlValidation(null);
//                     }
//                 }),
//             ],
//             parent: htmlRef.current,
//         });

//         return () => view.destroy();
//     }, []);

//     // CSS Editor
//     useEffect(() => {
//         const view = new EditorView({
//             doc: cssCode,
//             extensions: [
//                 basicSetup,
//                 css(),
//                 oneDark,
//                 EditorView.updateListener.of((v) => {
//                     if (v.docChanged) {
//                         setCssCode(v.state.doc.toString());
//                         setCssValidation(null);
//                     }
//                 }),
//             ],
//             parent: cssRef.current,
//         });

//         return () => view.destroy();
//     }, []);

//     const preview = `
//     <html>
//         <head>
//             <style>${cssCode}</style>
//         </head>
//         <body>
//             ${htmlCode}
//         </body>
//     </html>
//     `;

//     return (
//         <div className={styles.app}>
//             <div className={styles.editorSection}>
//                 <div className={styles.editorHeader}>
//                     <h2 className={styles.title}>CODE EDITOR</h2>
//                     <button
//                         className={`${styles.validButton} ${isValidating ? styles.validating : ''}`}
//                         onClick={validateAll}
//                     >
//                         {/* <span className={styles.buttonIcon}>✓</span> */}
//                         VALIDATE CODE
//                     </button>
//                 </div>

//                 <div className={styles.editorGrid}>
//                     <div className={styles.editorCard}>
//                         <div className={styles.cardHeader}>
//                             <span className={styles.indicator} style={{ background: '#FF6B6B' }}></span>
//                             <h3 className={styles.editorTitle}>HTML</h3>
//                         </div>
//                         <div
//                             ref={htmlRef}
//                             className={styles.editorContainer}
//                         />
//                         {htmlValidation && (
//                             <div className={`${styles.validationMessage} ${htmlValidation.valid ? styles.success : styles.error}`}>
//                                 {/* <span className={styles.messageIcon}>
//                                     {htmlValidation.valid ? '✓' : '⚠'}
//                                 </span> */}
//                                 {htmlValidation.message}
//                             </div>
//                         )}
//                     </div>

//                     <div className={styles.editorCard}>
//                         <div className={styles.cardHeader}>
//                             <span className={styles.indicator} style={{ background: '#4ECDC4' }}></span>
//                             <h3 className={styles.editorTitle}>CSS</h3>
//                         </div>
//                         <div
//                             ref={cssRef}
//                             className={styles.editorContainer}
//                         />
//                         {cssValidation && (
//                             <div className={`${styles.validationMessage} ${cssValidation.valid ? styles.success : styles.error}`}>
//                                 {/* <span className={styles.messageIcon}>
//                                     {cssValidation.valid ? '✓' : '⚠'}
//                                 </span> */}
//                                 {cssValidation.message}
//                             </div>
//                         )}
//                     </div>
//                 </div>
//             </div>

//             <div className={styles.previewSection}>
//                 <div className={styles.previewHeader}>
//                     <div className={styles.previewTitle}>
//                         LIVE PREVIEW
//                     </div>
//                     {/* <span className={styles.previewBadge}>AUTO-UPDATE</span> */}
//                 </div>
//                 <div className={styles.contentSpace}>
//                     <iframe
//                         srcDoc={preview}
//                         className={styles.previewFrame}
//                         title="preview"
//                         sandbox="allow-scripts allow-same-origin"
//                     />
//                 </div>
//             </div>
//         </div>
//     );
// }

import { useEffect, useState } from "react";

export default function Home() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        async function fetchPosts() {
            const res = await fetch("/api/posts", {
                headers: {
                    "Cache-Control": "no-cache",
                },
            });
            const data = await res.json();
            setPosts(data);
        }

        fetchPosts();
    }, []);

    return (
        <div>
            <h1>All Posts</h1>

            {posts.map((post) => (
                <div key={post._id}>
                    <h2>{post.title}</h2>
                    <p>{post.content}</p>
                    <hr />
                </div>
            ))}
        </div>
    );
}