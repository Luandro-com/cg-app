/**
 * Offline data cache
 */

let set;
let get;

if (typeof (window) !== 'undefined') {
  const storage = window.localStorage;
  const appKey = 'CG';
  get = key => storage.getItem(`${appKey}_${key}`);
  set = (key, value) => storage.setItem(`${appKey}_${key}`, value);
} else {
  get = () => false;
  set = () => false;
}

export const saveData = (key, value) => set(key, JSON.stringify(value));

export const getData = key => JSON.parse(get(key));
