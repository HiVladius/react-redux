export const inicialState = {
  status: "checking",
  uid: null,
  displayName: null,
  photoURL: null,
  errorMessage: null,
};

export const authenticatedState = {
  status: "authenticated",
  uid: "123456",
  email: "correo@correo1.com",
  displayName: "Test User",
  photoURL: "https://placeimg.com/100/100/people",
  errorMessage: null,
};

export const notAuthenticatedState = {
  status: "not-authenticated",
  uid: null,
  name: null,
  displayName: null,
  photoURL: null,
  errorMessage: null,
};

export const demoUser = {
    uid: "123456",
    email: "correo@correo1.com",
    displayName: "Test User",
    photoURL: "https://placeimg.com/100/100/people",
};
