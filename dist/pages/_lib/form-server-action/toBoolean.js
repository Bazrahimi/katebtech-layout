export const toBoolean = (raw) => {
    return (raw === true || raw === "true" || raw === 1 || raw === "1" || raw === "on");
};
