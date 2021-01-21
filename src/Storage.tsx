class Storage {
  // TOREVIEW これでいいのか？
  // session的
  // グローバル変数ではなく Storage クラスを入れているため一応セーフ
  // 型定義は正確に
  // Emailクラスなどを定義したいところ
  // return の値にも型定義
  // Mapのkeyは大文字で。クラス、定数で使ったりする。
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
    this.memory.set('Email', email);
  }
  getEmail(): string {
    return this.memory.get('Email');
  }
}

export default new Storage();
