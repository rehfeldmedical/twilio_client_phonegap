module.exports = function(ctx) {
    // make sure android platform is part of build
    if (ctx.opts.cordova.platforms.indexOf('ios') < 0) {
        return;
    }
	
	console.log(ctx.opts.plugin.pluginInfo.dir)
	
	console.log("************************************");
	console.log("* Hello from Before Plugin Install *");
	console.log("************************************");
}