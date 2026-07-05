function combineUsers(...userArrays) {
  // Merge all the incoming arrays into one flat array
  const mergedUsers = [].concat(...userArrays);

  // Record the date/time of the merge
  const mergeDate = new Date().toISOString();

  return {
    mergeDate,
    mergedUsers,
  };
}

module.exports = {
  ...(typeof combineUsers !== "undefined" && { combineUsers }),
};
