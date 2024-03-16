import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Recipe() {
  const API_BASEURL = "https://api.edamam.com/api/recipes/v2";
  const APP_ID = "f652563c";
  const APP_KEY = "d5da2e023c131a1d23f74248aa2ff49b";
  const RECIPE_ID = useParams().id;
  let [data, setData] = useState({});

  async function getData() {
    const response = await fetch(
      `${API_BASEURL}/${RECIPE_ID}?app_id=${APP_ID}&app_key=${APP_KEY}&type=public`
    );
    const results = await response.json();
    setData((data = results.recipe));
  }
  useEffect(() => {
    getData()
  }, [])

  return (
    <>
      {data.ingredients && <section className="container">
        <div className="recipe_header">
          <img src={data.images.REGULAR.url} alt="" />
          <div>
            <h3 className="recipe_header__title">{data.label}</h3>
            <p className="recipe_header__link">
              {`See full recipe on: `}
              <a href={data.shareAs}>Lottie + Doof</a>
            </p>
          </div>
        </div>
        <div className="recipe_body">
          <div className="recipe_ingridients">
            <h3 className="recipe_ingridients__title">{`${data.ingredients.length-1} Ingridients`}</h3>
            <ul className="recipe_ingridients__list">
                {data.ingredients.map((item, index) => (
                    <li className="recipe_ingridients__item" key={index}>{item.text}</li>
                ))}
            </ul>
          </div>
          <div className="recipe_nutrition">
            <h3 className="recipe_nutrition__title">Nutrition</h3>
            <div>
              <p className="recipe_nutrition__calories">{`${String(Math.round(data.calories))} calories`}</p>
              <p className="recipe_nutrition__weight">{`${String(Math.round(data.totalWeight))} gram`}</p>
            </div>
          </div>
        </div>
      </section>}
    </>
  );
}

export default Recipe;
