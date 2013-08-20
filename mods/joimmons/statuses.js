function clampIntRange(num, min, max) {
	num = Math.floor(num);
	if (num < min) num = min;
	if (typeof max !== 'undefined' && num > max) num = max;
	return num;
}
exports.BattleStatuses = {
		hail: {
			effectType: 'Weather',
			duration: 5,
			durationCallback: function(source, effect) {
				if (source && source.item === 'icyrock') {
					return 8;
				}
				return 5;
			},
			onStart: function(battle, source, effect) {
				if (effect && effect.effectType === 'Ability') {
					this.effectData.duration = 0;
					this.add('-weather', 'Hail', '[from] ability: '+effect, '[of] '+source);
				} else {
					this.add('-weather', 'Hail');
				}
			},
			onBasePower: function(basePower, attacker, defender, move) {
				if (move.type === 'Ice') {
					this.debug('hail boost to ice');
					return basePower * 1.5;
				}
			},
			onResidualOrder: 1,
			onResidual: function() {
				this.add('-weather', 'Hail', '[upkeep]');
				this.eachEvent('Weather');
			},
			onWeather: function(target) {
				this.damage(target.maxhp/16);
			},
			onEnd: function() {
				this.add('-weather', 'none');
			}
		},
		toxicrain: {
			effectType: 'Weather',
			duration: 5,
			durationCallback: function(source, effect) {
				if (source && source.item === 'damprock') {
					return 8;
				}
				return 5;
			},
			onModifyDef: function(def, pokemon) {
				if (!pokemon.hasType('Poison') && !pokemon.hasType('Steel') && !pokemon.hasType('Bug') && pokemon.ability !== 'poisonheal' && pokemon.ability !== 'toxicbody') {
					this.debug('toxic water lowers def');
					return def * 0.75;
				}
			},
			onModifySpD: function(spd, pokemon) {
				if (!pokemon.hasType('Poison') && !pokemon.hasType('Steel') && !pokemon.hasType('Bug') && pokemon.ability !== 'poisonheal' && pokemon.ability !== 'toxicbody') {
					this.debug('toxic water lowers spd');
					return spd * 0.75;
				}
			},
			onStart: function(battle, source, effect) {
				if (effect && effect.effectType === 'Ability') {
					this.effectData.duration = 0;
					this.add('-weather', 'ToxicRain', '[from] ability: '+effect, '[of] '+source);
				} else {
					this.add('-weather', 'ToxicRain');
				}
			},
			onModifyMove: function(move) {
				this.debug('Toxic Rain increases Poison-type accuracy');
				if (typeof move.accuracy !== 'number') return;
				if (move.type === 'Poison') move.accuracy = 100;
			},
			onResidualOrder: 1,
			onResidual: function() {
				this.add('-weather', 'ToxicRain', '[upkeep]');
				this.eachEvent('Weather');
			},
			onWeather: function(target) {
				this.damage(target.maxhp/16);
			},
			onEnd: function() {
				this.add('-weather', 'none');
			}
		}
};
