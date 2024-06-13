export namespace staticMethod {
  class Configuration {
    static NAME: string = "Dhevano Gading";
    static GENDER: string = "Laki-laki";
    static AGE: number = 19
  }
  
  export class MathUtil {
    static sum(...values: number[]): number {
      let total: number = 0;
      for (const value of values) {
        total+=value
      }
      return total;
    }
  }
  
  // console.log(Configuration.NAME);
  // console.log(Configuration.GENDER);
  // console.log(Configuration.AGE);
  // console.log(MathUtil.sum(2, 4, 6, 8));
}