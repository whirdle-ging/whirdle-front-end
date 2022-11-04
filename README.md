# Welcome to Whirdle

## Technologies used:
Front-end: React
Back-end: Node.js, Express, Mongoose
Database: MongoDB
Styling: Flexbox, animated.css

I love _[wordle]_ (https://www.nytimes.com/games/wordle/index.html). Actually, I love all word games from _Scrabble_ (and I do have the deluxe board edition) to _Words with Friends_.

One evening, I took a look at several of the many _Wordle_ clones out there. While some were quite good, I found that none of them had exactly what I was looking for in a complete game, [rules] (https://www.wsj.com/articles/wordle-what-is-word-game-11642016202) and all. Some had the logic just plain wrong. For instance, a solution word  may have only one 'A' in it. THe guess word would have two, but neither correctly placed. The reveal word, though, would show two 'almost-A's', not one. There were also features I would like to see in an actual _Wordle_ game.

So rather than calling the _New York Times_ with my demands, I decided to try my hand at my own clone, which I have named _Whirdle_. Some features my version has (and don't scoff), includes:
* No pluralized words permitted. (I read somewhere that _Wordle_ did not permit plural words, so developed the word bank based on that. I later found out that was not the case. But I am keeping that in for now.)
* No junk words allowed. (_Wordle_ does not allow wacky non-words. Neither does _Whirdle_.)
* If you enter an unacceptable guess word, the games will alert you and then remove your bad guess. You don't have to hit backspace five times.
* At the game's completion, a modal appears. It will state whether you won or lost, the solution word and the number of guesses the user took.
* The game includes the option to start a new game.

After having gotten this far, in the near future I will add a login and collect users' stats and possibly play history.

This API is full stack, with the word bank and letters databases stored as MongoDB collections, and paving the way for when I integrate the login and start saving game stats.