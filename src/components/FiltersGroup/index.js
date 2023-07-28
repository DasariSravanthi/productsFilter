import './index.css'
import {BsSearch} from 'react-icons/bs'

const FiltersGroup = props => {
  const {
    titleSearch,
    changeTitleSearch,
    categoryOptions,
    // activeCategoryId,
    changeCategory,
    ratingsList,
    // activeRatingId,
    changeRating,
  } = props

  const givenTitleSearch = event => {
    changeTitleSearch(event.target.value)
  }

  const selectedCategory = id => {
    changeCategory(id)
  }

  const selectedRating = id => {
    changeRating(id)
  }

  return (
    <div className="filters-group-container">
      <div className="input-container">
        <input
          type="search"
          placeholder="Search"
          value={titleSearch}
          onChange={givenTitleSearch}
          className="input"
        />
        <BsSearch />
      </div>
      <h1 className="filter-heading">Category</h1>
      <ul className="filter-list-container">
        {categoryOptions.map(eachCategory => (
          <li key={eachCategory.categoryId}>
            <button
              className="filter-button"
              onClick={selectedCategory(eachCategory.categoryId)}
              type="button"
            >
              {eachCategory.name}
            </button>
          </li>
        ))}
      </ul>
      <h1 className="filter-heading">Rating</h1>
      <ul className="filter-list-container">
        {ratingsList.map(eachRating => (
          <li key={eachRating.ratingId}>
            <button
              className="filter-button"
              onClick={selectedRating(eachRating.ratingId)}
              type="button"
            >
              <img
                src={eachRating.imageUrl}
                className="rating-img"
                alt="rating"
              />
              <p className="rating-word">& up</p>
            </button>
          </li>
        ))}
      </ul>
      <button className="clear-filter-button" type="button">
        Clear Filters
      </button>
    </div>
  )
}
export default FiltersGroup
