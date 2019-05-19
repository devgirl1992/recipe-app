import React from 'react';

import { Link } from "react-router-dom";

const Recipes = props => (
    <div className="container">
        <div className="row">
            {props.recipes.map((recipe) => {
                return (
                    <div key={recipe.title}
                         className="col-md"
                         style={{marginBottom: "2rem"}}>

                        <div className="recipes__box">
                            <img
                                className="recipe__box-img"
                                src={recipe.image_url}
                                alt={recipe.title}/>

                            <div className="recipe__text">
                                <h5 className="recipes__title">
                                    {recipe.title.length < 20 ? `${recipe.title}` : `${recipe.title.subst(0, 25)}...`}

                                </h5>
                                <p className="recipes__subtitle">publisher: <span> {recipe.publisher} </span></p>
                            </div>

                            <button className="recipe_button">
                                <Link to={{
                                    pathname: `/recipe/${recipe.recipe_id}`,
                                    state: { recipe:  recipe.title }
                                }}>View Recipe</Link>

                            </button>

                        </div>

                    </div>
                );
            })}

        </div>
    </div>
);

export default Recipes;

/*

{ props.recipes.map((recipe) => {
                    return (

                        <div className="col-md-4">
                            <div className="recipes__box">
                                <img
                                    className="recipe__box-img"
                                    src={recipe.image_url}
                                    alt={ recipe.title }/>
                                    <div className="recipe__text">
                                        <h5>{ recipe.title }</h5>
                                    </div>
                            </div>
                        </div>
                    )
                }) }

 */