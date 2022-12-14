![Wormy prefers Wormdle over Whirdle](https://i.imgur.com/0rHxMmbm.png "Wormy prefers Wormdle over Whirdle")***"Wormdle?"***

# Welcome to [Whirdle](https://shiny-lebkuchen-9c51e9.netlify.app/ "Play Whirdle now!")
A full stack _Wordle_ clone

## Technologies used:
<font color="red">Front-end:</font> React  
Back-end: Node.js, Express, Mongoose  
Database: MongoDB  
Styling: Flexbox, animated.css

I love [_Wordle_](https://www.nytimes.com/games/wordle/index.html).  Actually, I love all word games from [_Scrabble_](https://scrabble.hasbro.com/en-us) (and I do have the [deluxe board edition](https://shop.hasbro.com/en-us/product/scrabble-deluxe-edition-game/3EBBA319-5056-9047-F518-95AD1EF2B5F2)) to [_Words with Friends_](https://wordswithfriends.com/).

One evening, I took a look at several of the many _Wordle_ clones out there. While some were quite good, I found that none of them had exactly what I was looking for in a complete game, [rules](https://www.wsj.com/articles/wordle-what-is-word-game-11642016202) and all. Some had the logic just plain wrong. For instance, a solution word  may have only one 'A' in it. THe guess word would have two, but neither correctly placed. The reveal word, though, would show two 'almost-A's', not one. There were also absent features I would have liked to see in the actual _Wordle_ game.

So rather than calling the _New York Times_ with my demands, I decided to try my hand at my own clone, which I have named _Whirdle_. Some features my version has (and don't scoff), includes:
* No pluralized words permitted. (I read somewhere that _Wordle_ did not permit plural words, so developed the word bank based on that. I later found out that was not the case. But I am keeping that in for now.)
* No junk words allowed. (_Wordle_ does not allow wacky non-words. Neither does _Whirdle_.)
* If you enter an unacceptable guess word, the game will alert you and then remove your bad guess. You don't have to hit backspace five times.
* At the game's completion, a modal appears. It will state whether you won or lost, the solution word and the number of guesses the user took.
* The game includes the option to start a new game.

After having gotten this far, in the near future I will add a login and collect users' stats and possibly play history.
