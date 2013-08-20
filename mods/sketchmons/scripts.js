exports.BattleScripts = {
        init: function() {
                for (var i in this.data.Learnsets) {
                        var learnset = this.data.Learnsets[i].learnset;
                        var sk = learnset.sketch || [];
                        if (!sk.length) {
                            this.modData('Learnsets', i).learnset.sketch = ["5L0"];
                        }
                }
        }
};
