import express from 'express';
import { create, list, categoryById, read, update, remove, listRelated, searchByName} from '../controllers/category';

const router = express.Router();

//Tìm kiếm danh mục theo tên
router.get('/categories/searchByName', searchByName);

//Danh sách danh mục
router.get('/categories', list);

//Chi tiết danh mục
router.get('/categories/:categoryId', read);

//Thêm mới danh mục
router.post('/categories', create);

//Cập nhật danh mục
router.put('/categories/:categoryId', update);
//Xoá danh mục

router.delete('/categories/:categoryId/', remove);

//List Danh mục( ngoại trừ Danh mục hiện tại)
router.get('/categories/related/:categoryId', listRelated);

//Lấy param
router.param('categoryId', categoryById);


module.exports = router;