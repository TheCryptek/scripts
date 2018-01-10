function(context, args) {
	args=args || {} // Prevents the error: TypeError: Cannot read property 'action' of null
	if (args.action == "print") { // { action:"print" }
		return #db.f({loc:{$exists:true}}).array() // print what is in the db
	}
	if (args.action == "add") { //{loc:"add"}
		var secLevel = #fs.scripts.get_level({name:args.loc})
		//args.obj.sec=secLevel
		#db.i({loc:args.loc})
		return [
			' ',
			'loc: ' + args.loc,
			'SecLevel: ' + secLevel,
			'Status: Added'
		]
	}
	if (args.action == "remove") {
		var secLevel = #fs.scripts.get_level({name:args.loc})
		///args.obj.sec=secLevel
		#db.r({loc:args.loc})
		return [
			' ',
			'loc: ' + args.loc,
			'SecLevel: ' + secLevel,
			'Status: Removed'
		]
	}
}