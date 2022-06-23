import React from 'react'
import { BlogViews, BlogViewsLink } from './articleStyled'
import { FaPlay } from "react-icons/fa";

const Article = () => {
  return (
    <BlogViews>
    <BlogViewsLink>
      <FaPlay />
      <span>View All Blog Articles</span>
    </BlogViewsLink>
  </BlogViews>
  )
}

export default Article