import fs from 'fs';
import { SaveFile } from '../../../src/domain/use-cases/save-file.use-case';



describe('SaveFileUseCase', () => {

    afterEach(()=>{
        fs.rmSync('outputs', { recursive: true });
    });


    test('should save file with default values', () => {

        const saveFile = new SaveFile();
        const filepath = 'outputs/table.txt'
        const options = {
            fileContent: 'test content'
        }

        const result = saveFile.execute(options);
        const fileExists = fs.existsSync(filepath); 
        const fileContent = fs.readFileSync(filepath, { encoding: 'utf-8' })

        expect( result ).toBe( true );
        expect( fileExists ).toBe( true );
        expect( fileContent ).toBe( options.fileContent );


    });


})