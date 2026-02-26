export default function ImageValidator(e) {
let files = Array.from(e.target.files)
if(files.length===1){
    let pic = files[0]
    if(!(pic.type==="image/jpg"||pic.type==="image/jpeg"|| pic.type==="image/png"|| pic.type==="image/wabp"|| pic.type==="image/gif"))
        return "Invalid Pic Format, Please Upload an Image of Type .jpg ,.jpeg,.png,.gif,.wabp"
    else if(pic.size>1048576)
        return "Pic is Too Heavy, Please Upload an Image Upto 1 MB"
    else
        return ""
    }
else {
    return ""
}
}
