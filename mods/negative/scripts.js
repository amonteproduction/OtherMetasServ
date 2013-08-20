exports.BattleScripts = {
	init: function() {
		for (var i in this.data.Pokedex) {
			var hp = 160 - this.data.Pokedex[i].baseStats.hp;
			var atk = 160 - this.data.Pokedex[i].baseStats.atk;
			var def = 160 - this.data.Pokedex[i].baseStats.def;
			var spa = 160 - this.data.Pokedex[i].baseStats.spa;
			var spd = 160 - this.data.Pokedex[i].baseStats.spd;
			var spe = 160 - this.data.Pokedex[i].baseStats.spe;
			this.data.Pokedex[i].baseStats.hp = (hp > 5)? (i === 'shedinja')? 1 : hp : 5;
			this.data.Pokedex[i].baseStats.atk = (atk > 5)? atk : 5;
			this.data.Pokedex[i].baseStats.def = (def > 5)? def : 5;
			this.data.Pokedex[i].baseStats.spa = (spa > 5)? spa : 5;
			this.data.Pokedex[i].baseStats.spd = (spd > 5)? spd : 5;
			this.data.Pokedex[i].baseStats.spe = (spe > 5)? spe : 5;
		}
	}
};