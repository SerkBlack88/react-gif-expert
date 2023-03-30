import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([ 'Samurai X' ]);

    const onAddCategory = ( newCategory ) => {
        // categories.push(newCategory)
        // console.log(newCategory);
        // setCategories( categories.concat('Final Fantasy'))
        // setCategories( [...categories, 'Final Fantasy'])
        if ( categories.includes(newCategory) ) return;

        setCategories( [ newCategory, ...categories])
        // setCategories( cat => [...cat, 'Valorant'])
    }

  return (
    <>
        <h1>GifExpertApp</h1>

        <AddCategory 
            // setCategories={ setCategories }
            onNewCategory={ (event) => onAddCategory(event) }
        />

        { 
            categories.map( ( category) => (
                <GifGrid 
                    key={ category }
                    category={ category }/>
            ))
        }

    </>
  )
}
