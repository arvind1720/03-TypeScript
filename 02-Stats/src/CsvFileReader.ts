import fs from 'fs';

type MatchData=[Date, string,string,number,number,MatchResult,string]



export abstract class CsvFileReader{
    data:MatchData[]=[];
    
    constructor(public filename:string){}

    abstract mapRow(row: string[]):any;

    read():void {
        this.data =fs
    .readFileSync(this.filename, {
    encoding: 'utf-8'
    })
    .split('\n')
    .map(
        (row: string): string[] => {
        return row.split(',');
    }
    )
    .map(
        (row:string[]):MatchData=>{

    }
    )
    .map(this.mapRow);
    }

    
}