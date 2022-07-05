const ESbuild = require("esbuild");
const path = require("path");

const mode = process.env.MODE || "development";

const isDev = mode === "dev";
const isProd = mode === "prod";

ESbuild.build({

    outdir: path.resolve(__dirname, "..", "..", "build"),
    entryPoints: [path.resolve(__dirname, "..", "..", "src", "init.jsx")],
    entryNames: "bundle",
    bundle: true,
    minify: isProd,

})

