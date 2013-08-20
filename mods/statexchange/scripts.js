exports.BattleScripts = {
	init: function() {
		for (var i in this.data.Pokedex) {
			var atk = this.data.Pokedex[i].baseStats.atk;
			var def = this.data.Pokedex[i].baseStats.def;
			var spa = this.data.Pokedex[i].baseStats.spa;
			var spd = this.data.Pokedex[i].baseStats.spd;
			this.data.Pokedex[i].baseStats.atk = def;
			this.data.Pokedex[i].baseStats.def = atk;
			this.data.Pokedex[i].baseStats.spa = spd;
			this.data.Pokedex[i].baseStats.spd = spa;
		}
	}
};