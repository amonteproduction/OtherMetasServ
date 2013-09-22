exports.BattleMovedex = {	
	"pixiepunch": {
		num: 1000,
		accuracy: 100,
		basePower: 85,
		category: "Physical",
		desc: "Deals damage to one adjacent target. Fails if the target did not select a damaging move for use this turn, or if the target moves before the user. Makes contact. Priority +1.",
		shortDesc: "Usually goes first. Fails if target is not attacking.",
		id: "pixiepunch",
		isViable: true,
		name: "Pixie Punch",
		pp: 10,
		priority: 0,
		isContact: true,
		secondary: false,
		target: "normal",
		type: "Fairy"
	},	
	"fairybeam": {
		num: 1000,
		accuracy: 100,
		basePower: 85,
		category: "Special",
		desc: "lies",
		shortDesc: "more lies.",
		id: "fairybeam",
		isViable: true,
		name: "Fairy Beam",
		pp: 15,
		priority: 0,
		secondary: false
		target: "normal",
		type: "Fairy"
	}	
};
