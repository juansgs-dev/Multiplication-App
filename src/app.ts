import { yarg } from "./plugins/args.plugin";
import { ServerApp } from "./presentation/server-app";


(async () => {
    await main();
})();

async function main() {

    const { b: base, l: limit, s: showTable } = yarg;

    ServerApp.run({ base, limit, showTable});
};