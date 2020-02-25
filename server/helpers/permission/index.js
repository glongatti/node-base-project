
export function profilePermissionHelper(profileObj) {
  const retArr = [];
  profileObj.forEach((e) => {
    if (!e.profilePermission[0]) return;
    if (e.profilePermission[0].access === 'S') retArr.push(e.id);
  });
  return retArr;
}
export function accessProfileHelper(profileObject) {
  const profileObj = {};
  profileObject.forEach((e) => {
    if (!e.access[0]) return;
    let stores = e.access[0].advertisersAccess.replace('(', '').replace(')', '').replace(' ', '');
    if (stores !== '') {
      stores = stores.split(',').map(l => parseInt(l, 10));
      const program = {
        C: [],
        R: [],
        U: [],
        D: [],
      };
      if (e.access[0].createAccess === 'S') program.C.push(...stores);
      if (e.access[0].readAccess === 'S') program.R.push(...stores);
      if (e.access[0].updateAccess === 'S') program.U.push(...stores);
      if (e.access[0].deleteAccess === 'S') program.D.push(...stores);
      profileObj[e.programName] = program;
    }
  });
  return profileObj;
}

export function generalParametersHelper(advertiser, general) {
  const flatted = { ...advertiser };
  // const ret = [];
  Object.entries(general).forEach(([key, value]) => {
    if (flatted[key] === undefined || flatted[key] === '') flatted[key] = value;
    if (flatted[key] === 'S') flatted[key] = 1;
    if (flatted[key] === 'N') flatted[key] = 0;
  });
  return flatted;
}
