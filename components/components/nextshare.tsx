import {
    FacebookShareButton,
    FacebookIcon,

    LinkedinShareButton,
    LinkedinIcon,


    TwitterShareButton,
    TwitterIcon,

    TelegramShareButton,
    TelegramIcon,
  } from 'next-share'
   
  interface NextShareProps {
    url: string;
  }
  
  const NextShare: React.FC<NextShareProps> = ({ url }) => {
    return (<>
        <div>
          <FacebookShareButton
          url={`https://next-article.vercel.app/${url}`}
          quote={'next-share is a social share buttons for your next React apps.'}
          hashtag={'#articles'}
        >
          <FacebookIcon size={32} round />
        </FacebookShareButton>
          </div>
          <div>
          <LinkedinShareButton 
            url={`https://next-article.vercel.app/${url}`}>
        <LinkedinIcon size={32} round />
        </LinkedinShareButton>
          </div>
          <div>
                    <TwitterShareButton
                      url={`https://next-article.vercel.app/${url}`}
                    title={'next-share is a social share buttons for your next React apps.'}
                    >
                    <TwitterIcon size={32} round />
                    </TwitterShareButton>
          </div>

        <div>

            <TelegramShareButton
              url={`https://next-article.vercel.app/${url}`}
            title={'next-share is a social share buttons for your next React apps.'}
            >
            <TelegramIcon size={32} round />
            </TelegramShareButton>
          </div>

    
    </>)
  }
  export default NextShare;