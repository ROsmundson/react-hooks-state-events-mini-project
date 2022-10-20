import React from "react";

function CategoryFilter({ categories, selectedCategory, onSelectedCategory }) {
  const categoryButtons = categories.map((category) => {
    const className = category === selectedCategory ? "selected" : null;
    return (
      <button
        key={category}
        className={className}
        onClick={() => onSelectedCategory(category)}
      >
      { category }
      </button>
    );
    });
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categoryButtons}
      {/* render <button> elements for each category here */}
      {/* buttons will need a key prop equal to the category */}
      {/* onClick = button clicked gets class of `selected` */}
      {/* filter list so only tasks that match category display */}
      {/* if "All" is selected, all tasks should be displayed */}
    </div>
  )
}

    

export default CategoryFilter;
