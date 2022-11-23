// Function.prototype.myBind = function(context){
//     return ()=> this.apply(context);
// }

Function.prototype.myBind = function(context){
    let that = this;
    return function(){
        return that.apply(context);
    }
}
