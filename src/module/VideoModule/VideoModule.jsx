import PlayIcon from './components/PlayIcon/playIcon';
import style from './css/VideoModule.module.css'
import ReactPlayer from 'react-player/youtube'


const VideoModule = () => {

  let list = [
    {path:'https://www.youtube.com/watch?v=FoSgDtqb0Zc'},
    {path:'https://www.youtube.com/watch?v=FoSgDtqb0Zc'},
    {path:'https://www.youtube.com/watch?v=FoSgDtqb0Zc'},
    {path:'https://www.youtube.com/watch?v=FoSgDtqb0Zc'},
    {path:'https://www.youtube.com/watch?v=FoSgDtqb0Zc'},
    {path:'https://www.youtube.com/watch?v=FoSgDtqb0Zc'},
    {path:'https://www.youtube.com/watch?v=FoSgDtqb0Zc'},
    {path:'https://www.youtube.com/watch?v=FoSgDtqb0Zc'},
    {path:'https://www.youtube.com/watch?v=FoSgDtqb0Zc'},
    {path:'https://www.youtube.com/watch?v=FoSgDtqb0Zc'},
    {path:'https://www.youtube.com/watch?v=FoSgDtqb0Zc'},
    {path:'https://www.youtube.com/watch?v=FoSgDtqb0Zc'},
  ]

    return (
      <div className={style.VideoModule}>
        <div className="container">
          <div className={style.VideoModule_list}>
            {list.map(item => 
              <div key={list.indexOf(item)} className={style.VideoModule_item}>
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