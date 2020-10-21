export const USER_PREFS_KEY = 'user.preferences.1.0';

class UserPrefs {
  // --------------------------------------------------------------------------
  // [Private] Fields
  // --------------------------------------------------------------------------

  // --------------------------------------------------------------------------
  // [Public] Constructor
  // --------------------------------------------------------------------------

  constructor() {
  }

  // --------------------------------------------------------------------------
  // [Public] Accessors
  // --------------------------------------------------------------------------

  // --------------------------------------------------------------------------
  // [Public] Methods
  // --------------------------------------------------------------------------


  public async get(key: string) {
    const store = JSON.parse((localStorage.getItem(USER_PREFS_KEY) || null) as string) || null;
    return store[key];
  }

  public async set(key: string, data: any) {
    const store = JSON.parse((localStorage.getItem(USER_PREFS_KEY) || null) as string) || {};
    store[key] = data;
    localStorage.setItem(USER_PREFS_KEY, JSON.stringify(store));
  }

  // --------------------------------------------------------------------------
  // [Private] Methods
  // --------------------------------------------------------------------------

};


const userPrefs = new UserPrefs();

export {
  userPrefs as UserPrefs
}