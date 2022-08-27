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

export type TCards = {
    [key in string]: TCard[]
}


export type TCardProps = {
    color: string;
    item: TCard
}

export type TTag = {
    text: string,
    color: string
}