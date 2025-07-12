function generateQRcode(){
    const text =
    document.getElementById("text").value.trim();
    const qrImage = 
    document.getElementById("grImage");

    if(text === ""){
        alert("please enter some text or URL!");
        return;
    }
    const apiURL = `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(text)}&size=200x200`;
    qrImage.src = apiURL;
}