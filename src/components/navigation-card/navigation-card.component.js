import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Female, Male } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const NavigationCard = ({ text, subText, goTo }) => {
  const navigate = useNavigate();

  const handleCardClick = e => {
    navigate(goTo)
  }

  return (
    <Card sx={{ width: '100%', height: '100%', margin: 'auto' }} raised>
      <CardActionArea onClick={handleCardClick}>
        <CardContent>
          <Typography className='fullname-text' align='center' gutterBottom variant="h5" component="div">
            {text}
          </Typography>
          <Typography className='email-text' align='center' variant="body2" color="text.secondary" >
            {subText}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default NavigationCard;