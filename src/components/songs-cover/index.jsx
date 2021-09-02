import { memo } from 'react'

import { getCount, getSizeImage } from '@/utils/format-utils'
import { SongsCoverWrapper } from './style'

const SongsCover = memo(({ info, right }) => {
  return (
    <SongsCoverWrapper right={right}>
      <div className="cover-top">
        <img src={getSizeImage(info.picUrl || info.coverImgUrl)} alt="" />
        <div className="cover sprite_cover">
          <div className="info sprite_cover">
            <span>
              <i className="sprite_icon erji"></i>
              {getCount(info.playCount)}
            </span>
            <i className="sprite_icon play"></i>
          </div>
        </div>
      </div>
      <div className="cover-bottom text-nowrap">
        {info.name}
      </div>
      <div className="cover-source text-nowrap">
        by {info?.copywriter || info?.creator?.nickname}
      </div>
    </SongsCoverWrapper>
  )
})

export default SongsCover
