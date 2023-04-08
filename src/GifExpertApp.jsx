import { useState } from "react";
import { AddCattegory, 
         GifGrid } from './components'


export const GifExpertApp = () => {


    const [categories, setCategories] = useState([ '' ]);

    const onAddCattegory = ( newCategory ) => {

        if ( categories.includes( newCategory ) ) return;

        setCategories( [ newCategory, ...categories])
    }


  return (
    <>    
           <h1>Imágenes según la búsqueda: </h1>
           <AddCattegory 
               onNewCategory     ={ onAddCattegory }
               currentCattegories={ categories }
             />
         { 
           categories.map( (category ) => (           
                 <GifGrid 
                      key={ category } 
                      category={ category }
                   />
                )) 
          }  
    </>

  )

}
