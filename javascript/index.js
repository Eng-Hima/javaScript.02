// deh ya shbab Objict & Array
// bn3aml el awoll array > objict = Propirty + Value
// name = propirty
// text = propirty

var Quotes = [
  {
    name: "William W.Purkey",
    text: "you've gotta dance like there's nobody watching, love like you'll never be hurt, sing like there's nobody listening and live like it's heaven on earth",
  },
  {
    name: "Robert Frost",
    text: "in three words i can sum up everything i've learned about life: it goes on",
  },
  {
    name: "Oscar Wilde",
    text: "To live is the rarest thing in the world. Most people exist, that is all",
  },
  {
    name: "Albert Einstein",
    text: "There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle",
  },
  {
    name: "Dr. Seuss",
    text: "Today you are You, that is truer than true. There is no one alive who is Youer than You",
  },
  {
    name: "Mark Twain",
    text: "The fear of death follows from the fear of life. A man who lives fully is prepared to die at any time",
  },
];

function generateQuote() {
  var randomNumber = Math.floor(Math.random() * Quotes.length);
  document.getElementById("text").innerHTML = `"${Quotes[randomNumber].text}"`;
  document.getElementById("name").innerHTML = `Name: ${Quotes[randomNumber].name}`;
}
