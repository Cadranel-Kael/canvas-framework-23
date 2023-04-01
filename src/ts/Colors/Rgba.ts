import {Rgb} from "./Rgb";

export class Rgba extends Rgb {
    private readonly alpha: number;

    constructor(hue: number, saturation: number, lightness: number, alpha: number = 1) {
        super(hue, saturation, lightness);
        this.alpha = alpha;
    }

    public toString = (): string => {
        return `rgba(${this.red},${this.green},${this.blue}, ${this.alpha})`;
    }
}