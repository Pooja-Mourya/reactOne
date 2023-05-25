import blogSetting from '../../model/blogModel/blogSetting.js'

const isBlogSetting = async (req, res, next) => {
  const blogSet = await blogSetting.find()
  if (blogSet.length == 0 && req.originalUrl != '/blog-setup') {
    res.redirect('/blog-setup')
  } else {
    next()
  }
}

export default isBlogSetting
