AFRAME.registerComponent('car', {
    schema: {
        y:{type:"number",default:90},
        counter:{type:"number",default:0}
    },

    init: function () {
        window.addEventListener("click",e =>{
            this.data.counter += 1
            var rotation
            if(this.data.counter<5){
                rotation = {x:0,y:this.data.y*this.data.counter,z:0}
            }
            else if (this.data.counter > 4 && this.data.counter < 9){
                rotation = { x: 0, y: this.data.y * this.data.counter, z: 50 }
            }else{
                this.data.counter = 1
            }
            this.el.setAttribute("rotation",rotation)
        })
    },
});
