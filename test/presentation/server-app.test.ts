import { ServerApp } from '../../src/presentation/server-app';
import { CreateTable } from '../../src/domain/use-cases/create-table.use-case';
import { SaveFile } from '../../src/domain/use-cases/save-file.use-case';


describe('Server App', () => {

    const options = {
        base: 2,
        limit: 5,
        showTable: false,
        destination: 'test-destination',
        name: 'test-filename'
    }


    test('should create ServerApp instance', () => {

        const serverApp = new ServerApp();

        expect( serverApp ).toBeInstanceOf(ServerApp);
        expect( typeof ServerApp.run ).toBe('function');

    });

    test('should run ServerApp with options', () => {

        const logSpy = jest.spyOn(console, 'log');
        const createTableSpy = jest.spyOn( CreateTable.prototype, 'execute' );
        // const saveFileSpy = jest.spyOn( SaveFile.prototype, 'execute');

        ServerApp.run(options);

        expect(logSpy).toHaveBeenCalledTimes(2);
        expect(logSpy).toHaveBeenCalledWith('Server running...');
        expect(logSpy).toHaveBeenLastCalledWith('File Created');

        expect(createTableSpy).toHaveBeenCalledTimes(1);
        expect(createTableSpy).toHaveBeenCalledWith({
            base: options.base, limit: options.limit
        });

        // expect(saveFileSpy).toHaveBeenCalledTimes(1);
        // expect(saveFileSpy).toHaveBeenCalledWith({
        //     fileContent: expect.any(String),
        //     fileName: options.name,
        //     fileDestination: options.destination
        // });

    })

});