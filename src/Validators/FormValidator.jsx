export default function FormValidator(e) {
    let{name,value} =e.target 
 switch(name){
    case "name":
        if(!value||value.length===0)
            return name + "Field id Mendatory1"
        else if (value.length<3||value.length>100)
            return name + "Field Length Must Be 3-100 Characters"
        else
            return ""
        default:
            return ""
 }
}
