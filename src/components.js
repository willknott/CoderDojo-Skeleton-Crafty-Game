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
		this.requires('Actor, Color');
		this.color('rgb(20, 125, 40)');
	},
});
 
Crafty.c('Bush', {
	init: function() {
		this.requires('Actor, Color');
		this.color('rgb(20, 185, 40)');
	},
});
