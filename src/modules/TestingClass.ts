export default class TestingClass {
  private val: string;
  constructor(val: string) {
    this.val = val;
  }

  testLogger(): void {
    console.log(this.val);
  }
}
