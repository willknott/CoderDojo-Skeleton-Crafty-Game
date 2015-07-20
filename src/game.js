Game = {
  // This defines our grid's size and the size of each of its tiles
	map_grid: {
		width:  40,
		height: 30,
		tile: {
			width:  16,
			height: 16
		}
	},
 
  // The total width of the game screen. Since our grid takes up the entire screen
  //  this is just the width of a tile times the width of the grid
	width: function() {
		return this.map_grid.width * this.map_grid.tile.width;
	},
 
  // The total height of the game screen. Since our grid takes up the entire screen
  //  this is just the height of a tile times the height of the grid
	height: function() {
		return this.map_grid.height * this.map_grid.tile.height;
	},
 
  // Initialize and start our game
	start: function() {
    // Start crafty and set a background color so that we can see it's working
		Crafty.init(Game.width(), Game.height());
		Crafty.background('rgb(249, 223, 125)');
	
    // Player character, placed at 3, 3 on our grid
    Crafty.e('PlayerCharacter').at(3, 3);
//	Crafty.e('Prize').at(10,10);
	var max_prize = 8;
	
	
	// Place a tree at every edge square on our grid of 16x16 tiles
	//starting for loop 1
	for (var x = 0; x < Game.map_grid.width; x++) {
		//starting for loop 2
		for (var y = 0; y < Game.map_grid.height; y++) {
			var at_edge = x == 0 || 
				x == Game.map_grid.width - 1 || 
				y == 0 || 
				y == Game.map_grid.height - 1;

			var portal_space = 
			(x <= 3 && y <=3) ||
			(x >= Game.map_grid.width -4 && y >= Game.map_grid.height - 4) ||
			(x <= 3 && y >= Game.map_grid.height - 4) ||
			(x >= Game.map_grid.width -4 && y <=3);
 
			if (at_edge) {
          // Place a tree(eventually) entity at the current tile
				Crafty.e('Tree')
				.at(x, y);
			} else if (portal_space) {
			//paint in Portal
				Crafty.e('Portal')
				.at(x, y);
			} else if (Math.random() < 0.06) {
          // Place a bush entity at the current tile
				Crafty.e('Bush')
				.at(x, y);
			}//end of else if
			else if (Math.random() < 0.03) {
				if (Crafty('Prize').length < max_prize) 
					{
					Crafty.e('Prize')
					.at(x, y);
					}
			}//end of else if
			
		} //end of loop 2
	} // end of loop 1
	
	Crafty.e('LevelPoints');
	Crafty.e('TotalPoints');
	Crafty.e('CurrentLevel');
	
  }// end of Start
}//end of game