var data = []
var print1 = function(){
document.getElementById("printall").innerHTML +="<li>"+data+"</li>"    
}
var search1 = function(){
var mysearch = prompt("Which Element r u looking for")  
for(i=0;i<=data.length;i=i+2){
   if(mysearch===data[i]){

document.getElementById("res").innerHTML+= "<li> Result Found : "+ data[i+1]  +"</li>"
break;
   }else if(mysearch!==data[i] && i===data.length-2){
     document.getElementById("res").innerHTML+= "<li> No result Found </li>"

   } 

}  
}
var getit = function(){
var adding = prompt("Add an Element") 
var adding2 = prompt("Add a short description")
data.push(adding)
data.push(adding2)
}
document.getElementById("print").onclick= print1
document.getElementById("run").onclick = getit
document.getElementById("Search").onclick = search1
