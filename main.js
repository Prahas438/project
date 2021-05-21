var canvas=new fabric.Canvas('my_canvas');
player_x=10;
player_y=10;
block_width=30;
block_height=30;
var playerobject="";
var blockobject="";
function player_update(){
    fabric.Image.fromURL("player.jpeg",function(Img){
        playerobject=Img;
        playerobject.scaleToWidth(150);
        playerobject.scaleToHeight(140);
        playerobject.set({
            top:player_y,left:player_x
        });
        canvas.add(playerobject);
    });
}
function new_image(get_image){
    fabric.Image.fromURL(get_image,function(Img){
        playerobject=Img;
        playerobject.scaleToWidth(block_width);
        playerobject.scaleToHeight(block_height);
        playerobject.set({
            top:player_y,left:player_x
        });
        canvas.add(blockobject);
    });
}