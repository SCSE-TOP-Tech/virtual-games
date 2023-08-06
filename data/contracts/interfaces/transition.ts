interface Transition {
    id: number;
    image: {
        alt: string;
        src: string;
        width: number;
        height: number;
    }
    dialog: string;
}

export type { Transition }