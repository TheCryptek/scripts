function(context, args) {
	args=args || {} //prevents the error: TypeError: Cannot read property 'action' of null'
	let found = #db.f({user: context.caller}).first()
	 if( found == null ) {
		  return "\n`D/!\\` `FMaintenance Mode` `D/!\\`"
	 }
	 return [
        " ",
        #db.f({loc:{$exists:true}}).array().map(o=>{
            var loc=o.loc
            var sec=#fs.scripts.get_level({name:loc})
            return {loc,sec}
        }).sort((a,b)=>b.sec-a.sec).map(o=>{
            o.sec=['`dNull','`DLow','`FMid','`JHigh','`LFull'][o.sec]+'Sec`'
            //return o.loc+' | '+o.sec
			return o.sec+' | '+o.loc
        }).join('\n'),
        " ",
        "Sec levels are checked once a day",
        " ",
        "This loc dump was made with help from `DDTR` and `Ddo`"
     ]
}