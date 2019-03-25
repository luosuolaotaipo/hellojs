class ProtectedString{
    private _str:string;
    private _isMarked:boolean;

    set str(str:string){
        this._str = str;
    }

    get str(){
        return this._str
    }

    get isMarked(){
        return this._str.includes('*');
    }

    constructor(str:string){
        str = str;
    }
}

class testdate{
    public date: ProtectedString;
    constructor(date:string){
        this.date = new ProtectedString(date);
    }
}

let test = new testdate('123**');
console.log(test)