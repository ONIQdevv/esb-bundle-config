import {BuildOptions} from 'esbuild'
import path from 'path'
import {CleanPlugin} from './plugins/CleanPlugin';
import {HTMLPlugin} from "./plugins/HTMLPlugin";

const mode = process.env.MODE || 'development';

const isDev = mode === 'development';
const isProd = mode === 'production';

function resolveRoot(...segments: string[]) {
    return path.resolve(__dirname, '..', '..', ...segments);
}

const config: BuildOptions = {
    outdir: resolveRoot('build'),
    entryPoints: [resolveRoot('src', 'index.jsx')],
    entryNames: '[dir]/bundle.[name]-[hash]',
    allowOverwrite: true,
    bundle: true,
    tsconfig: resolveRoot('tsconfig.json'),
    minify: isProd,
    sourcemap: isDev,
    metafile: true,
    loader: {
        '.svg': 'file',
        '.jpg': 'file'
        // Add your file formats there is in example upper
    },
    plugins: [
        CleanPlugin,
        HTMLPlugin({
            title: 'None', // Your title
        })
    ],
}

export default config;

