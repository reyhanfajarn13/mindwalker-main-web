export const apiResponse = <T>(data: T, message = "OK") => ({
  success: true,
  message,
  data
});
