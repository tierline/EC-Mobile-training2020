class Email {
  private email: string;
  constructor(email: string) {
    if (this.validation(email)) {
      this.email = email;
    }
  }

  getEmail(): string {
    return this.email;
  }

  validation(email: string): boolean {
    const reg = /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{1,}\.[A-Za-z0-9]{1,}$/;
    return reg.test(email);
  }
}
export default Email;
