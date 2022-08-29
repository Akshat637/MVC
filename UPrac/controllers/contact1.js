exports.getAddContact = (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'contact.html'));
}




exports.postAddContact =  (req, res , next) =>{
    console.log(req.body);
    res.redirect('/suc');
}



exports.getAddDone =  (req, res, next) =>{
    res.send("SUCESSFUL")
;}