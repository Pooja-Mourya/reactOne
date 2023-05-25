import blogSetup from '../../model/blogModel/blogSetting.js'
import blogUser from '../../model/blogModel/blogUser.js'

export async function bloggerLogin(req, res) {
  res.send('login')
}
export async function blogSetting(req, res) {
  //   res.send('blog setting')
  try {
    var blogSettings = await blogSetup.find({})
    if (blogSettings.length > 0) {
      res.redirect('blog-login')
    } else {
      res.redirect('blog-setup')
    }
  } catch (error) {}
}
