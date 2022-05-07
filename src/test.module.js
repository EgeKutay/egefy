const anan = {
  logarithm(number, base) {},
  power(num, pow) {
    if ((pow * 10) % 10 != 0)
      return console.error("Power value can only be decimal number");
    result = 1;
    for (let i = 0; i < pow; i++) {
      result = result * num;
    }
    return result;
  },
  root(num, deg) {
    if (num < 0 || deg < 0)
      return console.error("Value or degree cannot be negative");

    let max = num;
    const precision = 1000;
    let min = 1;
    let preavg = 0;
    let avg = 0;
    let result = 1;
    for (let i = 0; i < precision; i++) {
      preavg = avg;
      avg = (min + max) / 2;

      if (this.power(avg, deg) < num) {
        min = avg;
      } else if (this.power(avg, deg) > num) {
        max = avg;
      } else {
        result = avg;
        break;
      }
      result = avg;
    }
    return result;
  },
};
module.exports = anan;
