const router = require('koa-router')()
const sql = require('../utils/sql');
const query = require('../utils/query');
const utils = require('../utils/utils');
// �ļ�·��
const filepath = 'public/upload/';
// koa-multer
const multer = require('koa-multer');
// ����
const upload_config = multer.diskStorage({
  //�洢λ��
  destination: function (req, file, cb) {
    cb(null,filepath )
  },
  //�ļ�����
  filename: function (req, file, cb) {
    let fileFormat = (file.originalname).split(".");
    cb(null,Date.now() + "." + fileFormat[fileFormat.length - 1]);
  }
})

//��������
const upload = multer({ storage: upload_config });

// ͼƬ�ϴ�
router.post('/', upload.single('file'), async (ctx, next) => {
	let path = filepath.replace(/public/,'');
	ctx.body = {
		code: 0,
		msg: '�ϴ��ɹ�',
		result:`${path}${ctx.req.file.filename}`
	}
})

module.exports = router;