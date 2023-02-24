/* eslint-disable jsx-a11y/alt-text */
import logo from './logo.svg';
import './App.css';
import { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/scrollbar";
import { FreeMode, Scrollbar, Mousewheel } from "swiper";
import { Autoplay } from 'swiper';
import { Pagination } from "swiper";
const _list = [
  { title: 'The ireland flag Timeline ', subTitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra aliquam leo, vel vestibulum leo tempor eu. Mauris dolor erat, convallis et aliquet et, efficitur mollis eros. Cras fringilla, ligula convallis ultricies accumsan, dui lacus malesuada mauris.', img: require('./image/image3.png') },
  { title: 'History of the flags used in Ireland ', subTitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra aliquam leo, vel vestibulum leo tempor eu. Mauris dolor erat, convallis et aliquet et, efficitur mollis eros. Cras fringilla, ligula convallis ultricies accumsan, dui lacus malesuada mauris.', img: require('./image/image2.png') },
  { title: 'What the Irish flag means to me ', subTitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra aliquam leo, vel vestibulum leo tempor eu. Mauris dolor erat, convallis et aliquet et, efficitur mollis eros. Cras fringilla, ligula convallis ultricies accumsan, dui lacus malesuada mauris.', img: require('./image/image1.png') }
]
function App() {
  const [list, setList] = useState(_list)
  const [currentIndex, setCuttentIndex] = useState(1)
  const swiperRef = useRef(null)
  const isFirst = useRef(true)
  useEffect(() => {
    swiperRef.current.slideTo(1, 0)

    let uList = [list[_list.length - 1],...list,_list[0]]
    setList(uList)
  }, [])
  useEffect(() => {
    if(currentIndex === 4){
      setTimeout(()=>{
        swiperRef.current.slideTo(1, 0)
      },300)
    }
    if(currentIndex === 0){
      setTimeout(()=>{
        swiperRef.current.slideTo(3, 0)
      },300)
    }
  }, [currentIndex])
  return (
    <div style={{ width: '100%', height: '100vh' }}>
      <div style={{
        width: '100%', textAlign: 'center', fontSize: 28, color: '#fff', height: 40, marginTop: 100, fontFamily: 'Rounded Mplus 1c', fontStyle: 'normal',
        fontWeight: 800
      }}>
        <span> Welcome to the Ireland flag Institute</span>

      </div>
      <div style={{ width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
        <div style={{ position: 'absolute', top: 240, zIndex: 2, left: 50, display: 'flex', alignItems: 'center' }} onClick={() => {
          typeof swiperRef?.current.slidePrev === 'function' &&
            swiperRef?.current.slidePrev();
        }}><img style={{ width: 44, height: 44, marginRight: undefined }} src={require('./image/Previous.png')}></img>
          <span style={{ color: '#fff', marginLeft: 10, fontWeight: 800 }}>Previous</span>
        </div>
        <Swiper
          slidesPerView={3}
          defaultChecked={1}
          onSwiper={(swiper) => swiperRef.current = swiper}
          centeredSlides={true}
          autoplay={{
            delay: 1800,
            disableOnInteraction: false
          }

          }
          onSlideChange={({ activeIndex }) => {
            isFirst.current = false
            
              setCuttentIndex(activeIndex)
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay]} style={{
            width: '100%', height: 600, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',
            marginTop: -20, marginLeft: 190
          }}>
          {
            list.map((item, idx) => {
              let isOk = idx === currentIndex
              const activeStyle = isOk ? {
                width: 400,
                height: 400,
                border: '4px solid #E46F25',
                borderRadius: 400 / 2
              } : {}

              return <SwiperSlide
                style={{
                  width: 500,
                  height: 500,
                  // marginLeft: idx === 0 ? undefined: isFirst.current ? 150 : 50
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginLeft: currentIndex === 0 ? -40 : -30,
                  flexDirection: 'column'
                }}
              >
                <div style={{
                  background: 'rgba(228, 111, 37, 0.3)', borderRadius: 500, display: 'flex', justifyContent: 'center', alignItems: 'center', width: isOk ? 500 : 200,
                  height: isOk ? 500 : 200,
                  // marginLeft: idx === 2 && currentIndex == 2 ? 184 : undefined
                }}>
                  <div style={{
                    width: 200,
                    height: 200,

                    background: '#000000',
                    overflow: 'hidden',
                    border: '2px solid #E46F25',
                    borderRadius: 200 / 2,
                    position: 'relative',
                    ...activeStyle || {}
                  }}

                  >
                    <img style={{ width: '100%', height: '100%' }} src={item.img}></img>
                    {
                      currentIndex === idx && <div style={{
                        width: '100%', height: 150, background: 'rgba(228, 111, 37, 0.94)',
                        position: 'absolute', left: 0, bottom: 0, textAlign: 'center', justifyContent: 'center', display: 'flex',
                        alignItems: 'center', flexDirection: 'column'
                      }}>
                        <span style={{ fontSize: 20, color: '#fff' }}>{item?.title}</span>
                        <div style={{ width: '80%', textAlign: 'center' }}>
                          <span style={{ fontFamily: 'Open Sans', fontSize: 12, color: '#fff', fontWeight: 800 }}>{item?.subTitle}</span>

                        </div>
                      </div>
                    }
                  </div>

                </div>
                {
                  !isOk && <div style={{ width: 200, textAlign: 'center', marginTop: 10 }}>
                    <span style={{ color: '#fff', fontWeight: 800 }}>{item.title}</span>

                  </div>
                }

              </SwiperSlide>
            })
          }
        </Swiper>
        <div onClick={() => {
          typeof swiperRef?.current.slideNext === 'function' &&
            swiperRef?.current.slideNext();
        }} style={{ position: 'absolute', top: 240, zIndex: 2, right: 50, display: 'flex', alignItems: 'center' }}><img style={{ width: 44, height: 44, marginLeft: 80, }} src={require('./image/Next.png')}></img>

          <span style={{ color: '#fff', marginLeft: 10, fontWeight: 800 }}>Next</span></div>
      </div>

      <img style={{ width: '100%', position: 'absolute', top: 0, left: 0, zIndex: -1 }} src={require('./image/Background.png')}></img>
      <img style={{ width: '100%', height: 80, position: 'absolute', top: -10, left: 0, zIndex: 0 }} src={require('./image/topImg.png')}></img>
    </div >
  );
}

export default App;
