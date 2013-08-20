exports.Formats = [
	
	//OMs
	///////////////////////////////////////////////////////////////////
	
         {
		name: "Sketchmons",
		section: "Other Metagames",

                mod: 'sketchmons',
		ruleset: ['Pokemon', 'Standard', 'Evasion Abilities Clause', 'Team Preview'],
		banlist: ['Uber', 'Drizzle ++ Swift Swim', 'Soul Dew']
	},
	{
		name: "OU Monotype",
		section: "Other Metagames",

		ruleset: ['Pokemon', 'Standard', 'Same Type Clause', 'Evasion Abilities Clause', 'Team Preview'],
		banlist: ['Uber', 'Drizzle ++ Swift Swim', 'Soul Dew']
	},
	{
		name: "6 Move Battling (OU)",
		section: "Other Metagames",

		ruleset: ['Six Moves', 'Standard', 'Team Preview'],
		banlist: ['Uber', 'Drizzle ++ Swift Swim', 'Soul Dew']
	},
	/*{
		name: "Dusk Mod 2.0",
		section: "Other Metagames",

                mod: 'duskmodtwo',
		effectType: 'Format',
		ruleset: ['Pokemon', 'Standard', 'Evasion Abilities Clause', 'Team Preview'],
		banlist: ['Uber', 'Drizzle ++ Swift Swim', 'Soul Dew']
	},**/	
	{
		name: "Hard Core Metagame",
		section: "Other Metagames",

		ruleset: ['Pokemon', 'Standard', 'Evasion Abilities Clause', 'No Items'],
		banlist: ['Uber', 'Soul Dew', 'Stealth Rock', 'Spikes', 'Toxic Spikes', 'Regenerator', 'Water Absorb', 'Poison Heal', 'Volt Absorb',
		         'Speed Boost', 'Prankster', 'Substitute', 'Protect', 'Safeguard', 'Drizzle', 'Drought', 'Sand Stream', 'Snow Warning', 'Quiver Dance', 'Tailwind', 'Dragon Dance', 'Shift Gear', 'Tail Glow', 'Calm Mind', 'Bulk Up', 'Howl', 'Hone Claws', 'Swords Dance', 'Nasty Plot', 'Absorb', 'Mega Drain', 'Giga Drain', 'Drain Punch', 'Healing Wish', 'Wish', 'Lunar Dance', 'Healing Wish', 'Recover', 'Roost', 'Milk Drink', 'Softboiled'
		 ]
	},	
	{
		name: "Ability Exchange",
		section: "Other Metagames",

		ruleset: ['Pokemon', 'Ability Exchange Pokemon', 'Sleep Clause Mod', 'Species Clause', 'OHKO Clause', 'Moody Clause', 'Evasion Moves Clause', 'HP Percentage Mod', 'Team Preview'],
		banlist: ['Unreleased', 'Illegal', 'Ignore Illegal Abilities', 'Drizzle ++ Swift Swim', 'Soul Dew', 'Drought ++ Chlorophyll', 'Sand Stream ++ Sand Rush',
			'Mewtwo', 'Lugia', 'Ho-Oh', 'Blaziken', 'Kyogre', 'Groudon', 'Rayquaza', 'Deoxys', 'Deoxys-Attack', 'Deoxys-Defense', 'Deoxys-Speed', 'Dialga', 'Palkia', 'Giratina', 'Giratina-Origin', 'Manaphy', 'Darkrai', 'Shaymin-Sky',
			'Arceus', 'Arceus-Bug', 'Arceus-Dark', 'Arceus-Dragon', 'Arceus-Electric', 'Arceus-Fighting', 'Arceus-Fire', 'Arceus-Flying', 'Arceus-Ghost', 'Arceus-Grass', 'Arceus-Ground', 'Arceus-Ice', 'Arceus-Poison', 'Arceus-Psychic', 'Arceus-Rock', 'Arceus-Steel', 'Arceus-Water',
			'Excadrill', 'Tornadus-Therian', 'Thundurus', 'Reshiram', 'Zekrom', 'Landorus', 'Kyurem-White', 'Genesect', 'Slaking', 'Regigigas'
		]
	},
	{
		name: "Balanced Hackmons",
		section: "Other Metagames",

		ruleset: ['Pokemon', 'OHKO Clause', 'HP Percentage Mod'],
		banlist: ['Wonder Guard', 'Pure Power', 'Huge Power', 'Shadow Tag', 'Arena Trap']
	},
	{
		name: "Budgetmons",
		section: "Other Metagames",

		validateTeam: function(team, format) {
			var bst = 0;
			for (var i=0; i<team.length; i++) {
				var template = this.getTemplate(team[i].species);
				Object.values(template.baseStats, function(value) {
					bst += value;
				});
			}
			if (bst > 2300) return ['The combined BST of your team is greater than 2300.'];
		},
		ruleset: ['OU'],
		banlist: []
	},
	{
		name: "Challenge Cup",
		section: "Other Metagames",

		team: 'randomCC',
		ruleset: ['Pokemon', 'HP Percentage Mod']
	},
	{
		name: "Challenge Cup 1v1",
		section: "Other Metagames",

		team: 'randomCC',
		ruleset: ['Pokemon', 'Team Preview 1v1', 'HP Percentage Mod'],
		onBegin: function() {
			this.p1.pokemon = this.p1.pokemon.slice(0, 1);
			this.p1.pokemonLeft = this.p1.pokemon.length;
			this.p2.pokemon = this.p2.pokemon.slice(0, 1);
			this.p2.pokemonLeft = this.p2.pokemon.length;
		}
	},
	{
		name: "Clear Skies (OU)",
		section: "Other Metagames",

		ruleset: ['OU'],
		banlist: ['Drizzle', 'Drought', 'Sand Stream', 'Snow Warning']
	},
	{
		name: "Level 1 Meta",
		section: "Other Metagames",

		maxLevel: 1,
		ruleset: ['Pokemon', 'Standard', 'Evasion Abilities Clause', 'Team Preview'],
		banlist: ['Uber', 'Drizzle ++ Swift Swim', 'Soul Dew']
	},	
	{
		name: "Color Change Meta",
		section: "Other Metagames",

		validateSet: function(set) {
			set.ability = 'Color Change';
		},
		ruleset: ['Pokemon', 'Standard', 'Evasion Abilities Clause', 'Team Preview'],
		banlist: ['Mewtwo', 'Lugia', 'Ho-Oh', 'Kyogre', 'Groudon', 'Rayquaza', 'Deoxys', 'Deoxys-Attack', 'Deoxys-Defense', 'Deoxys-Speed', 'Dialga', 'Palkia', 'Giratina', 'Giratina-Origin', 'Darkrai', 'Shaymin-Sky',
			'Arceus', 'Arceus-Bug', 'Arceus-Dark', 'Arceus-Dragon', 'Arceus-Electric', 'Arceus-Fighting', 'Arceus-Fire', 'Arceus-Flying', 'Arceus-Ghost', 'Arceus-Grass', 'Arceus-Ground', 'Arceus-Ice', 'Arceus-Poison', 'Arceus-Psychic', 'Arceus-Rock', 'Arceus-Steel', 'Arceus-Water',
			'Tornadus-Therian', 'Thundurus', 'Reshiram', 'Zekrom', 'Kyurem-White', 'Genesect'
		]
	},
	{
		name: "Custom Game",
		section: "Other Metagames",

		debug: true,
		maxLevel: 1000,
		defaultLevel: 100,
		ruleset: ['HP Percentage Mod']
	},
	{
		name: "Custom Game (Preview)",
		section: "Other Metagames",

		ruleset: ['Pokemon', 'Team Preview', 'HP Percentage Mod']
	},
	{
		name: "GBU Singles",
		section: "Other Metagames",

		onBegin: function() {
			this.p1.pokemon = this.p1.pokemon.slice(0,3);
			this.p1.pokemonLeft = this.p1.pokemon.length;
			this.p2.pokemon = this.p2.pokemon.slice(0,3);
			this.p2.pokemonLeft = this.p2.pokemon.length;
		},
		maxForcedLevel: 50,
		ruleset: ['Pokemon', 'Species Clause', 'Item Clause', 'Team Preview GBU'],
		banlist: ['Unreleased', 'Illegal', 'Sky Drop', 'Dark Void', 'Soul Dew',
			'Mewtwo', 'Mew', 'Lugia', 'Ho-Oh', 'Celebi', 'Kyogre', 'Groudon', 'Rayquaza', 'Jirachi', 'Deoxys', 'Deoxys-Attack', 'Deoxys-Speed', 'Deoxys-Defense',
			'Chatot', 'Dialga', 'Palkia', 'Giratina', 'Giratina-Origin', 'Phione', 'Manaphy', 'Darkrai', 'Shaymin', 'Shaymin-Sky',
			'Arceus', 'Arceus-Bug', 'Arceus-Dark', 'Arceus-Dragon', 'Arceus-Electric', 'Arceus-Fighting', 'Arceus-Fire', 'Arceus-Flying', 'Arceus-Ghost', 'Arceus-Grass', 'Arceus-Ground', 'Arceus-Ice', 'Arceus-Poison', 'Arceus-Psychic', 'Arceus-Rock', 'Arceus-Steel', 'Arceus-Water',
			'Victini', 'Reshiram', 'Zekrom', 'Kyurem', 'Kyurem-Black', 'Kyurem-White', 'Keldeo', 'Keldeo-Resolute', 'Meloetta', 'Genesect'
		]
	},
	{
		name: "Glitchmons",
		section: "Other Metagames",

		ruleset: ['Pokemon', 'Team Preview', 'HP Percentage Mod'],
		banlist: ['Unreleased', 'Illegal'],
		mimicGlitch: true
	},
	{
		name: "GSC Modern",
		section: "Other Metagames",

		validateSet: function(set, format) {
			var problems = [];
			var template = this.getTemplate(set.species);
			if (template.gen > 2) problems.push(set.species + ' must come from Gen 1 or Gen 2.');
			return problems;
		},
		ruleset: ['Standard', 'Evasion Abilities Clause', 'Team Preview'],
		banlist: ['Mewtwo', 'Lugia', 'Ho-Oh', 'Venusaur', 'Drizzle ++ Swift Swim']
	},
	{
		name: "Monotype (OU)",
		section: "Other Metagames",

		ruleset: ['OU', 'Same Type Clause'],
		banlist: []
	},
	{
		name: "Negative Metagame",
		section: "Other Metagames",

		mod: 'negative',
		ruleset: ['OU'],
		banlist: ['Smeargle']
	},
	{
		name: "Offstat Metagame",
		section: "Other Metagames",

		ruleset: ['OU', 'Offstat Pokemon'],
		banlist: ['Stealth Rock', 'Spikes', 'Toxic Spikes', 'Kyurem-Black']
	},
	{
		name: "Random Battle",
		section: "Other Metagames",

		team: 'random',
		canUseRandomTeam: true,
		ruleset: ['PotD', 'Pokemon', 'Sleep Clause Mod', 'HP Percentage Mod']
	},
	{
		name: "Sky Battles",
		section: "Other Metagames",

		validateSet: function(set) {
			var template = this.getTemplate(set.species || set.name);
			if (template.types.indexOf('Flying') === -1 && set.ability !== 'Levitate') {
				return [set.species+" is not a Flying type and does not have the ability Levitate."];
			}
		},
		ruleset: ['Pokemon', 'Standard', 'Evasion Abilities Clause', 'Team Preview'],
		banlist: ['Drizzle ++ Swift Swim', 'Soul Dew', 'Iron Ball', 'Gravity', 'Smack Down', 'Skill Swap', 'Entrainment', 'Gastro Acid', 'Simple Beam', 'Worry Seed',
			'Lugia', 'Ho-Oh', 'Rayquaza', 'Giratina', 'Giratina-Origin', 'Shaymin-Sky', 'Arceus-Flying', 'Thundurus'
		]
	},
	{
		name: "Slowmons",
		section: "Other Metagames",

		onModifySpe: function(spe) {
			return -spe;
		},
		onModifyMove: function(move) {
			if (move.id === 'trickroom') {
				move.effect = {
					duration: 5,
					onStart: function(target, source) {
						this.add('-fieldstart', 'move: Trick Room', '[of] '+source);
					},
					onModifySpePriority: -100,
					onModifySpe: function(spe) {
						return spe;
					},
					onResidualOrder: 23,
					onEnd: function() {
						this.add('-fieldend', 'move: Trick Room');
					}
				};
			}
		},
		ruleset: ['Pokemon', 'Slowmons Pokemon', 'Standard', 'Evasion Abilities Clause', 'Team Preview'],
		banlist: ['Mewtwo', 'Lugia', 'Ho-Oh', 'Kyogre', 'Groudon', 'Rayquaza', 'Deoxys', 'Deoxys-Attack', 'Deoxys-Defense', 'Deoxys-Speed', 'Dialga', 'Palkia', 'Giratina', 'Giratina-Origin', 'Manaphy', 'Darkrai', 'Shaymin-Sky',
			'Arceus', 'Arceus-Bug', 'Arceus-Dark', 'Arceus-Dragon', 'Arceus-Electric', 'Arceus-Fighting', 'Arceus-Fire', 'Arceus-Flying', 'Arceus-Ghost', 'Arceus-Grass', 'Arceus-Ground', 'Arceus-Ice', 'Arceus-Poison', 'Arceus-Psychic', 'Arceus-Rock', 'Arceus-Steel', 'Arceus-Water',
			'Tornadus-Therian', 'Thundurus', 'Reshiram', 'Zekrom', 'Landorus', 'Kyurem-White', 'Genesect'
		]
	},
	{
		name: "Stat Exchange",
		section: "Other Metagames",

		mod: 'statexchange',
		ruleset: ['OU'],
		banlist: []
	},
	{
		name: "Suicide Cup",
		section: "Other Metagames",

		ruleset: ['OU', 'Suicide Pokemon'],
		banlist: ['Shedinja', 'Self-Destruct', 'Explosion', 'Memento', 'Final Gambit', 'Healing Wish', 'Heal Pulse', 'Lunar Dance', 'Dream Eater', 'Snore', 'Frustration', 'Return', 'Fake Out', 'Natural Gift', 'Magic Room']
	},
	{
		name: "TechniciMons",
		section: "Other Metagames",

		mod: 'technicimons',
		ruleset: ['Pokemon', 'TechniciMons Pokemon', 'Standard', 'Evasion Abilities Clause', 'Team Preview'],
		banlist: ['Drizzle ++ Swift Swim', 'Soul Dew', 'Heat Crash', 'Heavy Slam',
			'Mewtwo', 'Lugia', 'Ho-Oh', 'Kyogre', 'Groudon', 'Rayquaza', 'Deoxys', 'Deoxys-Attack', 'Deoxys-Defense', 'Deoxys-Speed', 'Dialga', 'Palkia', 'Giratina', 'Giratina-Origin', 'Darkrai', 'Shaymin-Sky',
			'Arceus', 'Arceus-Bug', 'Arceus-Dark', 'Arceus-Dragon', 'Arceus-Electric', 'Arceus-Fighting', 'Arceus-Fire', 'Arceus-Flying', 'Arceus-Ghost', 'Arceus-Grass', 'Arceus-Ground', 'Arceus-Ice', 'Arceus-Poison', 'Arceus-Psychic', 'Arceus-Rock', 'Arceus-Steel', 'Arceus-Water',
			'Reshiram', 'Zekrom', 'Kyurem-White'
		]
	},
	{
		name: "Tier Shift",
		section: "Other Metagames",

		mod: 'tiershift',
		ruleset: ['OU'],
		banlist: []
	},
	{
		name: "Type Chart Swap",
		section: "Other Metagames",

		mod: 'typechartswap',
		ruleset: ['OU'],
		banlist: []
	},
	{
		name: "Wonkymons",
		section: "Other Metagames",

		mod: 'wonkymons',
		ruleset: ['Pokemon', 'Standard', 'Evasion Abilities Clause', 'Team Preview'],
		banlist: ['Elekid ++ Wonder Guard', 'Moody', 'Soul Dew']
	},
	{
		name: "Challenge Cup",
		section: "Other Metagames",

		team: 'randomCC',
		canUseRandomTeam: true,
		ruleset: ['Pokemon', 'HP Percentage Mod']
	},
	{
		name: "Challenge Cup 1-vs-1",
		section: "Other Metagames",

		team: 'randomCC',
		canUseRandomTeam: true,
		ruleset: ['Pokemon', 'Team Preview 1v1', 'HP Percentage Mod'],
		onBegin: function() {
			this.debug('Cutting down to 1');
			this.p1.pokemon = this.p1.pokemon.slice(0, 1);
			this.p1.pokemonLeft = this.p1.pokemon.length;
			this.p2.pokemon = this.p2.pokemon.slice(0, 1);
			this.p2.pokemonLeft = this.p2.pokemon.length;
		}
	},
	{
		name: "Hackmons",
		section: "Other Metagames",

		ruleset: ['Pokemon'],
		banlist: []
	},
	{
		name: "Balanced Hackmons",
		section: "Other Metagames",

		ruleset: ['Pokemon', 'OHKO Clause'],
		banlist: ['Wonder Guard', 'Pure Power', 'Huge Power', 'Shadow Tag', 'Arena Trap']
	},
	{
		name: "Gen-NEXT OU",
		section: "Other Metagames",

		mod: 'gennext',
		ruleset: ['Pokemon', 'Standard NEXT', 'Team Preview'],
		banlist: ['Uber']
	},
	{
		name: "Glitchmons",
		section: "Other Metagames",

		ruleset: ['Pokemon', 'Team Preview', 'HP Percentage Mod'],
		banlist: ['Illegal', 'Unreleased'],
		mimicGlitch: true
	},
	{
		name: "LC Ubers",
		section: "Other Metagames",

		maxLevel: 5,
		ruleset: ['Pokemon', 'Standard', 'Team Preview', 'Little Cup'],
		banlist: ['Sonicboom', 'Dragon Rage', 'Berry Juice', 'Soul Dew']
	},
	{
		name: "LC UU",
		section: "Other Metagames",

		maxLevel: 5,
		ruleset: ['LC'],
		banlist: ['Abra', 'Aipom', 'Archen', 'Axew', 'Bronzor', 'Chinchou', 'Clamperl', 'Cottonee', 'Cranidos', 'Croagunk', 'Diglett', 'Dratini', 'Drifloon', 'Drilbur', 'Dwebble', 'Elekid', 'Ferroseed', 'Foongus', 'Frillish', 'Gastly', 'Hippopotas', 'Houndour', 'Koffing', 'Larvesta', 'Lileep', 'Machop', 'Magnemite', 'Mienfoo', 'Misdreavus', 'Murkrow', 'Onix', 'Pawniard', 'Ponyta', 'Porygon', 'Riolu', 'Sandshrew', 'Scraggy', 'Shellder', 'Slowpoke', 'Snover', 'Staryu', 'Timburr', 'Tirtouga']
	},
	{
		name: "Tier Shift",
		section: 'Other Metagames',

		mod: 'tiershift',
		ruleset: ['Pokemon', 'Standard', 'Evasion Abilities Clause', 'Team Preview'],
		banlist: ['Uber', 'Drizzle ++ Swift Swim', 'Soul Dew']
	},
	{
		name: "1v1",
		section: 'Other Metagames',

		onBegin: function() {
			this.p1.pokemon = this.p1.pokemon.slice(0,1);
			this.p1.pokemonLeft = this.p1.pokemon.length;
			this.p2.pokemon = this.p2.pokemon.slice(0,1);
			this.p2.pokemonLeft = this.p2.pokemon.length;
		},
		ruleset: ['Pokemon', 'Standard'],
		banlist: ['Unreleased', 'Illegal', 'Soul Dew',
			'Arceus', 'Arceus-Bug', 'Arceus-Dark', 'Arceus-Dragon', 'Arceus-Electric', 'Arceus-Fighting', 'Arceus-Fire', 'Arceus-Flying', 'Arceus-Ghost', 'Arceus-Grass', 'Arceus-Ground', 'Arceus-Ice', 'Arceus', 'Arceus-Poison', 'Arceus-Psychic', 'Arceus-Rock', 'Arceus-Steel', 'Arceus-Water',
			'Darkrai', 
			'Deoxys', 'Deoxys-Attack',
			'Dialga', 
			'Giratina', 'Giratina-Origin', 
			'Groudon', 
			'Ho-Oh', 
			'Kyogre', 
			'Kyurem-White', 
			'Lugia', 
			'Mewtwo',
			'Palkia', 
			'Rayquaza', 
			'Reshiram', 
			'Shaymin-Sky', 
			'Zekrom',
			'Memento', 'Explosion', 'Perish Song', 'Destiny Bond', 'Healing Wish', 'Selfdestruct', 'Lunar Dance', 'Final Gambit'
		]
	},
	{
		name: "PU",
		section: "Other Metagames",

		effectType: 'Format',
		ruleset: ['NU'],
		banlist: ["Charizard", "Wartortle", "Kadabra", "Golem", "Haunter", "Exeggutor", "Weezing", "Kangaskhan", "Pinsir", "Lapras", "Ampharos", "Misdreavus", "Piloswine", "Miltank", "Ludicolo", "Swellow", "Gardevoir", "Ninjask", "Torkoal", "Cacturne", "Altaria", "Armaldo", "Gorebyss", "Regirock", "Regice", "Bastiodon", "Floatzel", "Drifblim", "Skuntank", "Lickilicky", "Probopass", "Rotom-Fan", "Samurott", "Musharna", "Gurdurr", "Sawk", "Carracosta", "Garbodor", "Sawsbuck", "Alomomola", "Golurk", "Braviary", "Electabuzz", "Electrode", "Liepard", "Tangela", "Eelektross", "Ditto", "Seismitoad", "Zangoose", "Roselia", "Serperior", "Metang", "Tauros", "Cradily", "Primeape", "Scolipede", "Jynx", "Basculin", "Gigalith", "Camerupt", "Golbat"]
	},

	// OM Doubles
	///////////////////////////////////////////////////////////////////

	{
		name: "Sketchmons Doubles",
		section: "Other Metagames Doubles",

                mod: 'sketchmons',
		gameType: 'doubles',		
		ruleset: ['Pokemon', 'Standard', 'Evasion Abilities Clause', 'Team Preview'],
		banlist: ['Uber', 'Drizzle ++ Swift Swim', 'Soul Dew']
	},
        {
		name: "OU Monotype Doubles",
		section: "Other Metagames Doubles",

		gameType: 'doubles',		
		ruleset: ['Pokemon', 'Standard', 'Same Type Clause', 'Evasion Abilities Clause', 'Team Preview'],
		banlist: ['Uber', 'Drizzle ++ Swift Swim', 'Soul Dew']
	},
	{
		name: "6 Move Battling (OU) Doubles",
		section: "Other Metagames Doubles",

		gameType: 'doubles',	
		ruleset: ['Six Moves', 'Standard', 'Team Preview'],
		banlist: ['Uber', 'Drizzle ++ Swift Swim', 'Soul Dew']
	},
	/*'duskmod2.0': {
		name: "Dusk Mod 2.0",
		section: "Other Metagames",

                mod: 'duskmodtwo',
		effectType: 'Format',
		challengeDefault: true,
		rated: true,
		challengeShow: true,
		searchShow: true,
		isTeambuilderFormat: true,
		ruleset: ['Pokemon', 'Standard', 'Evasion Abilities Clause', 'Team Preview'],
		banlist: ['Uber', 'Drizzle ++ Swift Swim', 'Soul Dew']
	},**/	
	{
		name: "Hard Core Metagame Doubles",
		section: "Other Metagames Doubles",

		gameType: 'doubles',
		ruleset: ['Pokemon', 'Standard', 'Evasion Abilities Clause', 'No Items'],
		banlist: ['Uber', 'Soul Dew', 'Stealth Rock', 'Spikes', 'Toxic Spikes', 'Regenerator', 'Water Absorb', 'Poison Heal', 'Volt Absorb',
		         'Speed Boost', 'Prankster', 'Substitute', 'Protect', 'Safeguard', 'Drizzle', 'Drought', 'Sand Stream', 'Snow Warning', 'Quiver Dance', 'Tailwind', 'Dragon Dance', 'Shift Gear', 'Tail Glow', 'Calm Mind', 'Bulk Up', 'Howl', 'Hone Claws', 'Swords Dance', 'Nasty Plot', 'Absorb', 'Mega Drain', 'Giga Drain', 'Drain Punch', 'Healing Wish', 'Wish', 'Lunar Dance', 'Healing Wish', 'Recover', 'Roost', 'Milk Drink', 'Softboiled'
		 ]
	},	
	{
		name: "Ability Exchange Doubles",
		section: "Other Metagames Doubles",

		gameType: 'doubles',
		ruleset: ['Pokemon', 'Ability Exchange Pokemon', 'Sleep Clause Mod', 'Species Clause', 'OHKO Clause', 'Moody Clause', 'Evasion Moves Clause', 'HP Percentage Mod', 'Team Preview'],
		banlist: ['Unreleased', 'Illegal', 'Ignore Illegal Abilities', 'Drizzle ++ Swift Swim', 'Soul Dew', 'Drought ++ Chlorophyll', 'Sand Stream ++ Sand Rush',
			'Mewtwo', 'Lugia', 'Ho-Oh', 'Blaziken', 'Kyogre', 'Groudon', 'Rayquaza', 'Deoxys', 'Deoxys-Attack', 'Deoxys-Defense', 'Deoxys-Speed', 'Dialga', 'Palkia', 'Giratina', 'Giratina-Origin', 'Manaphy', 'Darkrai', 'Shaymin-Sky',
			'Arceus', 'Arceus-Bug', 'Arceus-Dark', 'Arceus-Dragon', 'Arceus-Electric', 'Arceus-Fighting', 'Arceus-Fire', 'Arceus-Flying', 'Arceus-Ghost', 'Arceus-Grass', 'Arceus-Ground', 'Arceus-Ice', 'Arceus-Poison', 'Arceus-Psychic', 'Arceus-Rock', 'Arceus-Steel', 'Arceus-Water',
			'Excadrill', 'Tornadus-Therian', 'Thundurus', 'Reshiram', 'Zekrom', 'Landorus', 'Kyurem-White', 'Genesect', 'Slaking', 'Regigigas'
		]
	},
	{
		name: "Balanced Hackmons Doubles",
		section: "Other Metagames Doubles",

		gameType: 'doubles',
		ruleset: ['Pokemon', 'OHKO Clause', 'HP Percentage Mod'],
		banlist: ['Wonder Guard', 'Pure Power', 'Huge Power', 'Shadow Tag', 'Arena Trap']
	},
	{
		name: "Budgetmons Doubles",
		section: "Other Metagames Doubles",

		gameType: 'doubles',
		validateTeam: function(team, format) {
			var bst = 0;
			for (var i=0; i<team.length; i++) {
				var template = this.getTemplate(team[i].species);
				Object.values(template.baseStats, function(value) {
					bst += value;
				});
			}
			if (bst > 2300) return ['The combined BST of your team is greater than 2300.'];
		},
		ruleset: ['OU'],
		banlist: []
	},
	{
		name: "CAP Doubles",
		section: "Other Metagames Doubles",

		gameType: 'doubles',
		ruleset: ['CAP Pokemon', 'Standard', 'Evasion Abilities Clause', 'Team Preview'],
		banlist: ['Uber', 'Drizzle ++ Swift Swim', 'Soul Dew']
	},
	{
		name: "Challenge Cup Doubles",
		section: "Other Metagames Doubles",

		gameType: 'doubles',
		team: 'randomCC',
		canUseRandomTeam: true,
		ruleset: ['Pokemon', 'HP Percentage Mod']
	},
	{
		name: "Challenge Cup 1v1 Doubles",
		section: "Other Metagames Doubles",

		gameType: 'doubles',
		team: 'randomCC',
		canUseRandomTeam: true,
		ruleset: ['Pokemon', 'Team Preview 1v1', 'HP Percentage Mod'],
		onBegin: function() {
			this.p1.pokemon = this.p1.pokemon.slice(0, 1);
			this.p1.pokemonLeft = this.p1.pokemon.length;
			this.p2.pokemon = this.p2.pokemon.slice(0, 1);
			this.p2.pokemonLeft = this.p2.pokemon.length;
		}
	},
	{
		name: "Clear Skies (OU) Doubles",
		section: "Other Metagames Doubles",

		gameType: 'doubles',
		ruleset: ['OU'],
		banlist: ['Drizzle', 'Drought', 'Sand Stream', 'Snow Warning']
	},
	{
		name: "Level 1 Meta Doubles",
		section: "Other Metagames Doubles",

		gameType: 'doubles',
		maxLevel: 1,
		ruleset: ['Pokemon', 'Standard', 'Evasion Abilities Clause', 'Team Preview'],
		banlist: ['Uber', 'Drizzle ++ Swift Swim', 'Soul Dew']
	},	
	{
		name: "Color Change Meta Doubles",
		section: "Other Metagames Doubles",

		gameType: 'doubles',
		validateSet: function(set) {
			set.ability = 'Color Change';
		},
		ruleset: ['Pokemon', 'Standard', 'Evasion Abilities Clause', 'Team Preview'],
		banlist: ['Mewtwo', 'Lugia', 'Ho-Oh', 'Kyogre', 'Groudon', 'Rayquaza', 'Deoxys', 'Deoxys-Attack', 'Deoxys-Defense', 'Deoxys-Speed', 'Dialga', 'Palkia', 'Giratina', 'Giratina-Origin', 'Darkrai', 'Shaymin-Sky',
			'Arceus', 'Arceus-Bug', 'Arceus-Dark', 'Arceus-Dragon', 'Arceus-Electric', 'Arceus-Fighting', 'Arceus-Fire', 'Arceus-Flying', 'Arceus-Ghost', 'Arceus-Grass', 'Arceus-Ground', 'Arceus-Ice', 'Arceus-Poison', 'Arceus-Psychic', 'Arceus-Rock', 'Arceus-Steel', 'Arceus-Water',
			'Tornadus-Therian', 'Thundurus', 'Reshiram', 'Zekrom', 'Kyurem-White', 'Genesect'
		]
	},
	{
		name: "GBU Doubles",
		section: "Other Metagames Doubles",

		gameType: 'doubles',
		onBegin: function() {
			this.p1.pokemon = this.p1.pokemon.slice(0,3);
			this.p1.pokemonLeft = this.p1.pokemon.length;
			this.p2.pokemon = this.p2.pokemon.slice(0,3);
			this.p2.pokemonLeft = this.p2.pokemon.length;
		},
		maxForcedLevel: 50,
		ruleset: ['Pokemon', 'Species Clause', 'Item Clause', 'Team Preview GBU'],
		banlist: ['Unreleased', 'Illegal', 'Sky Drop', 'Dark Void', 'Soul Dew',
			'Mewtwo', 'Mew', 'Lugia', 'Ho-Oh', 'Celebi', 'Kyogre', 'Groudon', 'Rayquaza', 'Jirachi', 'Deoxys', 'Deoxys-Attack', 'Deoxys-Speed', 'Deoxys-Defense',
			'Chatot', 'Dialga', 'Palkia', 'Giratina', 'Giratina-Origin', 'Phione', 'Manaphy', 'Darkrai', 'Shaymin', 'Shaymin-Sky',
			'Arceus', 'Arceus-Bug', 'Arceus-Dark', 'Arceus-Dragon', 'Arceus-Electric', 'Arceus-Fighting', 'Arceus-Fire', 'Arceus-Flying', 'Arceus-Ghost', 'Arceus-Grass', 'Arceus-Ground', 'Arceus-Ice', 'Arceus-Poison', 'Arceus-Psychic', 'Arceus-Rock', 'Arceus-Steel', 'Arceus-Water',
			'Victini', 'Reshiram', 'Zekrom', 'Kyurem', 'Kyurem-Black', 'Kyurem-White', 'Keldeo', 'Keldeo-Resolute', 'Meloetta', 'Genesect'
		]
	},
	{
		name: "Glitchmons Doubles",
		section: "Other Metagames Doubles",

		gameType: 'doubles',
		ruleset: ['Pokemon', 'Team Preview', 'HP Percentage Mod'],
		banlist: ['Unreleased', 'Illegal'],
		mimicGlitch: true
	},
	{
		name: "GSC Modern Doubles",
		section: "Other Metagames Doubles",

		gameType: 'doubles',
		validateSet: function(set, format) {
			var problems = [];
			var template = this.getTemplate(set.species);
			if (template.gen > 2) problems.push(set.species + ' must come from Gen 1 or Gen 2.');
			return problems;
		},
		ruleset: ['Standard', 'Evasion Abilities Clause', 'Team Preview'],
		banlist: ['Mewtwo', 'Lugia', 'Ho-Oh', 'Venusaur', 'Drizzle ++ Swift Swim']
	},
	{
		name: "Monotype (OU) Doubles",
		section: "Other Metagames Doubles",

		gameType: 'doubles',
		ruleset: ['OU', 'Same Type Clause'],
		banlist: []
	},
	{
		name: "Negative Metagame Doubles",
		section: "Other Metagames Doubles",

		mod: 'negative',
		gameType: 'doubles',
		ruleset: ['OU'],
		banlist: ['Smeargle']
	},
	{
		name: "Offstat Doubles",
		section: "Other Metagames Doubles",

		gameType: 'doubles',
		ruleset: ['OU', 'Offstat Pokemon'],
		banlist: ['Stealth Rock', 'Spikes', 'Toxic Spikes', 'Kyurem-Black']
	},
	{
		name: "Sky Battles Doubles",
		section: "Other Metagames Doubles",

		gameType: 'doubles',
		validateSet: function(set) {
			var template = this.getTemplate(set.species || set.name);
			if (template.types.indexOf('Flying') === -1 && set.ability !== 'Levitate') {
				return [set.species+" is not a Flying type and does not have the ability Levitate."];
			}
		},
		ruleset: ['Pokemon', 'Standard', 'Evasion Abilities Clause', 'Team Preview'],
		banlist: ['Drizzle ++ Swift Swim', 'Soul Dew', 'Iron Ball', 'Gravity', 'Smack Down', 'Skill Swap', 'Entrainment', 'Gastro Acid', 'Simple Beam', 'Worry Seed',
			'Lugia', 'Ho-Oh', 'Rayquaza', 'Giratina', 'Giratina-Origin', 'Shaymin-Sky', 'Arceus-Flying', 'Thundurus'
		]
	},
	{
		name: "Slowmons Doubles",
		section: "Other Metagames Doubles",

		gameType: 'doubles',
		onModifySpe: function(spe) {
			return -spe;
		},
		onModifyMove: function(move) {
			if (move.id === 'trickroom') {
				move.effect = {
					duration: 5,
					onStart: function(target, source) {
						this.add('-fieldstart', 'move: Trick Room', '[of] '+source);
					},
					onModifySpePriority: -100,
					onModifySpe: function(spe) {
						return spe;
					},
					onResidualOrder: 23,
					onEnd: function() {
						this.add('-fieldend', 'move: Trick Room');
					}
				};
			}
		},
		ruleset: ['Pokemon', 'Slowmons Pokemon', 'Standard', 'Evasion Abilities Clause', 'Team Preview'],
		banlist: ['Mewtwo', 'Lugia', 'Ho-Oh', 'Kyogre', 'Groudon', 'Rayquaza', 'Deoxys', 'Deoxys-Attack', 'Deoxys-Defense', 'Deoxys-Speed', 'Dialga', 'Palkia', 'Giratina', 'Giratina-Origin', 'Manaphy', 'Darkrai', 'Shaymin-Sky',
			'Arceus', 'Arceus-Bug', 'Arceus-Dark', 'Arceus-Dragon', 'Arceus-Electric', 'Arceus-Fighting', 'Arceus-Fire', 'Arceus-Flying', 'Arceus-Ghost', 'Arceus-Grass', 'Arceus-Ground', 'Arceus-Ice', 'Arceus-Poison', 'Arceus-Psychic', 'Arceus-Rock', 'Arceus-Steel', 'Arceus-Water',
			'Tornadus-Therian', 'Thundurus', 'Reshiram', 'Zekrom', 'Landorus', 'Kyurem-White', 'Genesect'
		]
	},
	{
		name: "Stat Exchange Doubles",
		section: "Other Metagames Doubles",

		mod: 'statexchange',
		gameType: 'doubles',
		ruleset: ['OU'],
		banlist: []
	},
	{
		name: "Suicide Cup Doubles",
		section: "Other Metagames Doubles",

		gameType: 'doubles',
		ruleset: ['OU', 'Suicide Pokemon'],
		banlist: ['Shedinja', 'Self-Destruct', 'Explosion', 'Memento', 'Final Gambit', 'Healing Wish', 'Heal Pulse', 'Lunar Dance', 'Dream Eater', 'Snore', 'Frustration', 'Return', 'Fake Out', 'Natural Gift', 'Magic Room']
	},
	{
		name: "TechniciMons Doubles",
		section: "Other Metagames Doubles",

		mod: 'technicimons',
		gameType: 'doubles',
		ruleset: ['Pokemon', 'TechniciMons Pokemon', 'Standard', 'Evasion Abilities Clause', 'Team Preview'],
		banlist: ['Drizzle ++ Swift Swim', 'Soul Dew', 'Heat Crash', 'Heavy Slam',
			'Mewtwo', 'Lugia', 'Ho-Oh', 'Kyogre', 'Groudon', 'Rayquaza', 'Deoxys', 'Deoxys-Attack', 'Deoxys-Defense', 'Deoxys-Speed', 'Dialga', 'Palkia', 'Giratina', 'Giratina-Origin', 'Darkrai', 'Shaymin-Sky',
			'Arceus', 'Arceus-Bug', 'Arceus-Dark', 'Arceus-Dragon', 'Arceus-Electric', 'Arceus-Fighting', 'Arceus-Fire', 'Arceus-Flying', 'Arceus-Ghost', 'Arceus-Grass', 'Arceus-Ground', 'Arceus-Ice', 'Arceus-Poison', 'Arceus-Psychic', 'Arceus-Rock', 'Arceus-Steel', 'Arceus-Water',
			'Reshiram', 'Zekrom', 'Kyurem-White'
		]
	},
	{
		name: "Tier Shift Doubles",
		section: "Other Metagames Doubles",

		mod: 'tiershift',
		gameType: 'doubles',
		ruleset: ['OU'],
		banlist: []
	},
	{
		name: "Type Chart Swap Doubles",
		section: "Other Metagames Doubles",

		mod: 'typechartswap',
		gameType: 'doubles',
		ruleset: ['OU'],
		banlist: []
	},
	{
		name: "Wonkymons Doubles",
		section: "Other Metagames Doubles",

		mod: 'wonkymons',
		gameType: 'doubles',
		ruleset: ['Pokemon', 'Standard', 'Evasion Abilities Clause', 'Team Preview'],
		banlist: ['Elekid ++ Wonder Guard', 'Moody', 'Soul Dew']
	},
	{
		name: "Hackmons Doubles",
		section: "Other Metagames Doubles",

		gameType: 'doubles',
		ruleset: ['Pokemon'],
		banlist: []
	},
	{
		name: "Balanced Hackmons Doubles",
		section: "Other Metagames Doubles",

		gameType: 'doubles',
		ruleset: ['Pokemon', 'OHKO Clause'],
		banlist: ['Wonder Guard', 'Pure Power', 'Huge Power', 'Shadow Tag', 'Arena Trap']
	},
        {
		name: "Gen-NEXT Doubles",
		section: "Other Metagames Doubles",

		mod: 'gennext',
		gameType: 'doubles',
		ruleset: ['Pokemon', 'Standard NEXT', 'Team Preview'],
		banlist: ['Uber']
	},
	{
		name: "LC Ubers Doubles",
		section: "Other Metagames Doubles",

		gameType: 'doubles',
		maxLevel: 5,
		ruleset: ['Pokemon', 'Standard', 'Team Preview', 'Little Cup'],
		banlist: ['Sonicboom', 'Dragon Rage', 'Berry Juice', 'Soul Dew']
	},
	{
		name: "LC UU Doubles",
		section: "Other Metagames Doubles",

		gameType: 'doubles',
		maxLevel: 5,
		ruleset: ['LC'],
		banlist: ['Abra', 'Aipom', 'Archen', 'Axew', 'Bronzor', 'Chinchou', 'Clamperl', 'Cottonee', 'Cranidos', 'Croagunk', 'Diglett', 'Dratini', 'Drifloon', 'Drilbur', 'Dwebble', 'Elekid', 'Ferroseed', 'Foongus', 'Frillish', 'Gastly', 'Hippopotas', 'Houndour', 'Koffing', 'Larvesta', 'Lileep', 'Machop', 'Magnemite', 'Mienfoo', 'Misdreavus', 'Murkrow', 'Onix', 'Pawniard', 'Ponyta', 'Porygon', 'Riolu', 'Sandshrew', 'Scraggy', 'Shellder', 'Slowpoke', 'Snover', 'Staryu', 'Timburr', 'Tirtouga']
	},
	 {
		name: "PU Doubles",
		section: "Other Metagames Doubles",

		gameType: 'doubles',
		ruleset: ['NU'],
		banlist: ["Charizard", "Wartortle", "Kadabra", "Golem", "Haunter", "Exeggutor", "Weezing", "Kangaskhan", "Pinsir", "Lapras", "Ampharos", "Misdreavus", "Piloswine", "Miltank", "Ludicolo", "Swellow", "Gardevoir", "Ninjask", "Torkoal", "Cacturne", "Altaria", "Armaldo", "Gorebyss", "Regirock", "Regice", "Bastiodon", "Floatzel", "Drifblim", "Skuntank", "Lickilicky", "Probopass", "Rotom-Fan", "Samurott", "Musharna", "Gurdurr", "Sawk", "Carracosta", "Garbodor", "Sawsbuck", "Alomomola", "Golurk", "Braviary", "Electabuzz", "Electrode", "Liepard", "Tangela", "Eelektross", "Ditto", "Seismitoad", "Zangoose", "Roselia", "Serperior", "Metang", "Tauros", "Cradily", "Primeape", "Scolipede", "Jynx", "Basculin", "Gigalith", "Camerupt", "Golbat"]
	},

	// Dev. OMs
	///////////////////////////////////////////////////////////////////

	{
		name: "Triples Dev",
		section: 'Other Metas IN DEVELOPMENT',

		gameType: 'triples',
		ruleset: ['Pokemon', 'Team Preview', 'Sleep Clause Mod', 'Species Clause', 'OHKO Clause', 'Moody Clause', 'Evasion Moves Clause', 'Evasion Abilities Clause', 'HP Percentage Mod'],
		banlist: ['Unreleased', 'Illegal', 'Sky Drop', 'Dark Void', 'Soul Dew',
			'Mewtwo',
			'Lugia',
			'Ho-Oh',
			'Kyogre',
			'Groudon',
			'Rayquaza',
			'Dialga',
			'Palkia',
			'Giratina', 'Giratina-Origin',
			'Arceus', 'Arceus-Bug', 'Arceus-Dark', 'Arceus-Dragon', 'Arceus-Electric', 'Arceus-Fighting', 'Arceus-Fire', 'Arceus-Flying', 'Arceus-Ghost', 'Arceus-Grass', 'Arceus-Ground', 'Arceus-Ice', 'Arceus', 'Arceus-Poison', 'Arceus-Psychic', 'Arceus-Rock', 'Arceus-Steel', 'Arceus-Water',
			'Reshiram',
			'Zekrom',
			'Kyurem-White'
		]
	}
];	
