function(context, args) {
	args=args || {} // Prevents the error: TypeError: Cannot read property 'action' of null
	if (args.action == "print") { // { action:"print" }
		return #db.f({}).array() // print what is in the db
	}
	if (args.action == "add") { // { action:"add"}
		#db.i(args.obj) // {action:"add" obj:{name:"urname"}}
		return "\nThe user `V" + args.obj.name + "` has been added.";
	}
	if (args.action == "remove") {
		#db.r(args.obj) // {action:"remove" obj:{name:"urname"}}
		return "\nThe user `V" + args.obj.name + "` has been removed.";
	}
	if (args.loc == "add") { //{loc:"add"}
		#db.i(args.obj)
		return "\nThe loc " + args.obj.loc + " has been added.";
	}
	if (args.loc == "remove") {
		#db.r(args.obj)
		return "\nThe loc " + args.obj.loc + " has been removed.";
	}
}