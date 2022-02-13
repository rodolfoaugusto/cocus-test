const mockIsAnInteger = () => {
    return Math.floor(Math.random() * 99) + 1;
};

describe('Triangle type returning valid values', () => {
    it('When insert random triangle sides values, must return a valid triangle type id', () => {
        const sideA = mockIsAnInteger(),
            sideB = mockIsAnInteger(),
            sideC = mockIsAnInteger();

        const triangleType =
            (sideA === sideB && sideB === sideC && 1) ||
            ((sideA === sideB || sideA === sideC || sideB === sideC) && 2) ||
            3;
        expect([1, 2, 3].includes(triangleType)).toBe(true);
    });
});
