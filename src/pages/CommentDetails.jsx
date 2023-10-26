import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Input } from '@material-tailwind/react'
import { getPost, replyComment, writeComment } from '../utils/fetches/commentFetch.js'
import CommentItem from '../components/CommentItem.jsx'
import backIcon from '../assets/icons/back.svg'
import sendIcon from '../assets/icons/paperPlanes.svg'
import bookmark from '../assets/icons/Bookmark.svg'
import { pushToFavorites } from '../utils/fetches/getFavPostsFetch.js'

function CommentDetails({ reload, setReload, darkMode }) {
  const { postId } = useParams()
  const [post, setPost] = useState([])
  const [commentId, setCommentId] = useState()
  const navigate = useNavigate()

  useEffect(() => {
    getPost(postId, setPost)
  }, [reload])

  const sendComment = event => {
    event.preventDefault()

    writeComment(event, postId, setReload)
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
            alt=" back icon"
          />
          <h2 className="text-2xl">Comments</h2>
        </div>
        <img src={sendIcon} alt="sendIcon" />
      </div>
      <article onClick={() => navigate(`/user/${post.owner}`)} role="presentation" className="flex gap-2 pb-1 mb-1">
        <img className="w-[54px] h-[54px] object-cover rounded-full " src={post.owner_image} alt="" />
        <div>
          <h2 className="text-xl">{post.nickname}</h2>
          <p>{post.profession}</p>
        </div>
      </article>
      <article className="flex flex-col border-gray-200 border-b-[1px] pb-1 mb-1">
        <img className="w-[380px] h-[380px] object-cover rounded-2xl my-2" src={post.image_url} alt="" />
        <div className="flex justify-between">
          <p className=" text-[16px]">{post.caption}</p>
          <img
            className=" h-5 w-5 cursor-pointer"
            onClick={() => {
              pushToFavorites(postId)
            }}
            role="presentation"
            src={bookmark}
            alt=" bookmark icon"
          />
        </div>
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
            darkMode={darkMode}
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
