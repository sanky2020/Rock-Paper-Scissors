Wrote a logic for the game ROCK, PAPER , & SCISSOR with UserInterface to select the option rather than typing it manually.

The task was very interesting as we had to implement all that we have learnt so far.
Below is the step by step list of the actions taken;

1) Firstly created a function for the computer to give random inputs as per the game requirement by calling respective Random numbers from (1 to 3) and assigning them with their particular values, that is;
 1 = ROCK, 2 = PAPER, & 3 = SCISSOR respectively.

2) Declared variables win, lose, & tie globally and initialized them with 0.

3) Wrote a function "playRound" with 2 arguments ( 1st from user, 2nd from computer) then comparing both inputs with each other as per Game's Rule.

4) Analyzed to check for the  Game (won/lost/tie) and displaying their respective count after each round.

5) Unlike earlier method to display everything using console.log, this time used "innerHTML method" to display the output result directly on the webpage.

6) Designed the logic for this game such that, Winner will be the one reaching early 5 points. 
