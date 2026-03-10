export function getCurrentTime(iso) {
  const date = new Date(iso).toLocaleString()
  return date
}


const DEFAULT_AVATAR = 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=face';

export function getAvatar(photo) {
  return photo && photo.includes('undefined') ? DEFAULT_AVATAR  : photo
}



export  function handlePostWithoutImage(image , post) {
    if(!image){
      return<>
        <div className='w-full h-50 bg-blue-400 text-white flex items-center justify-center'>

          <p className='text-3xl capitalize'>{post}</p>
        </div>
      </>
    }
  }




  