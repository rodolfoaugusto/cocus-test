export const timeNow = (): string => {
    const requestedAt = new Date();
    return requestedAt.toISOString();
};

export const triangleRelation = [
    { id: 1, name: 'equilateral' },
    { id: 2, name: 'isosceles' },
    { id: 3, name: 'scalene' },
];
