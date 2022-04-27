import React,{ useState } from 'react'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import AddPhotos from '../../SubComponents/PhoneDetails/SubComponents/AddPhotos';
import ImageViewer from '../../SubComponents/PhoneDetails/SubComponents/ImageViewer';
import { Button } from '@mui/material';
import { useLogin } from '../../../Contexts/Context'
import { useNavigate } from 'react-router';

const Images = (props) => {
  const Login = useLogin();
  const Navigate=useNavigate();
  const [showImage, setshowImage] = useState(null)
  const [showAddPhotos, setShowAddPhotos] = useState(false);

  return (
    <>
    {showImage && <ImageViewer image={showImage} setshowImage={setshowImage} />}
    {showAddPhotos && <AddPhotos close={setShowAddPhotos} id={props.id} />}
    <div className='mb-5 d-flex-end'>
                  {Login.isLoggedin ?
                    <Button variant="outlined" onClick={() => setShowAddPhotos(true)}>Add Photos</Button> :
                    <Button variant="outlined" onClick={() => Navigate('/Login')}>Login to Add more Photos</Button>
                  }
                </div>
                <ImageList variant="masonry" cols={3} gap={8}>
                  {props.itemData.map((item, index) => (
                    <ImageListItem key={item.img}>
                      <img
                        src={`${item.img}?w=248&fit=crop&auto=format`}
                        srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                        alt={item.title}
                        loading="lazy"
                        className='cursorPointer animateZoom PD-imageList'
                        onClick={() => { setshowImage(item.img) }}
                      />
                    </ImageListItem>
                  ))}
                </ImageList>
    </>
  )
}

export default Images