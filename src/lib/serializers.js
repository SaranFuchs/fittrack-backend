export function serializeUser(user) {
  return {
    id: user._id.toString(),
    name: user.name,
    email: user.email,
    role: user.role,
  };
}

export function plainDocument(document) {
  if (!document) return document;
  return typeof document.toObject === "function" ? document.toObject() : document;
}
