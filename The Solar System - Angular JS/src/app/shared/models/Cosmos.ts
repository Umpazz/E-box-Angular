export class Cosmos {
    id: Number;
    img: String;
    planet:String;
    Discoveredby:String;
    Discoverydate : String;
    Avgtemp:String;
    Dimension:String;
    Mass:String;
    Volume:String;
    Density:String;
    Gravity : String;
    Radius : String;
    Semimajoraxis : String;
    Perihelion : String;
    Inclination : String;
    constructor(id:Number,Density:String,img:String,Inclination:String,Discoverydate:String,planet:String,Discoveredby:String,Avgtemp:String,Perihelion:String,Dimension:String,Mass:string,Volume:String,Gravity:String,Radius:String,Semimajoraxis:String){
        this.id = id;
        this.img = img;
        this.planet = planet;
        this.Discoveredby = Discoveredby;
        this.Dimension = Dimension;
        this.Mass = Mass;
        this.Avgtemp = Avgtemp;
        this.Volume = Volume;
        this.Density = Density;
        this.Gravity = Gravity;
        this.Radius = Radius;
        this.Semimajoraxis = Semimajoraxis;
        this.Perihelion = Perihelion;
        this.Discoverydate = Discoverydate;
        this.Inclination = Inclination;
    }
}
