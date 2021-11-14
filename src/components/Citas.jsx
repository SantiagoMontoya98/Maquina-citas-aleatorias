import React, { useEffect, useState } from 'react'
import { Author, ButtonNew, Buttons, Fondo, Link1, Link2, LinksContainer, MainContainer, Quote, QuoteContainer, Text } from '../styles/CitasStyles'

const Citas = () => {

  let url = "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";

  const [quotes, setQuotes] = useState([]);

  const [dataQuote, setdataQuote] = useState({});

  const [colors, setColors] = useState([

    '#16a085',
    '#27ae60',
    '#2c3e50',
    '#f39c12',
    '#e74c3c',
    '#9b59b6',
    '#FB6964',
    '#342224',
    '#472E32',
    '#BDBB99',
    '#77B1A9',
    '#73A857'

  ])

  const [color, setColor] = useState("");  

  const getQuotes = async () => {

    let resp = await fetch(url);
    let {quotes} = await resp.json();

    return quotes;

  }  

  const numRandomQ = () => {

    let num = Math.floor(Math.random() * 102);

    return num;

  }

  const numRandomC = () => {

    let num = Math.floor(Math.random() * 12);

    return num;

  }

  useEffect(() => {

    getQuotes()
    .then(data => setQuotes(data));
    
  }, [])

  useEffect(() => {
    
    setdataQuote(quotes[numRandomQ()]);

    setColor(colors[numRandomC()]);    

  }, [quotes])  

  const handleClick = () => {    
    
    setdataQuote(quotes[numRandomQ()]);

    setColor(colors[numRandomC()]);    

  }  

  return (    

    <MainContainer>

      <Fondo style={{backgroundColor: color}}>

      </Fondo>

      <QuoteContainer id="quote-box">

        <Quote>
          <i className="fas fa-quote-left quote-icon" 
            style={{color: color, transition: "color 2s ease"}}></ i>
          <Text id="text" style={{color: color}}>
            {dataQuote === undefined 
            ? <i className="fas fa-quote-left quote-icon" style={{color: color}}></ i> 
            : dataQuote.quote}
          </Text>
        </Quote>

        <Author>
          <p
            id="author"
            style={{color: color, transition: "color 2s ease"}}>
              - {dataQuote === undefined 
                  ? ""
                  : dataQuote.author
                }
          </p>
        </Author>

        <Buttons>

          <LinksContainer>
            <Link1 
              href="https://twitter.com/intent/tweet" 
              id="tweet-quote"
              title="Tweet this quote!"
              style={{backgroundColor: color}}><i 
              className="fab fa-twitter link-icons" 
              target="_top"
              ></i></Link1>
            <Link2 
              href="https://www.tumblr.com" 
              title="Post this quote on tumblr!"
              target="_blank"
              style={{backgroundColor: color}}><i 
              className="fab fa-tumblr link-icons"
              ></i></Link2>
          </LinksContainer>

          <section>
            <ButtonNew 
              id="new-quote" 
              style={{backgroundColor: color}}
              onClick={handleClick}>New Quote</ButtonNew>
          </section>

        </Buttons>


      </QuoteContainer>
      
    </MainContainer>

  )
}

export default Citas
