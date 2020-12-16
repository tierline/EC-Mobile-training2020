class Storage {
  private memory
  constructor() {
    this.memory = new Map();
  }
  setAuth(value: boolean, key = 'auth') {
    this.memory.set(key, value);
  }
  getAuth(key = 'auth') {
    return this.memory.get(key);
  }
}

export default new Storage();