function(context, args) {
	args=args || {} // Prevents the error: TypeError: Cannot read property 'action' of null
	if (args.action == "print") { // { action:"print" }
		return #db.f({user:{$exists:true}}).array() // print what is in the db
	}
	if (args.action == "add") { // { action:"add"}
		#db.i({user:args.user}) // {action:"add" obj:{name:"urname"}}
		return "\nThe user `V" + args.user + "` has been added.";
	}
	if (args.action == "remove") {
		#db.r({user:args.user}) // {action:"remove" obj:{name:"urname"}}
		return "\nThe user `V" + args.user + "` has been removed.";
	}
}