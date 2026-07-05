function combineUsers(...userArrays) {
  const allUsers = [].concat(...userArrays);
  const mergeDate = new Date().toISOString();

  return {
    mergeDate,
    users: allUsers
  };
}

module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};