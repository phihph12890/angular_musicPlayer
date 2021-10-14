import Song from '../models/song';
import _ from 'lodash';


export const create = (req, res) => {

    const song = new Song(req.body);
    song.save((err, data) => {
        if (err) {
            console.log(err);
            return res.status(400).json({
                error: "Add song failed"
            })
        }
        res.json(data)
    })
}
export const list = (req, res) => {
    let order = req.query.order ? req.query.order : 'asc';
    let sortBy = req.query.sortBy ? req.query.sortBy : '_id';
    let limit = req.query.limit ? +req.query.limit : 6;

    Song.find()
        // .select("-image")
        .populate('category', '_id name')
        // .sort([[order, sortBy]])
        // .limit(limit)
        .exec((err, data) => {
            if (err) {
                res.status(400).json({
                    error: "Song not found"
                })
            }
            res.json(data)
        })
}
export const songById = (req, res, next, id) => {
    Song.findById(id)
        .populate('category', '_id name')
        .exec((err, song) => {
            if (err || !song) {
                res.status(404).json({
                    error: "Không tìm thấy bài hát!"
                })
            }
            req.song = song;
            next();
        })
}

export const read = (req, res) => {
    return res.json(req.song);
}
export const remove = (req, res) => {
    let song = req.song;
    song.remove((err, deletedSong) => {
        if (err) {
            return res.status(400).json({
                error: "Không xoá được bài hát!"
            });
        }
        res.json({
            deletedSong,
            message: "Xoá bài hát thành công"
        })
    })
}
export const update = (req, res) => {
    let song = req.song;
    console.log(song);
    song = _.assignIn(song, req.body);
    console.log(song);
    song.save((err, data) => {
        if (err) {
            return res.status(400).json({
                error: "Cập nhật sản phẩm không thành công!"
            });
        }
        res.json(data);
    })

}
export const songByCategory = (req, res) => {
    Song.find({ "category": req.category._id }, (err, songs) => {
        if (err) {
            res.status(400).json({
                error: "Songs not found"
            })
        }
        res.json(songs);
    })
}
export const relateSong = (req, res) => {
    let limit = req.query.limit ? req.query.limit : 4;

    Song.find({
        _id: { $ne: req.song },
        category: req.song.category
    }) // $ne: not include
        .limit(limit)
        .populate('category', '_id name',)
        .exec((err, songs) => {
            if (err) {
                res.status(400).json({
                    error: "Songs not found"
                })
            }
            res.json(songs)
        })
}
export const search = (req, res) => {
    let name_like = req.query.name_like ? req.query.name_like : "";
    // console.log(name_like);
    Song.find({
        "name": { $regex: `${name_like}`, $options: '$i' }
    }).exec((err, songs) => {
        if (err) {
            res.status(400).json({
                error: "Song not found"
            })
        }
        res.json(songs)
    })
}
// export const filterPrice = (req, res) => {
//     let price1 = req.query.price1 ? req.query.price1 : "";
//     let price2 = req.query.price2 ? req.query.price2 : "";
//     console.log("price1", price1);
//     console.log("price2", price2);
//     Product.find({
//         $and: [{ 'priceSale': { $gte: price1 } }, { 'priceSale': { $lte: price2 } }]
//     }).exec((err, products) => {
//         if (err) {
//             res.status(400).json({
//                 error: "Product not found"
//             })
//         }
//         res.json(products)
//     })
// }
export const sortView= (req, res) => {
    let level = req.query.level ? req.query.level : "";
    Song.find()
        .sort({
            view: level
        })
        .exec((err, songs) => {
        if (err) {
            res.status(400).json({
                error: "Failed"
            })
        }
        res.json(songs)
    })
}