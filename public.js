function(context, args) {
	args = args || {}
	// Comment the db lock out when maintenance mode deactivated.
	 let found = #db.f({user: context.caller}).first()
	 if( found == null ) {
		  return "\n`D/!\\` `FMaintenance Mode` `D/!\\`"
		// return "\n`DERROR: Access Denied`"
	 }
	 if (args.nav == "info") {
		 return [
			"                                             ",
			"So you want to know who I am... I am Cryptek.",
			"As of right now I am a puzzler, planning to",
			"become a scripter! I am rather broke, most of",
			"my upgrades are just script slots or char",
			"counts. My loc is rather well protected",
			"though"
		 ]
	 }
	 if (args.nav == "donate") {
			if(!args.amount) {return "\nAnonymously donate to `Lcryptek`.\nRequired arguments: `Namount`\nOptional arguments: `Nmemo`"}
			//if(!args.amount) {return "Need an `Namount`."}
			let eC = #fs.escrow.charge({cost: args.amount, is_unlim: false})
			if(eC) {return "`DESCROW_ERR` \n"+ eC.msg.replace(/`Vcost`/, "`Vamount`")}
			return {ok: true, msg: "Transfer complete."}
	 }
	 if (args.nav == "corp") {
		return [
			"                           ",
			"`D/!\\` `FComing Soon` `D/!\\`",
		]
	 }
	 if (args.nav == "scripts") {
		 return [
			"                           ",
			"`D/!\\' `FComing Soon` `D/!\\`",
			
		 ]
	 }
	 return [
	    "                                               ",
		"`L         _________ ______   _______ `",
		"`L|\\     /|\\__   __/(  __  \\ (  __   )`",
		"`L| )   ( |   ) (   | (  \\  )| (  )  |`",
		"`L| |   | |   | |   | |   ) || | /   |`",
		"`L| |   | |   | |   | |   | || (/ /) |`",
		"`L| |   | |   | |   | |   ) ||   / | |`",
		"`L| (___) |___) (___| (__/  )|  (__) |`",
		"`L(_______)\\_______/(______/ (_______)`",
		"                                        ",
		" | `Xinfo` | `Xdonate` | `Xcorp` | `Xscripts` | "
	 ]     
}