const parseError = (err) => {
  if (err?.response?.data?.errors) {
    const message = Object.values(err.response.data.errors)[0];
    return message;
  } else if (err?.response?.data?.error?.message) {
    return err.response.data.error.message;
  } else if (err?.response?.data?.message) {
    return err.response.data.message;
  } else if (err?.response?.data) {
    return err.response.data;
  } else if (err.message) {
    return err.message;
  } else {
    return "Error Occured";
  }
};

export default parseError;
