function(context, args) {
	args=args || {} //prevents the error: TypeError: Cannot read property 'action' of null'
	let found = #db.f({name: context.caller}).first()
	 if( found == null ) {
		  return "\n`D/!\\` `FMaintenance Mode` `D/!\\`"
	 }
}