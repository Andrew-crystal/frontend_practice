import React from "react"

const ImageSlide = ({ image, altText, caption }) => {
  return (
    <div className="imageSlideContainer">
      <img src={image} alt={altText} />
      <span>{caption}</span>
    </div>
  )
}