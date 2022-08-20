export type TBtn = { color: string; theme: TThemes, count: number };

export type TCard = {
    question: string,
    answer: string,
    tags: string[]
}

export type TCards = {
    [key in TThemes]: TCard[]
}

export type TThemes = "html" | "css" | "js" | "ts" | "react";

export type TCardProps = { color: string; item: TCard }

export type TTag = {
    text: string,
    color: string
}