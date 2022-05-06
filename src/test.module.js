const anan = {
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
    if (num < 0) return console.error("Value cannot be negative");

    let max = num;

    let min = 1;
    let avg = 0;
    let result = 1;
    for (let i = 0; i < 1000; i++) {
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
