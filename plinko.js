class plinko {
    constructor(x,y,d){
            var options={
               
                isStatic:true
                
            }

            this.body=Bodies.circle(x,y ,d,options)
           
            this.d=d
            World.add(world,this.body)
    }

        display(){
            push( )
            translate(this.body.position.x,this.body.position.y)
            this.color=color("yellow")
            ellipse(0,0,this.d,this.d)
            pop()

        }


}                                                   