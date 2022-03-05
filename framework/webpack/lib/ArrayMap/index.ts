function arrayMap<T>(
  array: T[],
  callback: (item: T, index: number, array: T[]) => T
): T[] {
  const len = array.length;
  let i = -1;
  const resp = [] as T[];
  while (++i < len) {
    resp.push(callback(array[i], i, array));
  }
  return resp;
}

export = arrayMap;
