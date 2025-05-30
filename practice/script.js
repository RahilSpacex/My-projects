let Quotes = new Map()
Quotes.set("Ghandhi", "An eye for an eye makes the whole world blind")
Quotes.set("Einstein", "Nuclear power is one hell of a way to boil water")
Quotes.set("Suntzu", "Cum quick")
Quotes.set("Cooper", "When we were young we used to look up and wonder about our place in the stars now we look down and wonder about our place in the dirt")
Quotes.set("Oppenheimer", "Now i have become death the destroyer of worlds")
for (const [speaker,quote]of Quotes) {
    let bod = document.getElementById('tbody')
    newBod = `<tr>
          <td>${speaker}</td>
          <td>${quote}</td>
        </tr>`
    bod.innerHTML += newBod
}