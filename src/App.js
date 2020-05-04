import React, { useState } from 'react';
import './App.css';

function App() {
  let [book, setBook] = useState('')
  let [musiccd, setMusicCD] = useState('')
  let [chocolatebar, setChocolateBar] = useState('')
  let [chocolate1, setChocolate1] = useState('')
  let [perfume1, setPerfume1] = useState('')
  let [perfume2, setPerfume2] = useState('')
  let [perfume3, setPerfume3] = useState('')
  let [headache, setHeadache] = useState('')
  let [chocolate2, setChocolate2] = useState('')
  let [total, setTotal] = useState('')
  let [salestax, setSalesTax] = useState('')
  // let [purchased, setPurchased] = useState({})

  const handleSubmit = e => {
    e.preventDefault()
    // purchased = [book, musiccd, chocolatebar, chocolate1, chocolate2, perfume1, perfume2, perfume3, headache, chocolate2]
    // setPurchased(purchased)
    total = Number(book) + Number(musiccd) + Number(chocolatebar) + Number(chocolate1) + Number(perfume1) + Number(perfume2) + Number(perfume3) + Number(headache) + Number(chocolate2)
    salestax = Number(musiccd * .10) + Number(perfume3 * .10) + Number(chocolate1 * .05) + Number(perfume1 * .15) + Number(perfume2 * .15) + Number(chocolate2 * .05)
    setSalesTax((salestax).toFixed(2))
    setTotal((total + salestax).toFixed(2))
  }

  // let content
  // if (purchased.length > 0) {
  //   content = purchased.map((purchase, i) => {
  //     return (
  //       <div>
  //         <h3>Your Receipt</h3>
  //         <ul>
  //           <li key={i}>{purchase[i]}: {purchase}</li>
  //         </ul>
  //       </div>
  //     )
  //   })
  // }

  return (
    <div className="App">
      <h1>Items for Sale</h1>
      <ul>
        <li>Book - $12.49</li>
        <li>Music CD - $14.99</li>
        <li>Chocolate Bar - $0.85</li>
        <li>Imported Box of Choloates - $10.00</li>
        <li>Imported Bottle of Perfume - $47.50</li>
        <li>Imported Bottle of Perfume - $27.99</li>
        <li>Bottle of perfume - $18.99</li>
        <li>Packed of headache pills - $9.75</li>
        <li>Imported box of chocolates - $11.25</li>
      </ul>
      <h3>What would you like to buy?</h3>
      <form onSubmit={handleSubmit}>
        <div>
        <label>Book: </label>
        <input id="book" name="book" placeholder="$0.00" onChange={e => setBook(e.target.value)}></input>
        </div>
        <div>
        <label>Music CD: </label>
        <input id="musiccd" name="musiccd" placeholder="$0.00" onChange={e => setMusicCD(e.target.value)}></input>
        </div>
        <div>
        <label>Chocolate Bar: </label>
        <input id="chocolatebar" name="chocolatebar" placeholder="$0.00" onChange={e => setChocolateBar(e.target.value)}></input>
        </div>
        <div>
        <label>Imported Box of Chocolates: </label>
        <input id="chocolate1" name="chocolate1" placeholder="$0.00" onChange={e => setChocolate1(e.target.value)}></input>
        </div>
        <div>
        <label>Imported Bottle of Perfume: </label>
        <input id="perfume1" name="perfume1" placeholder="$0.00" onChange={e => setPerfume1(e.target.value)}></input>
        </div>
        <div>
        <label>Imported Bottle of Perfume: </label>
        <input id="perfume2" name="perfume2" placeholder="$0.00" onChange={e => setPerfume2(e.target.value)}></input>
        </div>
        <div>
        <label>Bottle of Perfume: </label>
        <input id="perfume3" name="perfume3" placeholder="$0.00" onChange={e => setPerfume3(e.target.value)}></input>
        </div>
        <div>
        <label>Packet of Headache Pills: </label>
        <input id="headache" name="headache" placeholder="$0.00" onChange={e => setHeadache(e.target.value)}></input>
        </div>
        <div>
        <label>Imported Box of Chocolates: </label>
        <input id="chocolate2" name="chocolate2" placeholder="$0.00" onChange={e => setChocolate2(e.target.value)}></input>
        </div>
        <button type="submit">Checkout</button>
      </form>
      <div>
        {/* {content} */}
        <h3>Your Receipt</h3>
          <p>Book: {book}</p>
          <p>Music CD: {musiccd}</p>
          <p>Chocolate Bar: {chocolatebar}</p>
          <p>Imported Box of Chocolate: {chocolate1}</p>
          <p>Imported Bottle of Perfume: {perfume1}</p>
          <p>Imported Bottle of Perfume: {perfume2}</p>
          <p>Packet of Headache Pills: {headache}</p>
          <p>Imported Box of Chocolates: {chocolate2}</p>
          <p>Sales Tax: {salestax}</p>
          <p>Total: {total}</p> 
      </div>
    </div>
  );
}

export default App;
