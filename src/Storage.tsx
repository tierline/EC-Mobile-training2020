class Storage {
  private memory: any;
  constructor() {
    this.memory = new Map();
  }
  setAuth(value: boolean, key = 'auth') {
    this.memory.set(key, value);
  }
  getAuth(key = 'auth') {
    return this.memory.get(key);
  }
  setEmail(email: string, key = 'email') {
    this.memory.set(key, email);
  }
  getEmail(key = 'email') {
    return this.memory.get(key);
  }
}

export default new Storage();
