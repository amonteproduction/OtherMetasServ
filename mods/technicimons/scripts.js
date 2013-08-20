exports.BattleScripts = {
	init: function() {
		for (var i in this.data.Learnsets) {
			var learnset = this.data.Learnsets[i].learnset;
			var cc = learnset.closecombat || [];
			var sp = learnset.superpower || [];
			var mergedPhysical = cc.union(sp);
			if (mergedPhysical.length) {
				var ls = learnset.lowsweep || [];
				this.modData('Learnsets', i).learnset.lowsweep = ls.union(mergedPhysical);
			}
			var fb = learnset.focusblast || [];
			if (fb.length) {
				var as = learnset.aurasphere || [];
				this.modData('Learnsets', i).learnset.aurasphere = as.union(fb);
			}
		}
	}
};
