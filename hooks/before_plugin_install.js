module.exports = function(ctx) {
    // make sure android platform is part of build
    /*if (ctx.opts.platforms.indexOf('android') < 0) {
        return;
    }*/
	console.log(ctx != null ? JSON.stringify(ctx) : "-CTX")
	console.log("************************************");
	console.log("* Hello from Before Plugin Install *");
	console.log("************************************");
}