
const  path = require('path');


const GetItem = async (req, res) => {
    const{filename}=req.body;
    console.log(__dirname);
    res.sendFile(path.join(__dirname, `../../uploads/items/${filename}`))
    // res.sendFile(path.join('uploads\\items\\images-1683036475054-mascot-logo-design_fb-img_1200x800.jpg'))

}

module.exports = GetItem;