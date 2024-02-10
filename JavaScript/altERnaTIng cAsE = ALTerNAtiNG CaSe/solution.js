String.prototype.toAlternatingCase = function () {
  return this.split('').map(char => {
        if (char === char.toLowerCase()) {
            return char.toUpperCase();
        } else {
            return char.toLowerCase();
        }
    }).join('');
}