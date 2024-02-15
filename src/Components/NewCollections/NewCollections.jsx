import React from 'react'
import './NewCollections.css'
import new_collection from '../Assets/new_collections'
import Items from '../items/Items'

const NewCollections = () => {
      return (
            <div className='new-collections'>
                  <h1>NEW COLLECTIONS</h1>
                  <hr />
                  <div className="collections">
                        {new_collection.map((itemsNC, i) => {
                              return <Items key={i} id={itemsNC.id} name={itemsNC.name} image={itemsNC.image} new_price={itemsNC.new_price} old_price={itemsNC.old_price} />

                        })}
                  </div>
            </div>
      )
}

export default NewCollections