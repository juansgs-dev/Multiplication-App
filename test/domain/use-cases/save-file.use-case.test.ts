import fs from 'fs';
import { SaveFile } from '../../../src/domain/use-cases/save-file.use-case';



describe('SaveFileUseCase', () => {

    
    afterEach(()=>{
        if (fs.existsSync('outputs')) fs.rmSync('outputs', { recursive: true });
        if (fs.existsSync('custom-outputs')) fs.rmSync('custom-outputs', { recursive: true });
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

    test('should save file with custom values', () => {

        const saveFile = new SaveFile();
        const options = {
            fileContent: 'custom content',
            fileDestination: 'custom-outputs/file-destination',
            fileName:  'custom-table-name'
        }

        const { fileContent, fileDestination, fileName } = options;

        const filePath = `${fileDestination}/${fileName}.txt`;

        
        const result = saveFile.execute(options);
        const fileExists = fs.existsSync(filePath); 
        const fileContentRead = fs.readFileSync(filePath, { encoding: 'utf-8' })

        expect( result ).toBe( true );
        expect( fileExists ).toBe( true );
        expect( fileContentRead ).toBe( fileContent );
    })

    test('should return false if directory could no be created', () => {

    })


})