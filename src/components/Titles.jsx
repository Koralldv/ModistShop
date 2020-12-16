import React from 'react'

function Titles( {titles} ) {
    return(
        <div className="container">
				<div className="row justify-content-center mb-3 pb-3">
          <div className="col-md-12 heading-section text-center ftco-animate">
            <h1 className="big">{titles.big}</h1>
            <h2 className="mb-4">{titles.small}</h2>
          </div>
        </div>    		
    	</div>
    )
}

export default Titles;