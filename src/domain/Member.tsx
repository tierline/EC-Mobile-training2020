import Email from './Email';

class Member {
  private email: Email;
  private password: string;
  constructor(email: Email, password: string) {
    this.email = email;
    this.password = password;
  }
}

// full name のメソッドなど。
export default Member;
