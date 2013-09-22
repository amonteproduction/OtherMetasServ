exports.BattleMovedex = {
	"pixiepunch": {
		num: 802,
	        accuracy: 100,
		basePower: 85,
		category: "Physical",
		desc: "Deals damage to one adjacent target by crashing into the target with a cloak of mystical energy.",
		shortDesc: "Deals damage and has recoil Basically Double Edge for faries.",
		id: "pixiepunch",
		isViable: true,
		name: "Pixie Punch",
		pp: 15,
		priority: 0,
		isContact: true,
		secondary: false,
		target: "normal",
		type: "Fairy"
	},        
        "fairybeam": {
                num: 837,
                accuracy: 100,
                basePower: 85,
                category: "Special",
                desc: "Deals massive damage to all adjacent foes.",
                shortDesc: "Damages all adjacent foes.",
                id: "fairybeam",
                name: "Fairy Beam",
                pp: 15,
                priority: 0,
                secondary: false,
                target: "allAdjacentFoes",
                type: "Fairy"
        }
};
