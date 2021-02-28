class Density {
    constructor(title, backgroundColor, textColor, isFor) {
        this.title = title;
        this.backgroundColor = backgroundColor;
        this.textColor = textColor;
        this.isFor = isFor
    }
}

const Densities = [
    new Density("> 4,000,000", "#b30f00", "white", (cases) => cases > 4_000_000),
    new Density("2,000,000 - 4,000,000", "#b36200", "white", (cases) => cases <= 4_000_000 && cases > 2_000_000),
    new Density("1,000,000 - 2,000,000", "#b39200", "white", (cases) => cases <= 2_000_000 && cases > 1_000_000),
    new Density("500,000 - 1,000,000", "#adb300", "white", (cases) => cases <= 1_000_000 && cases > 500_000),
    new Density("0 - 500,000", "#27b300", "white", (cases) => cases <= 500_000)
];

export default Densities;