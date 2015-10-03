"use strict"
Conductor = {};
_.extend(Conductor, Events);
Conductor.debug = function(lvl){
    if (lvl){
        this.on('all', function(){
            console.log("Conductor.trigger: ", arguments);
        });
    }
}


