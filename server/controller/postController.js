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
    res.send(posts)
  } catch (error) {
    console.log(error)
  }
}

export async function viewPostById(req, res) {
  try {
    const _id = req.params.id
    // console.log('_id', _id)
    const viewPost = await CreatePost.findById(_id)
    if (!viewPost) {
      return res.status(500).send({ message: 'post not found' })
    } else {
      res.send(viewPost, { message: 'fetch post by id' })
    }
  } catch (error) {
    console.log(error)
  }
}

export async function updatePosts(req, res) {
  try {
    const _id = req.params.id
    const updatePost = await CreatePost.findByIdAndUpdate(_id, req.body)
    if (!updatePost) {
      return res
        .status(404)
        .send(updatePost, { message: 'something went wrong' })
    } else {
      res.send({ message: 'post updated successful' })
    }
  } catch (error) {
    console.log(error)
  }
}

export async function deletePost(req, res) {
  try {
    const delPost = await CreatePost.findOneAndDelete()
    // console.log('delPost', delPost)
    if (!delPost) {
      return res.status(500).send()
    } else {
      res.send(delPost)
    }
  } catch (error) {
    console.log(error)
  }
}
