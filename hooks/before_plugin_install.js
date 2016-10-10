module.exports = function(ctx) {
    // make sure android platform is part of build
    /*if (ctx.opts.platforms.indexOf('android') < 0) {
        return;
    }*/
	console.log(ctx != null ? "CTX" : "-CTX")
	console.log(ctx.opts != null ? "CTX.OPTS" : "-CTX.OPTS")
	console.log(ctx.opts.platforms != null ? ctx.opts.platforms : "-CTX.OPTS.PLATFORMS")
	console.log("************************************");
	console.log("* Hello from Before Plugin Install *");
	console.log("************************************");
}