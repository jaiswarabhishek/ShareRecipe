import React from "react"

interface Props {
    text: string
    keywords: string[]
}

const KeywordsBold: React.FC<Props> = ({ text, keywords }) => {
    const highlightKeywords = (text: string, keywords: string[]) => {
        return text.replace(new RegExp(`(${keywords.join("|")})`, "gi"), '<span class="font-bold text-gray-900 ">$1</span>')
    }

    return <p className="!font-[Lato] text-base	 sm:text-lg sm:leading-loose leading-loose" dangerouslySetInnerHTML={{ __html: highlightKeywords(text, keywords) }} />
}

export default KeywordsBold
