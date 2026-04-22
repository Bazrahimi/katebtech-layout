export const toBoolean = (raw: unknown): boolean => {
  return (
    raw === true || raw === "true" || raw === 1 || raw === "1" || raw === "on"
  );
};
