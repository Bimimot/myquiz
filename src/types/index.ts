export type TBtn = { color: string; theme: TThemes };

export type TCard = {
    question: string,
    answer: string
}

export type TCards = {
    [key in TThemes]: TCard[]
}

export type TThemes = "html" | "css" | "js" | "react";