Wrote a logic for the game ROCK, PAPER , & SCISSOR.

The task was very interesting as we had to implement all that we have learnt so far.
Created a Welcome Message for this GAME in the form of Alert.
Below is the step by step list of the actions taken:

1) Firstly created a function for the computer to give random inputs as per the game requirement by calling respective Random numbers from (1 to 3) and assigning them with their particular values, that is;
 1 = ROCK, 2 = PAPER, & 3 = SCISSOR respectively.

2) Declared variables win, lose, & tie globally and defined them with 0.

3) Wrote a function "playRound" with 2 parameters ( 1st from user [by taking inputs via prompt from user 5 times and converting it to case insensitive inorder to use it further in accordance with the program logic], and 2nd from computer) and then comparing both inputs with each other as per Game's Rule, and analyzed to check for the  Game (won/lost/tie) and gave the respective return value by incrementing its particular variable(win/lose/tie).

4) Wrote the main function and gave it a name as "game()". Wrote a for loop in it for looping the same function "playRound" 5 times and displaying the result at the end of each round. Finally displayed total number of Games Won, Games Lost and Games Tied based on which the Final Result is displayed whether you Won/Lost/ or the Game Tied.
