import React from "react";

function Categories({ category, changeCategory }) {
  return (
    <div className="category-btn-group">
      {category.map((item, index) => {
        return (
          <button
            onClick={() => changeCategory(item)}
            type="button"
            className="category-btn"
            key={index}
          >
            {item}
          </button>
        );
      })}
    </div>
  );
}

export default Categories;
