import { ServerApp } from '../../src/presentation/server-app';


describe('Server App', () => {

    test('should create ServerApp instance', () => {

        const serverApp = new ServerApp();

        expect( serverApp ).toBeInstanceOf(ServerApp);
        expect( typeof ServerApp.run ).toBe('function');

    });

});