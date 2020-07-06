const mongoose = require("mongoose");

let Schema = mongoose.Schema({
	name: {
		type: String,
		required: [true, 'Name field is required']  
	},
    class: {
		type: String,
		required: [true, 'Class field is required']
	},
	level: {
		type: Number,
		mimimum: 1,
		required: [true, 'Level field is required']
	},
	race: {
		type: String,
		required: [true, 'Race field is required']
	},
	alignment: {
		type: String,
		required: [true, 'Race field is required']
	},
	background: {
		type: String,
	},
	player: {
		type: String,
	},
	strength: {
		type: Number,
		default: 8
	},
	dexterity: {
		type: Number,
		default: 8
	},
	constitution: {
		type: Number,
		default: 8
	},
	intelligence: {
		type: Number,
		default: 8
	},
	wisdom: {
		type: Number,
		default: 8
	},
	charisma: {
		type: Number,
		default: 8
	},
	user:{type:String,indexed:true}
})

module.exports = mongoose.model("CharacterItem",Schema);