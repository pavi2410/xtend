export default function xtendArray() {

  /*
  * Array.prototype.sum()
  * 
  * @returns number
  */
  if (!Array.prototype.sum) {
    Object.defineProperty(Array.prototype, 'sum', {
      value() {
        return this.reduce((a, b) => a + b, 0)
      }
    })
  }

}