# Skeleton-Crafty-Game
Created for CoderDojo NSC Mahon Cork. The Skeleton game is a bare-boned, unskinned simple game using Crafty.js

Due to access limits, classes were repeated but the ninjas asked to make a particular type of game... and it took a while.

The game here is using Crafty.js and was started using the Crafty Tutorial by Darren Torpey at http://buildnewgames.com/introduction-to-crafty/

The tutorial is fully skinned, but is really a demo without gameplay. This repo is more game like with levelling and a game over situation.

Missing... skinning (follow the tutorial to create your own skin) and a winning scenario.

Know bugs... 
- When the total score exceeds 3 figures the scoreboard wraps on to the game play area (most likely fix is swapping the locations of the total score and the current level number.
- The number of prizes is "softcoded" to 8 (as opposed to being set to the number of prizes displayed on the level
- The playfield is randomly generated (not procedurally), this can mean that a prize is unobtainable, so a level cannot be completed. 

Not the cleanest or most optimised code, but the average age is 11. Some things are supposed to be easy to read as opposed to perfect.

Crafty 2010-2015. Crafty is distributed under the MIT or GPL license.