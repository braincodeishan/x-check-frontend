import React,{useState,useEffect} from 'react'
import { LinearProgress } from '@mui/material';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import AddReviews from '../../SubComponents/PhoneDetails/SubComponents/AddReviews';
import ReviewsCard from './SubComponents/ReviewsCard'
import { useLogin } from '../../../Contexts/Context'
import { useNavigate } from 'react-router';
import axios from 'axios';
import { Button } from '@mui/material';

const Reviews = (props) => {
  const Login = useLogin();
  const Navigate=useNavigate();
  const [reviews, setReviews] = useState([]);
  const [showAddReviews, setShowAddReviews] = useState(false);
  const [stars, setStars] = useState({
    phoneId: props.id,
    value: [0, 0, 0, 0, 0]
  })
  const [progress, setProgress] = useState([0, 0, 0, 0, 0])

  const getReviews = async () => {
    try {
      const result = await axios({
        method: 'POST',
        url: process.env.REACT_APP_DOMAIN_NAME + '/reviews/'+props.url,
        headers: {
          'Content-Type': 'application/json',
        },
        data: {
          id: props.id
        }
      })
      if (result.status === 200 && result.data) {
        console.log(result.data)
        setReviews(result.data.result)
        setStars(result.data.starResult)

      }
    } catch (err) {

    }
  }

  useEffect(() => {
    let sum = 0, i = 0;

    for (i = 0; i < stars.value.length; i++) {
      sum = sum + stars.value[i];
    }
    if (sum === 0) {
      sum = 5;
    }
    setProgress((prev) => {
      return prev.map((data, index) => {
        return (stars.value[4 - index] * 100) / sum;
      })
    })
  }, [stars])

  useEffect(() => {
    getReviews();
  }, [])


  return (
    <>
      {showAddReviews && <AddReviews close={setShowAddReviews} id={props.id} url={props.url}/>}
      <div className='mb-5 d-flex-end'>
        {Login.isLoggedin ?
          <Button variant="outlined" onClick={() => setShowAddReviews(true)}>Rate Product</Button> :
          <Button variant="outlined" onClick={() => Navigate('/Login')}>Login to Rate Product</Button>
        }
      </div>
      <div className="PD-reviewsBar">

        <div className="PD-XCheckNumber">
          <EmojiEventsIcon sx={{ fontSize: '100px', justifyContent: 'center', alignSelf: 'center' }} />
          <h3>X-Check Score</h3>
          <h2 className='animateZoom'>1040</h2>
        </div>
        <div>
          {progress.map((data, index) => {
            return <div className="progressbars" key={index}>
              <h6>{5 - index} <i className="bx bxs-star"></i></h6>
              <LinearProgress variant="determinate" color={index >= 2 ? (index > 3 ? 'error' : 'warning') : 'success'} value={data} className='PD-progressbar' />
              <p>{stars.value[4 - index]}</p>
            </div>
          })}
        </div>
      </div>

      {reviews.length !== 0 ?
        reviews.map((item, index) => {
          return <ReviewsCard {...item} key={index} />
        }) :
        <div className='mt-5 d-flex-center'>No Reviews yet. Be the first one to review the Phone.</div>
      }
    </>
  )
}

export default Reviews