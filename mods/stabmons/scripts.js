exports.BattleScripts = {
/** MAKE EVERY POKEMON HAVE ILLUSION **/	
	init: function() {
                        for (var i in this.data.Learnsets) {
                                if (i in normal) {
                                        //make them learn every  normal move... let's hope that "Movedex" is the right object
                                        for (var j in this.data.Movedex) {
                                        	if (this.data.Movedex[j].type == "Normal") {
                                        		this.modData('Learnsets', i).learnset[j] = ['5L0'];
                                        	}
                                        }
                                        
                                } else if (i in fire) {
                                        for (var j in this.data.Movedex) {
                                        	if (this.data.Movedex[j].type == "Fire") {
                                        		this.modData('Learnsets', i).learnset[j] = ['5L0'];
                                        	}
                                        }
                                } else if (i in grass) {
                                        for (var j in this.data.Movedex) {
                                        	if (this.data.Movedex[j].type == "Grass") {
                                        		this.modData('Learnsets', i).learnset[j] = ['5L0'];
                                        	}
                                        }
                                } else if (i in water) {
                                        for (var j in this.data.Movedex) {
                                        	if (this.data.Movedex[j].type == "Water") {
                                        		this.modData('Learnsets', i).learnset[j] = ['5L0'];
                                        	}
                                        }
                                } else if (i in electric) {
                                        for (var j in this.data.Movedex) {
                                        	if (this.data.Movedex[j].type == "Electric") {
                                        		this.modData('Learnsets', i).learnset[j] = ['5L0'];
                                        	}
                                        }
                                } else if (i in ground) {
                                        for (var j in this.data.Movedex) {
                                        	if (this.data.Movedex[j].type == "Ground") {
                                        		this.modData('Learnsets', i).learnset[j] = ['5L0'];
                                        	}
                                        }
                                } else if (i in poison) {
                                        for (var j in this.data.Movedex) {
                                        	if (this.data.Movedex[j].type == "Poison") {
                                        		this.modData('Learnsets', i).learnset[j] = ['5L0'];
                                        	}
                                        }
                                } else if (i in bug) {
                                        for (var j in this.data.Movedex) {
                                        	if (this.data.Movedex[j].type == "Bug") {
                                        		this.modData('Learnsets', i).learnset[j] = ['5L0'];
                                        	}
                                        }
                                } else if (i in ice) {
                                        for (var j in this.data.Movedex) {
                                        	if (this.data.Movedex[j].type == "Ice") {
                                        		this.modData('Learnsets', i).learnset[j] = ['5L0'];
                                        	}
                                        }
                                } else if (i in fighting) {
                                        for (var j in this.data.Movedex) {
                                        	if (this.data.Movedex[j].type == "Fighting") {
                                        		this.modData('Learnsets', i).learnset[j] = ['5L0'];
                                        	}
                                        }
                                } else if (i in psychic) {
                                        for (var j in this.data.Movedex) {
                                        	if (this.data.Movedex[j].type == "Psychic") {
                                        		this.modData('Learnsets', i).learnset[j] = ['5L0'];
                                        	}
                                        }
                                } else if (i in flying) {
                                        for (var j in this.data.Movedex) {
                                        	if (this.data.Movedex[j].type == "Flying") {
                                        		this.modData('Learnsets', i).learnset[j] = ['5L0'];
                                        	}
                                        }
                                } else if (i in rock) {
                                        for (var j in this.data.Movedex) {
                                        	if (this.data.Movedex[j].type == "Rock") {
                                        		this.modData('Learnsets', i).learnset[j] = ['5L0'];
                                        	}
                                        }
                                } else if (i in ghost) {
                                        for (var j in this.data.Movedex) {
                                        	if (this.data.Movedex[j].type == "Ghost") {
                                        		this.modData('Learnsets', i).learnset[j] = ['5L0'];
                                        	}
                                        }
                                } else if (i in dark) {
                                        for (var j in this.data.Movedex) {
                                        	if (this.data.Movedex[j].type == "Dark") {
                                        		this.modData('Learnsets', i).learnset[j] = ['5L0'];
                                        	}
                                        }
                                } else if (i in steel) {
                                        for (var j in this.data.Movedex) {
                                        	if (this.data.Movedex[j].type == "Steel") {
                                        		this.modData('Learnsets', i).learnset[j] = ['5L0'];
                                        	}
                                        }
                                } else if (i in dragon) {
                                        for (var j in this.data.Movedex) {
                                        	if (this.data.Movedex[j].type == "Dragon") {
                                        		this.modData('Learnsets', i).learnset[j] = ['5L0'];
                                        	}
                                        }
                                }
                        }
        }	
};
