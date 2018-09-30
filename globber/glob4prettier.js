var glob = require("glob");
var fs = require("fs");
var path = require("path");

// var opts = require("nomnom")
//    .option('debug', {
//       abbr: 'd',
//       flag: true,
//       help: 'Print debugging info'
//    })
//    .option('version', {
//       flag: true,
//       help: 'print version and exit',
//       callback: function() {
//          return "version 1.2.4";
//       }
//    })
//    .parse();

// You don't have to specify anything if you don't want to:
var opts = require("@gerhobbelt/nomnom")
    .script("glob4prettier")
    .unknownOptionTreatment(false)              // do not accept unknown options!
    .produceExplicitOptionsOnly(true)
    .options({
        basedir: {
            full: 'basedir',
            metavar: 'BASEDIR',
            position: 0,
            help: 'The MathJax base directory.'
        }
    })
	.parse();

// var basedir = opts[0];     // get the first positional arg
// var file = opts.file;  // see if --file was specified
// var verbose = opts.v;  // see if -v was specified
var extras = opts._;   // get an array of the unmatched, positional args
var basedir = opts.basedir;

if (!extras || extras.length !== 1) {
	console.error("Error: you must specify a single MathJax base directory on the command line.");
	process.exit(1);
}

if (!basedir || !fs.existsSync(basedir)) {
	console.error(`Error: MathJax base directory "${basedir}" does not exist.`);
	process.exit(1);
}

// Query the entry
var stats = fs.lstatSync(basedir);

// Is it a directory?
if (!stats.isDirectory()) {
	console.error(`Error: MathJax base directory "${basedir}" must be a directory.`);
	process.exit(1);
}

var options = {
	cwd: basedir,
	nonull: false,
	nodir: true,
	ignore: [
		"latest.js",
		"config/default.js",
		"**/config.js",
		"node_modules/**",
		"unpacked/**",
		"test/**",
		"mathjax-brakets/**",
	],
};

// options is optional
glob("**/*.js", options, function (er, files) {
	if (0) {
		console.log("glob", JSON.stringify({
			er,
			files,
		}, null, 2));
	} else {
		console.log(files.map(function (el) {
			return options.cwd + "/" + el;
		}).join("\n"));
	}
});
