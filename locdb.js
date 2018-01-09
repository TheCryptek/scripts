function(context, args) {
	args=args || {} // Prevents the error: TypeError: Cannot read property 'action' of null
	if (args.loc == "print") { // { action:"print" }
		return #db.f({loc:{$exists:true}}).array() // print what is in the db
	}
	if (args.loc == "add") { //{loc:"add"}
		var secLevel = #fs.scripts.get_level({name:args.obj.loc})
		#db.i(args.obj)
		return [
			' ',
			'loc: ' + args.obj.loc,
			'SecLevel: ' + secLevel,
			'Status: Added'
		]
	}
	if (args.loc == "remove") {
		#db.r(args.obj)
		return [
			' ',
			'loc: ' + args.obj.loc,
			'SecLevel: ' + secLevel,
			'Status: Removed'
		]
	}
}