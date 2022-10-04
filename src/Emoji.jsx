import React from "react";
function Card(name){
    return (
<center>
     <div className="boxmodel">
     <div className="design"></div>
<div className="top">
<h1 className="symbol">{name.symbol}</h1>
    <div className="middle">
    <h2 className="name">{name.name}</h2>
        <div className="bottom">
<p className="meaning">{name.meaning}</p>
        </div>
    </div>
</div>




     </div><hr></hr></center> );

}
export default Card;