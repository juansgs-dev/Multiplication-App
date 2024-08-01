import { ServerApp } from '../../src/presentation/server-app';


describe('Server App', () => {

    test('should create ServerApp instance', () => {

        const serverApp = new ServerApp();

        expect( serverApp ).toBeInstanceOf(ServerApp);
        expect( typeof ServerApp.run ).toBe('function');

    });

    test('should run ServerApp with options', () => {


        

        const options = {
            base: 2,
            limit: 5,
            showTable: false,
            destination: 'test-destination',
            name: 'test-filename'
        }

        ServerApp.run(options);

    })

});