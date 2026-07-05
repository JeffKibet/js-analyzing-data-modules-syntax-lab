function combineUsers(...userArrays) {
  const users = [].concat(...userArrays);

  const today = new Date();
  const merge_date = `${today.getMonth() + 1}/${today.getDate()}/${today.getFullYear()}`;

  return {
    merge_date,
    users,
  };
}

module.exports = {
  ...(typeof combineUsers !== "undefined" && { combineUsers }),
};
