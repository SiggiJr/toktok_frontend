import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Button, Input } from '@material-tailwind/react'
import { getPost, replyComment, writeComment } from '../utils/fetches/commentFetch.js'
import CommentItem from '../components/CommentItem.jsx'
import backIcon from '../assets/icons/back.svg'
import backIconWhite from '../assets/icons/backWhite.svg'
import sendIcon from '../assets/icons/paperPlanes.svg'
import sendIconWhite from '../assets/icons/paperPlanesWhite.svg'
import bookmark from '../assets/icons/Bookmark.svg'
import bookmarkWhite from '../assets/icons/BookmarkWhite.svg'
import bookmarkRed from '../assets/icons/BookmarkRed.svg'
import { pushToFavorites } from '../utils/fetches/getFavPostsFetch.js'
import { compileString } from 'sass'

function CommentDetails({ reload, setReload, darkMode }) {
  const postId = useParams()
  const [userFavorites, setUuserFavorites] = useState([])
  const [post, setPost] = useState([])
  const [commentId, setCommentId] = useState()
  const navigate = useNavigate()

  useEffect(() => {
    getPost(postId.postId, setPost)
  }, [reload])
  const sendComment = event => {
    event.preventDefault()
    writeComment(event, postId.postId, setReload)
  }
  if (!post.comments) {
    return <p>is Loading...</p>
  }
  return (
    <section className="flex flex-col p-6 mb-6 mt-0">
      <div className="flex justify-between">
        <div className="flex gap-2 my-6">
          <img
            role="presentation"
            onClick={() => navigate(-1)}
            className="w-[20px] cursor-pointer"
            src={darkMode ? backIconWhite : backIcon}
            alt=" back icon"
          />
          <h2 className="text-2xl">Comments</h2>
        </div>
        <img src={darkMode ? sendIconWhite : sendIcon} alt="sendIcon" />
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
              location.reload()
              pushToFavorites(post._id)
            }}
            role="presentation"
            src={
              darkMode
                ? userFavorites?.includes(post._id)
                  ? bookmarkRed
                  : bookmarkWhite
                : userFavorites?.includes(post._id)
                ? bookmarkRed
                : bookmark
            }
            alt="bookmark_icon"
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
          <Button className="text-[#E98090] bg-white" type="submit">
            Comment
          </Button>
        </div>
      </form>
    </section>
  )
}
export default CommentDetails
