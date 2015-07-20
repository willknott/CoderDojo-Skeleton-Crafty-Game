//store the player's score
var TotalScore = 0;
var LevelScore = 0;

// The Grid component allows an element to be located
//  on a grid of tiles
Crafty.c('Grid', {
	init: function() {
		this.attr({
			w: Game.map_grid.tile.width,
			h: Game.map_grid.tile.height
		})
	},
	//end of init
	
	
	  // Locate this entity at the given position on the grid
	at: function(x, y) {
		if (x === undefined && y === undefined) {
			return { 
				x: this.x/Game.map_grid.tile.width, 
				y: this.y/Game.map_grid.tile.height 
			}
		} else {
			this.attr({ 
				x: x * Game.map_grid.tile.width, 
				y: y * Game.map_grid.tile.height 
			});
		return this;
		} //end of else if 
	}//end of at

}); //end of Crafty c Grid component call


// An "Actor" is an entity that is drawn in 2D on canvas
//  via our logical coordinate grid
Crafty.c('Actor', {
  init: function() {
    this.requires('2D, Canvas, Grid');
  },
});
 
 
Crafty.c('Tree', {
	init: function() {
		this.requires('Actor, Color, Solid');
		this.color('rgb(20, 125, 40)');
	},
});
 
Crafty.c('Bush', {
	init: function() {
		this.requires('Actor, Color, Solid');
		this.color('rgb(20, 185, 40)');
	},
});


Crafty.c('Prize', {
	init: function() {
		this.requires('Actor, Color');
		this.color('rgb(171, 125, 40)');
	},

	collect: function() {
		//add a score
		TotalScore = TotalScore +1;
		LevelScore = LevelScore +1;
		this.destroy();
	}

});



// This is the player-controlled character
Crafty.c('PlayerCharacter', {
	init: function() {
		this.requires('Actor, Fourway, Color, Collision')
			.fourway(4)
			.color('rgb(20, 75, 40)')
			.stopOnSolids()
			//add method for when touching a prize
			.onHit('Prize', this.touchPrize)
			;
	}, //add the comma, we're adding more
	
	  // Registers a stop-movement function to be called when
	//  this entity hits an entity with the "Solid" component
	stopOnSolids: function() {
		this.onHit('Solid', this.stopMovement);
		return this;
	},
 
	// Stops the movement
	stopMovement: function() {
		this._speed = 0;
		if (this._movement) {
			this.x -= this._movement.x;
			this.y -= this._movement.y;
		}// end of if
	},
	
 // Respond to this touching the prize
	touchPrize: function(data) {
		Prize = data[0].obj;
		Prize.collect();
	},
});
	