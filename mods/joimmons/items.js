exports.BattleItems = {
		"griseousorb": {
			id: "griseousorb",
			name: "Griseous Orb",
			spritenum: 180,
			fling: {
				basePower: 60
			},
			onBasePower: function(basePower, user, target, move) {
				if (user.template.num === 487 && (move.type === 'Ghost' || move.type === 'Dragon')) {
					return basePower * 1.2;
				}
			},
			onTakeItem: function(item, pokemon, source) {
				if ((source && source.template.num === 487) || pokemon.template.num === 487) {
					return false;
				}
			},
			onBasePower: function(basePower, user) {
				if (user.template.species === 'Mewtwo') return basePower * 1.5;
			},
			desc: "Raises the Base Power of Giratina's STAB moves 20% and transforms Giratina into Giratina-O when held. Cannot be removed or given to Giratina in battle. If Mewtwo holds this item, it's transformed into Mewtwo Orb."
		},
		"lightball": {
			id: "lightball",
			name: "Light Ball",
			spritenum: 251,
			fling: {
				basePower: 30,
				status: 'par'
			},
			onModifyAtk: function(atk, pokemon) {
				if (pokemon.template.species === 'Pikachu') {
					return atk * 2;
				}
				if (pokemon.template.species === 'Pichu') {
					return atk * 2.5;
				}
			},
			onModifySpA: function(spa, pokemon) {
				if (pokemon.template.species === 'Pikachu') {
					return spa * 2;
				}
				if (pokemon.template.species === 'Pichu') {
					return spa * 2.5;
				}
			},
			onModifyDef: function(def, pokemon) {
				if (pokemon.template.species === 'Pikachu') {
					return def * 2;
				}
				if (pokemon.template.species === 'Pichu') {
					return def * 2.5;
				}
			},
			onModifySpD: function(spd, pokemon) {
				if (pokemon.template.species === 'Pikachu') {
					return spd * 2;
				}
				if (pokemon.template.species === 'Pichu') {
					return spd * 2.5;
				}
			},
			desc: "Doubles Pikachu's Attack and Special Attack."
		},
		souldew: {
			inherit: true,
			onModifySpA: function(spa, pokemon) {
				if (pokemon.template.species === 'Latios' || pokemon.template.species === 'Latias' || pokemon.template.species === 'Dragonite') {
					return spa * 1.5;
				}
			},
			onModifySpD: function(spd, pokemon) {
				if (pokemon.template.species === 'Latios' || pokemon.template.species === 'Latias' || pokemon.template.species === 'Dragonite') {
					return spd * 1.5;
				}
			}
		},
		"stick": {
			id: "stick",
			name: "Stick",
			fling: {
				basePower: 60
			},
			spritenum: 475,
			// The Stick is a stand-in for a number of pokemon-exclusive items
			// introduced with Gen Next
			onModifyMove: function(move, user) {
				if (user.template.species === 'Farfetch\'d') {
					move.critRatio += 2;
				}
			},
			onModifyDef: function(def, pokemon) {
				if (pokemon.template.species === 'Spiritomb' && pokemon.ability !== 'shadowtag') {
					return def*1.5;
				}
			},
			onModifySpD: function(spd, pokemon) {
				if (pokemon.template.species === 'Spiritomb' && pokemon.ability !== 'shadowtag') {
					return spd*1.5;
				}
			},
			onModifySpe: function(spe, pokemon) {
				if (pokemon.template.species === 'Spiritomb' && pokemon.ability !== 'shadowtag') {
					return spe*2;
				}
			},
			onResidualOrder: 5,
			onResidualSubOrder: 2,
			desc: "Does a number of effects."
		}
};