exports.BattleMovedex = {
		"blackice": {
			num: 1000,
			accuracy: true,
			basePower: 0,
			category: "Status",
			desc: "Sets up a hazard on the foe's side of the field, damaging each foe that switches in. Can be used only once before failing. Foes lose 1/64, 1/32, 1/16, 1/8, or 1/4 of their maximum HP, rounded down, based on their weakness to the Ice-type; 0.25x, 0.5x, neutral, 2x, or 4x, respectively. Can be removed from the foe's side if any foe uses Rapid Spin or is hit by Defog. Pokemon protected by Magic Coat or the Ability Magic Bounce are unaffected and instead use this move themselves.",
			shortDesc: "Hurts foes on switch-in. Factors Ice weakness.",
			id: "blackice",
			isViable: true,
			name: "Black Ice",
			pp: 20,
			priority: 0,
			isBounceable: true,
			sideCondition: 'blackice',
			effect: {
				// this is a side condition
				onStart: function(side) {
					this.add('-sidestart',side,'move: Black Ice');
				},
				onSwitchIn: function(pokemon) {
					var typeMod = this.getEffectiveness('Ice', pokemon);
					var factor = 16;
					if (typeMod == 1) factor = 8;
					if (typeMod >= 2) factor = 4;
					if (typeMod == -1) factor = 32;
					if (typeMod <= -2) factor = 64;
					var damage = this.damage(pokemon.maxhp/factor);
				}
			},
			secondary: false,
			target: "foeSide",
			type: "Ice"
		},
		blastburn: {
			inherit: true,
			basePower: 100,
			willCrit: true
		},
		frenzyplant: {
			inherit: true,
			basePower: 100,
			willCrit: true
		},
		focusblast: {
			inherit: true,
			accuracy: 85
		},
		gigaimpact: {
			inherit: true,
			basePower: 100,
			willCrit: true
		},
		gravity: {
			inherit: true,
			effect: {
				duration: 7,
				durationCallback: function(target, source, effect) {
					if (source && source.ability === 'persistent') {
						return 9;
					}
					return 7;
				},
				onStart: function() {
					this.add('-fieldstart', 'move: Gravity');
				},
				onAccuracy: function(accuracy) {
					if (typeof accuracy !== 'number') return;
					return accuracy * 5/3;
				},
				onModifyPokemonPriority: 100,
				onModifyPokemon: function(pokemon) {
					pokemon.negateImmunity['Ground'] = true;
					var disabledMoves = {bounce:1, fly:1, hijumpkick:1, jumpkick:1, magnetrise:1, skydrop:1, splash:1, telekinesis:1};
					for (var m in disabledMoves) {
						pokemon.disabledMoves[m] = true;
					}
					var applies = false;
					if (pokemon.removeVolatile('bounce') || pokemon.removeVolatile('fly') || pokemon.removeVolatile('skydrop')) {
						applies = true;
						this.cancelMove(pokemon);
					}
					if (pokemon.volatiles['magnetrise']) {
						applies = true;
						delete pokemon.volatiles['magnetrise'];
					}
					if (pokemon.volatiles['telekinesis']) {
						applies = true;
						delete pokemon.volatiles['telekinesis'];
					}
					if (applies) this.add('-activate', pokemon, 'Gravity');
				},
				onBeforeMove: function(pokemon, target, move) {
					var disabledMoves = {bounce:1, fly:1, hijumpkick:1, jumpkick:1, magnetrise:1, skydrop:1, splash:1, telekinesis:1};
					if (disabledMoves[move.id]) {
						this.add('cant', pokemon, 'move: Gravity', move);
						return false;
					}
				},
				onResidualOrder: 22,
				onEnd: function() {
					this.add('-fieldend', 'move: Gravity');
				}
			}
		},
		hydrocannon: {
			inherit: true,
			basePower: 100,
			willCrit: true
		},
		hyperbeam: {
			inherit: true,
			basePower: 100,
			willCrit: true
		},
		leechseed: {
			inherit: true,
			accuracy: 100,
			effect: {
				onStart: function(target) {
					this.add('-start', target, 'move: Leech Seed');
				},
				onResidualOrder: 8,
				onResidual: function(pokemon) {
					var target = pokemon.side.foe.active[pokemon.volatiles['leechseed'].sourcePosition];
					if (!target || target.fainted || target.hp <= 0) {
						this.debug('Nothing to leech into');
						return;
					}
					var typeMod = this.getEffectiveness('Grass', pokemon);
					var factor = 8;
					if (typeMod == 1) factor = 4;
					if (typeMod >= 2) factor = 2;
					if (typeMod == -1) factor = 16;
					if (typeMod <= -2) factor = 32;
					var damage = this.damage(pokemon.maxhp/factor, pokemon, target);
					if (damage) {
						this.heal(damage, target, pokemon);
					}
				}
			},
		},
		psystrike: {
			inherit: true,
			secondary: {
				chance: 30,
				boosts: {
					spd: -1,
					spa: -1
				}
			}
		},
		rapidspin: {
			inherit: true,
			self: {
				onHit: function(pokemon) {
					if (pokemon.hp && pokemon.removeVolatile('leechseed')) {
						this.add('-end', pokemon, 'Leech Seed', '[from] move: Rapid Spin', '[of] '+pokemon);
					}
					var sideConditions = {spikes:1, toxicspikes:1, stealthrock:1, iciclerock:1};
					for (var i in sideConditions) {
						if (pokemon.hp && pokemon.side.removeSideCondition(i)) {
							this.add('-sideend', pokemon.side, this.getEffect(i).name, '[from] move: Rapid Spin', '[of] '+pokemon);
						}
					}
					if (pokemon.hp && pokemon.volatiles['partiallytrapped']) {
						this.add('-remove', pokemon, pokemon.volatiles['partiallytrapped'].sourceEffect.name, '[from] move: Rapid Spin', '[of] '+pokemon, '[partiallytrapped]');
						delete pokemon.volatiles['partiallytrapped'];
					}
				}
			}
		},
		roaroftime: {
			inherit: true,
			basePower: 100,
			willCrit: true
		},
		rockwrecker: {
			inherit: true,
			basePower: 100,
			willCrit: true
		},
		scald: {
			inherit: true,
			basePower: 100,
			accuracy: 50,
			secondary: {
				chance: 100,
				status: 'brn'
			}
		},
		spikes: {
			inherit: true,
			effect: {
				onStart: function(side) {
					this.add('-sidestart', side, 'Spikes');
					this.effectData.layers = 1;
				},
				onRestart: function(side) {
					if (this.effectData.layers < 5) {
						this.add('-sidestart', side, 'Spikes');
						this.effectData.layers++;
					}
				},
				onSwitchIn: function(pokemon) {
					if (!pokemon.runImmunity('Ground')) return;
					var damageAmounts = [0,2,3,4,6,8]; // 0, 1/12, 1/8, 1/6, 1/4, 1/3
					var damage = this.damage(damageAmounts[this.effectData.layers]*pokemon.maxhp/24);
				}
			}
		},
		stealthrock: {
			inherit: true,
			effect: {
				// this is a side condition
				onStart: function(side) {
					this.add('-sidestart',side,'move: Stealth Rock');
				},
				onSwitchIn: function(pokemon) {
					var typeMod = this.getEffectiveness('Rock', pokemon);
					var factor = 16;
					if (typeMod == 1) factor = 8;
					if (typeMod >= 2) factor = 4;
					if (typeMod == -1) factor = 32;
					if (typeMod <= -2) factor = 64;
					var damage = this.damage(pokemon.maxhp/factor);
				}
			}
		},
		stoneedge: {
			inherit: true,
			accuracy: 100,
			basePower: 95,
			critRatio: 1
		},
		toxic: {
			inherit: true,
			accuracy: 100
		},
		"toxicrain": {
			num: -1337,
			accuracy: true,
			basePower: 0,
			category: "Status",
			desc: "For 5 turns, the weather becomes Toxic Rain. The power of Poison-type attacks is 1.5x during the effect. Lasts for 8 turns if the user is holding Damp Rock. Fails if the current weather is Toxic Rain.",
			shortDesc: "For 5 turns, toxic rain powers Poison moves.",
			id: "toxicrain",
			isViable: true,
			name: "Toxic Rain",
			pp: 5,
			priority: 0,
			weather: 'ToxicRain',
			secondary: false,
			target: "all",
			type: "Water"
		},
		toxicspikes: {
			inherit: true,
			effect: {
				// this is a side condition
				onStart: function(side) {
					this.add('-sidestart', side, 'move: Toxic Spikes');
					this.effectData.layers = 1;
				},
				onRestart: function(side) {
					if (this.effectData.layers < 2) {
						this.add('-sidestart', side, 'move: Toxic Spikes');
						this.effectData.layers++;
					}
				},
				onSwitchIn: function(pokemon) {
					if (!pokemon.runImmunity('Ground')) return;
					if (pokemon.hasType('Poison')) {
						this.add('-sideend', pokemon.side, 'move: Toxic Spikes', '[of] '+pokemon);
						pokemon.side.removeSideCondition('toxicspikes');
					}
					if (!pokemon.runImmunity('Poison')) return;
					if (this.effectData.layers >= 2) {
						pokemon.trySetStatus('tox');
					} else {
						pokemon.trySetStatus('psn');
					}
				}
			},
		},
		trickroom: {
			num: 433,
			accuracy: true,
			basePower: 0,
			category: "Status",
			desc: "For 7 turns, all active Pokemon with lower Speed will move before those with higher Speed, within their priority brackets. If this move is used during the effect, the effect ends. Priority -7.",
			shortDesc: "For 7 turns, slower Pokemon move first.",
			id: "trickroom",
			isViable: true,
			name: "Trick Room",
			pp: 5,
			priority: -7,
			onHitField: function(target, source, effect) {
				if (this.pseudoWeather['trickroom']) {
					this.removePseudoWeather('trickroom', source, effect, '[of] '+source);
				} else {
					this.addPseudoWeather('trickroom', source, effect, '[of] '+source);
				}
			},
			effect: {
				duration: 7,
				durationCallback: function(target, source, effect) {
					this.debug("Trick Room duration callback");
					if (source && source.ability === 'persistent') {
						return 9;
					}
					return 7;
				},
				onStart: function(target, source) {
					this.add('-fieldstart', 'Move: Trick Room', '[of] '+source);
				},
				onModifySpePriority: -100,
				onModifySpe: function(spe) {
					// just for fun: Trick Room glitch
					if (spe < 1810) return -spe;
				},
				onResidualOrder: 23,
				onEnd: function() {
					this.add('-fieldend', 'Move: Trick Room');
				}
			},
			secondary: false,
			target: "all",
			type: "Psychic"
		},
		willowisp: {
			inherit: true,
			accuracy: 100
		}
};