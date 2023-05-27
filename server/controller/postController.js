import mongoose from 'mongoose'
import CreatePost from '../model/CreatePost.js'
import UserModal from '../model/user.js'

export async function addPost(req, res) {
  try {
    const doc = new CreatePost({
      title: req.body.title,
      description: req.body.description,
      user: req.body.user,
    })
    // if (req.files) {
    //     let path = ''
    //   doc.image.forEach(function(files, index, arr){
    //     path = path + files.path + ','
    //   })

    //   path = path.substring(0 , path.lastIndexOf(','))

    //   doc.image = path
    // }
    const existingUser = await UserModal.findById(req.body.user)
    const session = await mongoose.startSession()
    session.startTransaction()
    await doc.save({ session })

    existingUser.blogs.push(doc)
    await existingUser.save({ session })
    await session.commitTransaction()
    await doc.save()
    if (req.file) {
      doc.image = req.file.path
    }
    const created = await doc.save()

    const page = Number(req.query.page) || 1
    const limit = Number(req.query.limit) || 3
    const skip = (page - 1) * limit

    created = created.skip(skip).limit(limit)
    if (created) {
      return res.status(201).send({
        success: true,
        message: 'post created successfully',
        post: created,
      })
    }
  } catch (error) {
    console.log('save post error', error)
    return res
      .status(409)
      .send({ success: false, message: 'something went wrong', error })
  }
}

export async function fetchPost(req, res) {
  try {
    const page = parseInt(req.query.page) || 1 // Current page number
    const limit = parseInt(req.query.limit) || 10 // Number of items per page

    // Calculate the skip value based on the page and limit
    const skip = (page - 1) * limit

    const posts = await CreatePost.find().skip(skip).limit(limit).exec()
    res.send({
      postCount: posts.length,
      success: true,
      message: 'all post are here',
      posts: posts,
    })
  } catch (error) {
    console.log(error)
    res.status(500).send({ success: false, message: 'server error', error })
  }
}

export async function viewPostById(req, res) {
  const _id = req?.params?.id
  //   console.log('_id', _id)
  try {
    const viewPost = await CreatePost.findById(_id)
    // console.log('view', viewPost)
    // return
    // res
    //   .status(200)
    //   .send({ success: true, message: 'post view by id', viewPost: viewPost })
    res.send(viewPost)
  } catch (error) {
    // console.log(error)
    res.status(500).send({ success: false, message: 'server error', error })
  }
}

// export async function getOneProduct(req, res, next) {
//   const id = req?.params?.id
//   try {
//     // Find the product with the specified id using the `findById` method of the `allproducts` model.
//     const results = await CreatePost.findById(id, { __v: 0 })
//     // Check if results is null or undefined. If so, throw a 404 error.
//     if (!results) {
//       throw createError(404, 'Product does not exist.')
//     }
//     // If results is not null or undefined, send it back to the client.
//     res.send(results)
//   } catch (error) {
//     console.log(error.message, 'Single product error')
//     // Check if the error is a `CastError` thrown by Mongoose when the id is not a valid ObjectId.
//     if (error instanceof mongoose.CastError) {
//       next(createError(400, 'Invalid Product Id'))
//       return
//     }
//     // If the error is not a `CastError`, pass it on to the next error handler.
//     next(error)
//   }
// }

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
    const delPost = await CreatePost.findOneAndDelete(_id).populate('user')
    await delPost.user.blogs.pull(delPost)
    await delPost.user.save()

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

// user || blog

export async function getUserBlog(req, res) {
  //   console.log('user ', req.params.id)
  //   return
  try {
    const userBlog = await CreatePost.findById(req.params.id).populate('user')
    await userBlog.user.blogs.pull(userBlog)
    await userBlog.user.save()
    res.status(200).send({
      success: true,
      message: 'successfully get by id',
      post: userBlog,
    })
  } catch (error) {
    console.log('error', error)
    res.status(404).send({ success: false, message: 'not user found', error })
  }
}
