function combineUsers(...userArrays) {
  const allUsers = [].concat(...userArrays);
  const mergeDate = new Date().toISOString();

  return {
    mergeDate,
  }
}

module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};