export type TBtn = {
    color: string;
    theme: string,
    count: number
}

export type TCard = {
    question: string,
    answer: string,
    tags: string[]
}

export type TCardProps = TCard & {
    color: string
}

export type TCards = {
    [key in string]: TCard[]
}


export type TTag = {
    text: string,
    color: string
}