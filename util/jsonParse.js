export const jsonParse = (json) => {
  try {
    return JSON.parse(json);
  } catch (ex) {
    return {};
  }
};
