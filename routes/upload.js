const router = require('koa-router')()
const sql = require('../utils/sql');
const query = require('../utils/query');
const utils = require('../utils/utils');
// 文件存储路径
const filepath = 'public/upload/';
// koa-multer
const multer = require('koa-multer');
// 上传配置
const upload_config = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, filepath)
  },
  //存储文件名
  filename: function (req, file, cb) {
    let fileFormat = (file.originalname).split(".");
    cb(null, Date.now() + "." + fileFormat[fileFormat.length - 1]);
  }
})

const upload = multer({
  storage: upload_config
});

// 上传文件
router.post('/', upload.single('file'), async (ctx, next) => {
  let path = filepath.replace(/public/, '');
  ctx.success('上传成功', `${path}${ctx.req.file.filename}`);
})

module.exports = router;