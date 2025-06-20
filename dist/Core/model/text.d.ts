export interface Text {
    text: string;
}
export declare const Text: {
    isText(value: any): value is Text;
    create(text: string): Text;
};
