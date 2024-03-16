function RecipeCard({ item }) {
  const tmp = new URL(item._links.self.href)
  console.log(item)
  return (
    <article className="card__article">
      <img src={item.recipe.image} alt={item.recipe.label} className="card__img" />
      <div className="card__wrap">
        <h2 className="card__title">{item.recipe.label}</h2>
        <a href={`${tmp.pathname}`} className="card__link">
          {"More >"}
        </a>
      </div>
    </article>
  );
}
export { RecipeCard };
