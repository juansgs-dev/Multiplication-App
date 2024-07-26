import { yarg } from "./plugins/args.plugin";


(async () => {
    await main();
})();

async function main() {
    console.log(yarg.b);
};