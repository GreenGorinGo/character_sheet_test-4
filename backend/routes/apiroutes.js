let express = require("express");
let mongoose = require("mongoose");
let characterItemModel = require("../models/characteritem");

let router = express.Router();
//alt kısımda nameler type idi
router.get("/character",function(req,res) {
	let query = {"user":req.session.user}
	if(req.query.name) {
		query = {
			"user":req.session.user,
			"name":req.query.name
		}
	}
	characterItemModel.find(query,{

		"name":1,
		"class":1,
		"level":1,
		"race":1,
		"alignment":1,
		"background":1,
		"player":1,
		"strength":1,
		"dexterity":1,
		"constitution":1,
		"intelligence":1,
		"wisdom":1,
		"charisma":1

	},function(err,items) {
		if(err) {
			console.log("Find characteritems failed. Reason:"+err);
			return res.status(200).json([]);
		}
		if(!items) {
			return res.status(200).json([]);
		}
		return res.status(200).json(items);
	})
})

router.post("/character",function(req,res) {
	let item = new characterItemModel({
		name:req.body.name,
		class:req.body.class,
		level:req.body.level,
		race:req.body.race,
		alignment:req.body.alignment,
		background:req.body.background,
		player:req.body.player,
		strength:req.body.strength,
		dexterity:req.body.dexterity,
		constitution:req.body.constitution,
		intelligence:req.body.intelligence,
		wisdom:req.body.wisdom,
		charisma:req.body.charisma,
		user:req.session.user
	})
	item.save(function(err,item) {
		if(err) {
			console.log("Failed to save character item. Reason:"+err)
			return res.status(409).json({message:"not saved"})
		}
		if(!item) {
			return res.status(409).json({message:"not saved"})			
		}		
		return res.status(200).json({message:"success!"})		
	})
});

router.delete("/character/:id",function(req,res) {
	let id = req.params.id;
	characterItemModel.findById(id, function(err,item) {
		if(err) {
			console.log("Failed to find item to delete. Reason:"+err);
			return res.status(404).json({message:"not found"})
		}
		if(!item) {
			return res.status(404).json({message:"not found"})
		}
		if(item.user === req.session.user) {
			characterItemModel.deleteOne({"_id":item._id}, function(err) {
				if(err) {
					console.log("Failed to delete item. Reason:"+err)
					return res.status(409).json({message:"conflict"})
				}
				return res.status(200).json({message:"success"})
			})
		} else {
			return res.status(409).json({message:"conflict"})
		}
	})
});

router.put("/character/:id", function(req,res) {
	characterItemModel.findById(req.params.id, function(err,item) {
		if(err) {
			console.log("Error in finding item to edit. Reason:"+err)
			return res.status(404).json({message:"not found"})
		}
		if(!item) {
			return res.status(404).json({message:"not found"})
		}
		if(item.user=req.session.user) {
			characterItemModel.replaceOne({"_id":req.params.id},{
				name:req.body.name,
		        class:req.body.class,
		        level:req.body.level,
		        race:req.body.race,
		        alignment:req.body.alignment,
		        background:req.body.background,
		        player:req.body.player,
		        strength:req.body.strength,
		        dexterity:req.body.dexterity,
		        constitution:req.body.constitution,
		        intelligence:req.body.intelligence,
		        wisdom:req.body.wisdom,
		        charisma:req.body.charisma,
				user:req.session.user
			},function(err) {
				if(err) {
					console.log("Failed to replace item. Reason:"+err);
					return res.status(409).json({message:"conflict"})
				}
				return res.status(200).json({message:"success"})
			})
		} else {
			return res.status(409).json({message:"confict"})
		}
	})
})

module.exports = router;