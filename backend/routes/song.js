import express from 'express';
import { list, listLimit, read, create, update, remove, songById, songByCategory, relateSong, searchByName,searchBySinger, sortView } from '../controllers/song';
import { categoryById } from '../controllers/category';

const router = express.Router();
//Tìm kiếm bài hát theo tên
router.get('/songs/searchByName', searchByName);

//Tìm kiếm bài hát theo ca sĩ
router.get('/songs/searchBySinger', searchBySinger);

//Sắp xếp theo lượt nghe
router.get('/songs/sortView', sortView);

//Danh sách bài hát
router.get('/songs', list);

//Danh sách bài hát(limit)
router.get('/songsLimit', listLimit);

//Danh sách bài hsat theo danh mục
router.get('/songs/categories/:categoryId', songByCategory);

//bài hát liên quan
router.get('/songs/related/:songId', relateSong);

//Chi tiết bài hát
router.get('/songs/:songId', read);

//Thêm mới bài hát 
router.post('/songs', create);

//Cập nhật bài hát
router.put('/songs/:songId', update);

//Xoá bài hát
router.delete('/songs/:songId', remove);

//Lấy param
router.param('categoryId', categoryById);
router.param('songId', songById);


module.exports = router;