function disp(value)
{
   console.log(value)
   document.getElementById("output").value+=value 


}
function cls()
{
    document.getElementById("output").value=""
}
function equalClick()
{
    var exp=document.getElementById("output").value
    var res=eval(exp)
    document.getElementById("output").value=res
}
