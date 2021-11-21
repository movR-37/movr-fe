import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { Button } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import "../list/List.css";
import "./InhouseServices.css";

export default function InhouseServices() {
  const allServices = [
    {
      title: "wedsta",
      name: "Wedsta",
      image:
        "https://image.wedmegood.com/resized-nw/570X/uploads/wmg_services/wedsta_dweb.jpg",
      description: "WMG At Home, Family Makeup Services"
    },

    {
      title: "genie-services",
      name: "Genie Services",
      image:
        "https://image.wedmegood.com/resized-nw/570X/uploads/wmg_services/genie_dweb.jpg",
      description: "Plan your dream wedding in your budget"
    },

    {
      title: "vbs",
      name: "Venue Booking Service",
      image:
        "https://image.wedmegood.com/resized-nw/570X/uploads/wmg_services/venue_dweb.jpg",
      description: "Best Price Guaranteed"
    },
    {
      title: "wedsta",
      name: "Wedsta",
      image:
        "https://image.wedmegood.com/resized-nw/570X/uploads/wmg_services/wedsta_dweb.jpg",
      description: "WMG At Home, Family Makeup Services"
    }
  ];

  return (
    <div className="inhouse-services-cards-master-container">
      <div className="service-cards-title">Services by Category</div>
      <Grid container spacing={2}>
        {allServices.map((service, idx) => {
          return (
            <Grid item={true} xs={12} md={6} key={idx} >
              <div className="service-cards-container">

                <Card className="card-service">

                  <CardActionArea>
                    <CardMedia
                      className="media"
                      image={service.image}
                      title={service.title}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        <div className="name-service">{service.name}</div>
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="span"
                      >
                        <div className="description-service"> <p>{service.description}</p> </div>
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <div className="btn-container">
                      <Button className="learn-more-btn">
                        <h4>Learn More</h4>
                      </Button>
                    </div>
                  </CardActions>

                </Card>

              </div>
            </Grid>
          );
        })}
      </Grid>
    </div >
  );
}
