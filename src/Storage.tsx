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
  setAuth(value: boolean, key = 'auth') {
    this.memory.set(key, value);
  }
  getAuth(key = 'auth') {
    return this.memory.get(key);
  }
  setEmail(email: string, key = 'email') {
    this.memory.set(key, email);
  }
  // 引数なしでも呼べてしまう
  // （キャスト。強制的な型変換。　- typescriptでは？）
  getEmail(key = 'email'): string {
    return this.memory.get(key);
  }
  setCart(cart: any): any {
    this.memory.set('cart', cart);
  }
  getCart(): any {
    return this.memory.get('cart');
  }
}

export default new Storage();
