w =800
h = 600

class card():
    def __init__(self, value,x ,y):
        self.val = value
        self.posx = x
        self.posy = y
        self._width = 200
        self._hight = 300

    def _draw(self):
        noFill()
        stroke(255)
        strokeWeight(5)
        rect(0,0,self._width,self._hight)
        textMode(CENTER)
        textAlign(CENTER, CENTER)
        textSize(50)
        text('{}'.format(self.val),self._width-self._width/2,self._hight-self._hight/2 - 50)
        if self.val % 3 == 0 and self.val % 5 == 0:
            textAlign(CENTER, CENTER)
            textSize(30)
            text('FizzBuzz',self._width-self._width/2,self._hight-self._hight/2 + 60)    
            noFill()
            stroke(255,0,0)
            strokeWeight(20)
            rect(self.posx-100,-self.posy-50,400,400)
        elif self.val % 3 == 0:
            textAlign(CENTER, CENTER)
            textSize(30)
            text('Fizz',self._width-self._width/2,self._hight-self._hight/2 + 60) 
            stroke(0,255,0)
            strokeWeight(20)
            rect(self.posx-100,-self.posy-50,400,400)   
        elif self.val % 5 == 0:
            textAlign(CENTER, CENTER)
            textSize(30)
            text('Buzz',self._width-self._width/2,self._hight-self._hight/2 + 60)    
            stroke(0,0,255)
            strokeWeight(20)
            rect(self.posx-100,-self.posy-50,400,400)



        
def setup():
    global w,h
    size(w,h)
    #fullScreen(True)
    background(0)
    translate(100,100)
    c = card(int(random(1,100)), 0,0)
    c._draw()
    

v = 0

def draw():
    global v
    if v>=99:
        noLoop()
    v+=1
    frameRate(1)
    background(0)
    translate(w/2-100,h/2-150)
    c = card(v, 0,0)
    c._draw()
    
