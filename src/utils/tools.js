export const cnActiveOrPending = (
  className,
  active = "active",
  pending = "pending"
) => {
  return ({ isActive, isPending }) =>
    className + (isPending ? " " + pending : isActive ? " " + active : "");
};
