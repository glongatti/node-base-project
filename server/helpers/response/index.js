
function success(data) {
  if (data) {
    return {
      success: true,
      data,
    };
  }
  return { success: true };
}

export default { success };
