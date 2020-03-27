class CarouselContent {
  constructor(slides) {
    this.slides = slides
    this.current = 0
  }

  toNext() {
    const next = this.current + 1
    if (this.validNext(next)) {
      this.current = next
    }
  }

  toPrevious() {
    const previous = this.current - 1
    if (this.validPrevious(previous)) {
      this.current = previous
    }
  }

  currentSlide() {
    return this.slides[this.current]
  }

  previousSlide() {
    const prevIndex = this.current - 1
    return this.validPrevious(prevIndex) ? this.slides[prevIndex] : this.nullSlide()
  }

  nextSlide() {
    const nextIndex = this.current + 1
    return this.validNext(nextIndex) ? this.slides[nextIndex] : this.nullSlide()
  }

  validPrevious(index) {
    return index >= 0
  }

  validNext(index) {
    return index <= this.slides.length - 1
  }

  nullSlide() {
    // create null slide implementations
    return null
  }
}

export default CarouselContent