const ESbuild = require("esbuild");
const path = require("path");

ESbuild.build({

    outdir: path.resolve(__dirname, "..", "..", "build"),
    entryPoints: [path.resolve(__dirname, "..", "..", "src", "init.js")],
    entryNames: "bundle",
    bundle: true,

})

