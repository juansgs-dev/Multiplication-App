

export interface SaveFileUseCase {
    execute: ( options: Options ) => boolean;
}

export interface Options {
    file
}