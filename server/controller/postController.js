import CreatePost from '../model/CreatePost.js'

export async function addPost(req, res) {
  try {
    const doc = new CreatePost({
      title: req.body.title,
      description: req.body.description,
    })

    // if (req.files) {
    //     let path = ''
    //   doc.image.forEach(function(files, index, arr){
    //     path = path + files.path + ','
    //   })

    //   path = path.substring(0 , path.lastIndexOf(','))

    //   doc.image = path
    // }
    if (req.file) {
      doc.image = req.file.path
    }

    // console.log('doc***', doc)
    const created = await doc.save()
    if (created) {
      return res.status(201).send({ message: 'post created successfully' })
    }
  } catch (error) {
    console.log('save post error', error)
    return res.status(409).send({ message: 'something went wrong' })
  }
}

export async function fetchPost(req, res) {
  try {
    const posts = await CreatePost.find()
    res.send({ success: true, message: 'all post are here', posts: posts })
  } catch (error) {
    console.log(error)
    res.status(500).send({ success: false, message: 'server error', error })
  }
}

export async function viewPostById(req, res) {
  const _id = req?.params?.id
  console.log('_id', _id)
  try {
    const viewPost = await CreatePost.findById(_id)
    res.send(viewPost)
  } catch (error) {
    console.log(error)
    res.send({ message: 'server error' })
  }
}

export async function updatePosts(req, res) {
  try {
    const _id = req.params.id
    console.log('_id', _id)
    const { title, description, image } = req.body
    console.log('req.body', req.body)

    const updatePost = await CreatePost.findByIdAndUpdate(
      _id,
      { ...req.body },
      { new: true },
    )
    res.status(200).send({
      success: true,
      message: 'updated successful',
      post: updatePost,
    })
  } catch (error) {
    console.log('error', error)
    res.status(500).send({ success: false, message: 'server error', error })
  }
}

export async function deletePost(req, res) {
  try {
    const { _id } = req.params.id
    const delPost = await CreatePost.findOneAndDelete(_id)
    return res
      .status(200)
      .send({ success: true, message: 'deleted post', delPost: delPost })
  } catch (error) {
    console.log(error)
    return res.status(500).send({
      success: false,
      message: 'already delete post',
      error,
    })
  }
}
