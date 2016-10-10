module.exports = function(ctx) {
    // make sure android platform is part of build
    if (ctx.opts.cordova.platforms.indexOf('ios') < 0) {
        return;
    }
	
	var fs = ctx.requireCordovaModule('fs');
	var path = ctx.requireCordovaModule('path');
	var zlib = ctx.requireCordovaModule('zlib');
	
	//var untar = require('untar')
	var srcDir = path.join(ctx.opts.plugin.pluginInfo.dir, 'src/ios');
	fs.createReadStream(path.join(srcDir, 'twilio-client-ios-1.2.11.tar.bz2').pipe(unzip.Extract({ path: srcDir }));
	//console.log(ctx.opts.plugin.pluginInfo.dir)
	
	console.log("************************************");
	console.log("* Hello from Before Plugin Install *");
	console.log("************************************");
}