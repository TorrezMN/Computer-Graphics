 
var symbol_size = 20;
var strems = [];


function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    background(0);
    textSize(symbol_size);

    var x = 0;
 

    for (let i = 0; i <= width/symbol_size; i++) {
        var str = new Stream();
        str.generate_symbols(x,random(-3000,0));
        strems.push(str);
        x += symbol_size;

    }


}


function draw() {
    background(0,255);
    strems.forEach(function(strem){
        strem.render();
    })


};


function Symbol(x, y, speed) {
    this.x = x;
    this.y = y;
    this.value;
    this.speed = speed;
    this.switchInterval = round(random(0, 10));

    this.setToRandomSymbol = function () {
        if (frameCount % this.switchInterval == 0) {
            this.value = String.fromCharCode(0x30A0 + round(random(0, 96)));
        }
    };

    

    this.update = function () {
        this.y = (this.y >= height) ? 0 : this.y += this.speed;
        this.setToRandomSymbol();

    };

}


function Stream(){
    this.symbols = [];
    this.total_symbols = round(random(5,30));
    this.speed = random(10,20);

    this.generate_symbols = function(x,y){
       
        for (let i = 0; i <= this.total_symbols; i++) {
            symb = new Symbol(x,y,this.speed);
            symb.setToRandomSymbol();
            this.symbols.push(symb);
            y -= symbol_size;
            
        }
    };
    this.render = function(){
        this.symbols.forEach(function(symbol){
            fill(0, 255, 0);
            text(symbol.value, symbol.x, symbol.y);
            symbol.update();
        })
    }
}