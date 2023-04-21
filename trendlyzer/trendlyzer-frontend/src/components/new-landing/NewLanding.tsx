import ResponsiveAppBar from './navbar'; 
import { Box } from '@mui/system'; 
import { Paper, TextField , Card, CardContent} from '@mui/material';  
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container'; 

function NewLanding()
{
    return ( 
        <> 
        <ResponsiveAppBar /> 
        <Box maxWidth={2100} sx={{ mx: 'auto', display: 'flex', flexWrap: 'wrap','& > :not(style)': {  maxWidth: 2100, height: 'auto', mt:3 }}}>
        <Paper elevation={12} style = {{marginLeft: '0vw', display: 'inline-block' }}>
        
        <div style={{display:'flex'}}>
         <img src='./img/tech1.png' style={{ marginLeft:'3.5vw' , width:'38%', height:'38%'}}></img>   
        
          <Card elevation={8} style = {{ maxWidth: 800, minHeight: 130, marginTop: '10vw', marginLeft: '8vw', marginBottom: '10vw', marginRight: '8vw', background: ' linear-gradient(225deg, #FF3CAC 0%, #784BA0 50%, #2B86C5 100%)', color: 'white'}} component="span">  

                <CardContent style={{margin: '2vw'}} >
                <Typography gutterBottom variant="h4" component="div" >
                    Who we are?
                </Typography> 
                <br/>
                <Typography variant="body1" color="text.secondary" style={{color: 'white'}}>
            We Trendlyzer will unlock the full potential of the data and help you to make smarter
              decisions, gain knowledge with our data analysis by knowing about what is trending at
              your place or across globe. Our intuitive platform provides powerful insights and
              customizable visualizations, allowing you to extract meaningful insights and take
              action with confidence. So why to wait? Join a community of forward-thinking
              businesses who rely on our website to transform their data into success.
                </Typography> 

                </CardContent>

          </Card> 

          </div>


         </Paper>
        </Box> 



        <Box maxWidth={2100} sx={{ mx: 'auto', display: 'flex', flexWrap: 'wrap','& > :not(style)': { m: 0, maxWidth: 2100, height: 'auto', mt:3} }}>
        <Paper elevation={8} style = {{marginLeft: '0vw', display: 'inline-block'}}>
        
        <div style={{display:'flex'}}>
        
        
          <Card elevation={8} style = {{ minWidth: 400, minHeight: 200, marginTop: '10vw', marginLeft: '11vw',  marginBottom: '10vw', marginRight: '8vw', background: ' linear-gradient(225deg, #FF3CAC 0%, #784BA0 50%, #2B86C5 100%)'}} component="span">  

                <CardContent style={{margin:'3.5vw', color: 'white'}}>
                <Typography gutterBottom variant="h4" component="div" style={{color: 'white'}} >
                Our products 
                </Typography>   
                <br/>
                <Typography gutterBottom variant="h5" component="div" style={{color: 'white'}} >
                Trend research
                </Typography> 
                <br/>
                <Typography variant="body2" color="text.secondary" style={{color: 'white'}} >
                Browse across the globe
                </Typography> 
                <Typography variant="body2" color="text.secondary" style={{color: 'white'}} >
                In your language
                </Typography>
                <Typography variant="body2" color="text.secondary" style={{color: 'white'}} >
                Know in detail of it is exactly
                </Typography> 
                <br/><br/>
                <Typography gutterBottom variant="h5" component="div" style={{color: 'white'}} >
                Sentimental analysis
                </Typography> 
                <br/>
                <Typography variant="body2" color="text.secondary" style={{color: 'white'}} >
                What people across globe think of it?
                </Typography> 
                <Typography variant="body2" color="text.secondary" style={{color: 'white'}} >
                Is it posiitve or negative? 
                </Typography>
                <Typography variant="body2" color="text.secondary" style={{color: 'white'}} >
                Export at your comfort
                </Typography> 
                <Typography variant="body2" color="text.secondary" style={{color: 'white'}} >
                In pdf, xcel, csv format
                </Typography> 

                </CardContent>

          </Card>  

          <img src='./img/tech-3.png' style={{ marginTop:'10vw', marginLeft:'2vw', width:'50%', height:'50%'}}></img>   

          </div>


         </Paper>
        </Box>
        
      

        <Box maxWidth={2100} sx={{ mx: 'auto', display: 'flex', flexWrap: 'wrap','& > :not(style)': { m: 0, maxWidth: 2100, height: 'auto', mt:3}}}>
        <Paper elevation={8} style = {{marginLeft: '0vw', display: 'inline-block'}}>
        
        <div style={{display:'flex'}}>
         <img src='./img/tech-4.png' style={{ marginLeft:'6vw' , width:'36%', height:'auto'}}></img>   
        
          <Card elevation={12} style = {{ minWidth: 300, maxWidth: 800, minHeight: 150, marginTop: '10vw', marginLeft: '8vw', marginBottom: '10vw', marginRight: '8vw', background: ' linear-gradient(225deg, #FF3CAC 0%, #784BA0 50%, #2B86C5 100%)'}} component="span">  

                <CardContent  style={{margin:'3vw', color: 'white'}}>
                <Typography gutterBottom variant="h4" component="div">
                Why us?
                </Typography> 
                <br/>
                <Typography variant="body1"  color="text.secondary" style={{color: 'white'}} >
                     Do you want to know about cool stuff, be upgraded and a influential person?
                     Then  we are the right place for you. You will get data based on your feed which will help you to make informed decisions.<br></br>
                     Upgrade yourself on your interests and stand out of the crowd!!
                </Typography> 

                </CardContent>

          </Card> 

          </div>


         </Paper>
        </Box> 

        
        <Container component="main" maxWidth = {false} > 

<Box
  sx={{  
    marginTop: 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  }}
>
  <Typography component="h1" variant="h5">
    Contact us
  </Typography>
  <Box component="form"  noValidate sx={{ mt: 1, mb: 6 }}>
    <TextField
      margin="normal"
      required
      fullWidth
      id="Name"
      label="Name"
      name="Name"
      autoComplete="Name"
      autoFocus
    />
    <TextField
      margin="normal"
      required
      fullWidth
      id="email"
      label="Email Address"
      name="email"
      autoComplete="email"
      autoFocus
    /> 
    <TextField
      margin="normal"
      required
      fullWidth 
      multiline 
      rows ={6}
      id="message"
      label="Write your message"
      name="message"
      autoComplete="message"
      autoFocus
    />

    <Button
      type="submit"
      fullWidth
      variant="contained"
      sx={{ mt: 3, mb: 2, background:'#800080' }}
    >
      Send
    </Button>
  </Box>
</Box>
</Container>
        </>
    )
}

export default NewLanding;