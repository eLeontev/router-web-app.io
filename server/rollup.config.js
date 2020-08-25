import typescript from '@rollup/plugin-typescript';

export default {
    plugins: [typescript()],
    input: 'src/index.ts',
    output: {
        file: 'dist/index.js',
        format: 'cjs',
    },
    external: [
        'koa',
        'koa-bodyparser',
        'koa-session',
        'koa-logger',
        '@koa/router',
        'koa-graphql',
        'graphql',
        'bcrypt',
    ],
};
