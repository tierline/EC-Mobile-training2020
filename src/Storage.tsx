class Storage {
  // TOREVIEW これでいいのか？
  // session的
  // グローバル変数ではなく Storage クラスを入れているため一応セーフ
  // 型定義は正確に
  // Emailクラスなどを定義したいところ
  private memory: Map<string, any>;
  constructor() {
    this.memory = new Map();
  }
  setIsAuthenticated(value: boolean): void {
    this.memory.set('AUTHENTICATION', value);
  }
  getIsAuthenticated(): boolean {
    return this.memory.get('AUTHENTICATION');
  }
  setEmail(email: string): void {
    this.memory.set('EMAIL', email);
  }
  getEmail(): string {
    return this.memory.get('EMAIL');
  }
  setNavigation(navigation: any): void {
    this.memory.set('NAVIGATION', navigation);
  }
  navi(): any {
    return this.memory.get('NAVIGATION');
  }
}

export default new Storage();
