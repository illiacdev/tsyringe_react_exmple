// craco.config.ts
export default {
    babel: {
        /*presets: [
            [
                "@babel/preset-react",
                { runtime: "automatic", importSource: "@emotion/react" },
            ],
        ],*/
        plugins: ["babel-plugin-transform-typescript-metadata"],
    },
};
