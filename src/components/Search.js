import React from 'react'

const Search = ({handleOnSubmit, city, setCity}) => {
  return (
    <div className="row">
      <div className="col-md-12">
        <h2 className='text-center mt-3'>Hava Durumu</h2>
        <form className="mt-5 text-center"  onSubmit={handleOnSubmit}>
          <div className="form-group row">
            <div>
              <input
                type="text"
                
                id="city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder='Şəhər girin...'
              />
              <i className="fa-solid fa-magnifying-glass"></i>
            </div> 
          </div>

          <div className="form-group">
            <button type="submit" className="btn">
              REQUEST
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Search