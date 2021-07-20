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

 /*
  * Array.prototype.uniq()
  * 
  * @returns array
  */
  if (!Array.prototype.uniq) {
    Object.defineProperty(Array.prototype, 'uniq', {
      value() {
        return [...new Set(this)]
      }
    })
  }

 /*
  * Array.prototype.uniq()
  * 
  * @returns array
  */
  if (!Array.prototype.uniq) {
    Object.defineProperty(Array.prototype, 'uniq', {
      value() {
        return [...new Set(this)]
      }
    })
  }
}