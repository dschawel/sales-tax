import React, { useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
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
  let [items, setItems] = useState([])
  let [purchased, setPurchased] = useState([])

  // function to calculate total, sales tax, import tax
  const handleSubmit = e => {
    e.preventDefault()
    items = [
      ["book",- book],
      ["music cd",- Number(Number(musiccd)+Number(musiccd * .10)).toFixed(2)],
      ["chocolate bar",- chocolatebar],
      ["Imported Chocolate",- Number(Number(chocolate1)+Number(chocolate1 * .05)).toFixed(2)],
      ["Imported Perfume",- Number(Number(perfume1)+Number(perfume1 * .15)).toFixed(2)],
      ["Imported Bottle of Perfume",- Number(Number(perfume2)+Number(perfume2 * .15)).toFixed(2)],
      ["Bottle of Perfume",- Number(Number(perfume3)+Number(perfume3 * .10)).toFixed(2)],
      ["Packet of Headache Pills",- headache],
      ["Imported Box of Chocolate",- Number(Number(chocolate2)+Number(chocolate2 * .05)).toFixed(2)]
    ]
    setItems(items)
    purchased = []
    if (book) {
      purchased.push(items[0])
    }
    if (musiccd) {
      purchased.push(items[1])
    }
    if (chocolatebar) {
      purchased.push(items[2])
    }
    if (chocolate1) {
      purchased.push(items[3])
    }
    if (perfume1) {
      purchased.push(items[4])
    }
    if (perfume2) {
      purchased.push(items[5])
    }
    if (perfume3) {
      purchased.push(items[6])
    }
    if (headache) {
      purchased.push(items[7])
    }
    if (chocolate2) {
      purchased.push(items[8])
    }
    setPurchased(purchased)
    total = Number(book) + Number(musiccd) + Number(chocolatebar) + Number(chocolate1) + Number(perfume1) + Number(perfume2) + Number(perfume3) + Number(headache) + Number(chocolate2)
    salestax = Number(musiccd * .10) + Number(perfume3 * .10) + Number(chocolate1 * .05) + Number(perfume1 * .15) + Number(perfume2 * .15) + Number(chocolate2 * .05)
    setSalesTax((salestax).toFixed(2))
    setTotal((total+salestax).toFixed(2))
  }

  // conditionally render the receipt
  let content
  if (purchased) {
    content = purchased.map((purchase, i) => {
      return (
        <div key={i}>
          <p>{purchase}</p> 
        </div>
      )
    })
  }

  //Listing items for sale and form to purchase items
  return (
    <div className="App">
      <Container>
        <Row>
          <Col xs="4">
            <h3>Items for Sale</h3>
            <ul>
              <li>Book - $12.49</li>
              <li>Music CD - $14.99</li>
              <li>Chocolate Bar - $0.85</li>
              <li>Imported Box of Chocolates - $10.00</li>
              <li>Imported Bottle of Perfume - $47.50</li>
              <li>Imported Bottle of Perfume - $27.99</li>
              <li>Bottle of perfume - $18.99</li>
              <li>Packed of headache pills - $9.75</li>
              <li>Imported box of chocolates - $11.25</li>
            </ul>
          </Col>
          <Col xs="5">
            <h4>What would you like to buy?</h4>
            <form onSubmit={handleSubmit}>
              <div>
              <label>Book:</label>
              <input id="book" name="book" placeholder="$0.00" onChange={e => setBook(e.target.value)}></input>
              </div>
              <div>
              <label>Music CD:</label>
              <input id="musiccd" name="musiccd" placeholder="$0.00" onChange={e => setMusicCD(e.target.value)}></input>
              </div>
              <div>
              <label>Chocolate Bar:</label>
              <input id="chocolatebar" name="chocolatebar" placeholder="$0.00" onChange={e => setChocolateBar(e.target.value)}></input>
              </div>
              <div>
              <label>Imported Box of Chocolates:</label>
              <input id="chocolate1" name="chocolate1" placeholder="$0.00" onChange={e => setChocolate1(e.target.value)}></input>
              </div>
              <div>
              <label>Imported Bottle of Perfume:</label>
              <input id="perfume1" name="perfume1" placeholder="$0.00" onChange={e => setPerfume1(e.target.value)}></input>
              </div>
              <div>
              <label>Imported Bottle of Perfume:</label>
              <input id="perfume2" name="perfume2" placeholder="$0.00" onChange={e => setPerfume2(e.target.value)}></input>
              </div>
              <div>
              <label>Bottle of Perfume:</label>
              <input id="perfume3" name="perfume3" placeholder="$0.00" onChange={e => setPerfume3(e.target.value)}></input>
              </div>
              <div>
              <label>Packet of Headache Pills:</label>
              <input id="headache" name="headache" placeholder="$0.00" onChange={e => setHeadache(e.target.value)}></input>
              </div>
              <div>
              <label>Imported Box of Chocolates:</label>
              <input id="chocolate2" name="chocolate2" placeholder="$0.00" onChange={e => setChocolate2(e.target.value)}></input>
              </div>
              <button id="submit" type="submit">Checkout</button>
            </form>
          </Col>
          <Col xs="3">
            <div>
              <h3>Your Receipt</h3>
              {content}
              <p>Sales Tax: {salestax}</p>
              <p>Total: {total}</p>
            </div>
            </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
