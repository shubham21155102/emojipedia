import React from "react";
import Header from "./Header"
import Footer from "./Footer"
import Card from "./Emoji"
import Emojies from "./emojies";

function CreateCard(name){
    return (<Card
id={name.id}
symbol={name.symbol}
name={name.name}
meaning={name.meaning}
 />);
}
function App() {
    return ( <div><Header/>
{Emojies.map(CreateCard)}
    <Footer/></div>);
}
export default App