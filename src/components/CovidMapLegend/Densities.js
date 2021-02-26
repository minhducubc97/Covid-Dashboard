class Density {
    constructor(title, backgroundColor, textColor) {
        this.title = title;
        this.backgroundColor = backgroundColor;
        this.textColor = textColor;
    }
}

const Densities = [
    new Density("> 4,000,000", "#b30f00", "white"),
    new Density("2,000,000 - 4,000,000", "#b33c00", "white"),
    new Density("1,000,000 - 2,000,000", "#b36500", "black"),
    new Density("500,000 - 1,000,000", "#b3a100", "black"),
    new Density("0 - 500,000", "#b36500", "#27b300")
];

export default Densities;