// Paso 3: Clase Movie

// 1. Crear una clase que se llame Movie con los siguientes atributos Públicos.

// - title: string
// - releaseYear: number
// - actors: Professional[]
// - nacionality: string
// - director: Professional
// - writer: Professional
// - language: string
// - plataforma: string
// - isMCU: boolean
// - mainCharacterName: string
// - producer: string
// - distributor: string
// - genre: string

// 2. Los únicos parámetros del constructor son: title, releaseYear, nacionality y genre

// 3. Crear un método PUBLICO que muestre todos los datos de las peliculas
import { Professional } from "./profesional"

export class Movie{
    title: string
    releaseYear: number
    actors: Professional[]
    nacionality: string
    director: Professional
    writer: Professional
    language: string
    plataforma: string
    isMCU: boolean
    mainCharacterName: string
    producer: string
    distributor: string
    genre: string

    constructor(title: string, releaseYear: number, nacionality: string, genre: string)
    {
        this.title = title;
        this.releaseYear = releaseYear;
        this.nacionality = nacionality;
        this.genre = genre;
    }

//metodos

    printAll(){
        console.log(`title - ${this.title},${"\n"}realaseYear - ${this.releaseYear},${"\n"}actors - ${this.actors},${"\n"}nationality - ${this.nacionality},${"\n"}director - ${this.director},${"\n"}writer - ${this.writer}${"\n"}languaje - ${this.language},${"\n"}plataforma - ${this.plataforma},${"\n"}isMCU - ${this.isMCU},${"\n"}mainCharacterName - ${this.mainCharacterName},${"\n"}producer - ${this.producer},${"\n"}distributor - ${this.distributor}${"\n"}genre - ${this.genre} \n\n`);
    }
    public gettitle(): string {
        return this.title
    }
    public getreleaseYear(): number {
        return this.releaseYear
    }
    public getactors(): Professional[] {
        return this.actors
    }
    public getnationality(): string {
        return this.nacionality
    }
    public getdirector(): Professional {
        return this.director
    }
    public getwriter(): Professional {
        return this.writer
    }
    public getlanguage(): string {
        return this.language
    }
    public getplataforma(): string {
        return this.plataforma
    }
    public getisMcu(): boolean {
        return this.isMCU
    }
    public getmainCharecterName(): string {
        return this.mainCharacterName
    }
    public getproducer(): string {
        return this.producer
    }
    public getdistributor(): string {
        return this.distributor
    }
    public getgenre(): string {
        return this.genre
    }
    public settitle(title: string): void {
        this.title = title;
    }
    public setreleaseYear(releaseYear: number): void {
         this.releaseYear = releaseYear;
    }
    public setactors(actors: Professional[]): void{
         this.actors = actors;
    }
    public setnationality(nationality: string): void {
         this.nacionality = nationality;
    }
    public setdirector(director: Professional): void {
         this.director = director
    }
    public setwriter(writer: Professional): void {
         this.writer = writer
    }
    public setlanguage(language: string): void {
         this.language = language;
    }
    public setplataforma(plataforma: string): void {
         this.plataforma = plataforma;
    }
    public setisMcu(isMCU: boolean): void {
         this.isMCU = isMCU;
    }
    public setmainCharecterName(mainCharacterName: string): void {
         this.mainCharacterName = mainCharacterName;
    }
    public setproducer(producer: string): void {
         this.producer = producer;
    }
    public setdistributor(distributor: string): void {
         this.distributor = distributor;
    }
    public setgenre(genre: string): void {
         this.genre = genre;

    }
}
    