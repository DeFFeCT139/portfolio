import { useState } from 'react';
import PlayIcon from './components/PlayIcon/playIcon';
import style from './css/VideoModule.module.css'
import ReactPlayer from 'react-player/youtube'


const VideoModule = () => {

  const [links] = useState([
    {path:'https://www.youtube.com/watch?v=GNrdg3PzpJQ&t=8782s'},
    {path:'https://www.youtube.com/watch?v=noXnxdNSp4A'},
    {path:'https://www.youtube.com/watch?v=x1RJ5Q09PqM'},
    {path:'https://www.youtube.com/watch?v=mxquElJC_qM'},
    {path:'https://www.youtube.com/watch?v=LpEwssOYRKA'},
    {path:'https://www.youtube.com/watch?v=WQJ4pYtlN5E'},
    {path:'https://www.youtube.com/watch?v=9zewiGf7j-A'},
    {path:'https://www.youtube.com/watch?v=ifTF3ags0XI'},
    {path:'https://www.youtube.com/watch?v=BWNDgjAv78M'},
    {path:'https://www.youtube.com/watch?v=zDlg64fsQow'},
    {path:'https://www.youtube.com/watch?v=adcijRTI_8E'},
    {path:'https://www.youtube.com/watch?v=t2f6kg8mxwM'},
    {path:'https://www.youtube.com/watch?v=eOWxKkHakyY'},
    {path:'https://www.youtube.com/watch?v=CGLdH5ORX-Y'},
    {path:'https://www.youtube.com/watch?v=APycW2hRdBg'},
    {path:'https://www.youtube.com/watch?v=c3JGBdxfYcU&t=1057s'},
    {path:'https://www.youtube.com/watch?v=K9vBpIq8Wck'},
    {path:'https://www.youtube.com/watch?v=Tn6-PIqc4UM'},
    {path:'https://www.youtube.com/watch?v=8OHe6chCWTE'},
    {path:'https://www.youtube.com/watch?v=R_agd5qZ26Y'},
    {path:'https://www.youtube.com/watch?v=8LlitCpjoxA'},
    {path:'https://www.youtube.com/watch?v=iIG7eEZoil8'},
    {path:'https://www.youtube.com/watch?v=lr1rYnUubpQ'},
    {path:'https://www.youtube.com/watch?v=1u-ol271d7Q'},
    {path:'https://www.youtube.com/watch?v=6gf-rSjkUik'},
    {path:'https://www.youtube.com/watch?v=6O4z5ksuCi8'},
    {path:'https://www.youtube.com/watch?v=Iz1NvqG7wTc'},
    {path:'https://www.youtube.com/watch?v=_gQaygjm_hg'},
    {path:'https://www.youtube.com/watch?v=MRNGw08i6S4'},
    {path:'https://www.youtube.com/watch?v=sNKClZoiHNk'},
  ])

    return (
      <div className={style.VideoModule}>
        <div className="container">
          <div className={style.VideoModule_list}>
            {links.map(item => 
              <div key={links.indexOf(item)} className={style.VideoModule_item}>
                <ReactPlayer
                  light
                  url={item.path}
                  width="100%"
                  height="180px"
                  playIcon={<PlayIcon/>}
                  playing
                />
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };
  
export default VideoModule;