import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Input } from '@material-tailwind/react'
import { getPost, replyComment, writeComment } from '../utils/fetches/commentFetch.js'
import CommentItem from '../components/CommentItem.jsx'
import backIcon from '../assets/icons/back.svg'
import sendIcon from '../assets/icons/paperPlanes.svg'

function CommentDetails({ reload, setReload }) {
  const { postId } = useParams()
  const [post, setPost] = useState([])
  const [commentId, setCommentId] = useState()
  const navigate = useNavigate()

  useEffect(() => {
    getPost(postId, setPost)
  }, [reload])

  const sendComment = event => {
    event.preventDefault()
    if (replyToggle) {
      writeComment(event, postId, setReload)
    } else {
      replyComment(event, postId, setReload, commentId)
    }
  }

  if (!post.comments) {
    return <p>is Loading...</p>
  }

  return (
    <section className="flex flex-col p-6 mb-6">
      <div className="flex justify-between">
        <div className="flex gap-2 my-6">
          <img
            role="presentation"
            onClick={() => navigate(-1)}
            className="w-[20px] cursor-pointer"
            src={backIcon}
            alt=""
          />
          <h2 className="text-2xl">Comments</h2>
        </div>
        <img src={sendIcon} alt="sendIcon" />
      </div>
      <article
        onClick={() => navigate(`/user/${post.owner}`)}
        role="presentation"
        className="flex gap-2 border-gray-200 border-b-[1px] pb-1 mb-1">
        <img className="w-[54px] h-[54px] object-cover rounded-full " src={post.owner_image} alt="" />
        <div>
          <h2 className="text-xl">{post.nickname}</h2>
          <p>{post.profession}</p>
        </div>
      </article>
      <article className="flex flex-col border-gray-200 border-b-[1px] pb-1 mb-1">
        <img className="rounded-2xl my-2" src={post.image_url} alt="" />
        <p className=" text-[14px]">{post.caption}</p>
      </article>
      <article>
        {post.comments.map(comment => (
          <CommentItem
            key={comment.comment_id}
            comment={comment}
            postId={postId}
            setReload={setReload}
            setCommentId={setCommentId}
            commentId={commentId}
          />
        ))}
      </article>
      <form onSubmit={sendComment}>
        <div className="flex gap-2">
          <Input label="Your Comment" type="text" name="comment" />
          <button className="text-[#E98090]" type="submit">
            Comment
          </button>
        </div>
      </form>
    </section>
  )
}

export default CommentDetails
