(() => {
    /**
     * Array.prototype.sum()
     *
     * @returns number
     */
    if (!Array.prototype.sum) {
      Object.defineProperty(Array.prototype, 'sum', {
        value () {
          return this.reduce((a, b) => a + (b ?? 0), 0)
        },
      })
    }

    /**
     * Array.prototype.uniq()
     *
     * @returns array
     */
    if (!Array.prototype.uniq) {
      Object.defineProperty(Array.prototype, 'uniq', {
        value () {
          return [...new Set(this)]
        },
      })
    }

    /**
     * Array.prototype.first()
     *
     * @returns value | null
     */
    if (!Array.prototype.first) {
      Object.defineProperty(Array.prototype, 'first', {
        value () {
          return this[0] ?? null
        },
      })
    }

    /**
     * Array.prototype.last()
     *
     * @returns value | null
     */
    if (!Array.prototype.last) {
      Object.defineProperty(Array.prototype, 'last', {
        value () {
          const li = this.length - 1
          return this[li] ?? null
        },
      })
    }

    /**
     * Array.prototype.clone()
     *
     * @returns value | null
     */
    if (!Array.prototype.clone) {
      Object.defineProperty(Array.prototype, 'clone', {
        value () {
          return [...this]
        },
      })
    }

    // TODO: https://kotlinlang.org/docs/collection-transformations.html#zip
  }
)()