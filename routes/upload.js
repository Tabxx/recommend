const router = require('koa-router')()
const sql = require('../utils/sql');
const query = require('../utils/query');
const utils = require('../utils/utils');
// 文件路径
const filepath = 'public/upload/';
// koa-multer
const multer = require('koa-multer');
// 配置
const upload_config = multer.diskStorage({
  //存储位置
  destination: function (req, file, cb) {
    cb(null,filepath )
  },
  //文件名称
  filename: function (req, file, cb) {
    let fileFormat = (file.originalname).split(".");
    cb(null,Date.now() + "." + fileFormat[fileFormat.length - 1]);
  }
})

//加载配置
const upload = multer({ storage: upload_config });

// 图片上传
router.post('/', upload.single('file'), async (ctx, next) => {
	let path = filepath.replace(/public/,'');
	ctx.body = {
		code: 0,
		msg: '上传成功',
		result:`${path}${ctx.req.file.filename}`
	}
})

module.exports = router;