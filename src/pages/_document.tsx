import { Html, Head, Main, NextScript } from "next/document"

export default function Document() {
    return (
        <Html lang="en">
            <Head />

            <body className="w-full dark:bg-black bg-[#f5f5f5]  dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2] relative ">
                <Main />

                <NextScript />
            </body>
        </Html>
    )
}
