import { useEffect, useState } from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { dataStore } from "../../globalState/Store";
import { useHistory } from "react-router-dom";
import "./List.css";

interface EventDisplay {
  name: string;
  image: string;
  meta?: string;
  description: string;
  extra?: string;
}

const List = () => {
  let history = useHistory();
  const [data, setData] = useState<EventDisplay[]>([]);

  const isData: EventDisplay[] | undefined = dataStore.useState((d) => {
    return d.filteredData === undefined ? d.data : d.filteredData;
  });

  useEffect(() => {
    if (!!isData) setData(isData);
  }, [isData]);

  const handleClick = () => {
    history.push("/hall");
  };

  return (
    <div className="listContainer">
      {data.map((d) => {
        return (
          <div>
            <Card className="root" onClick={handleClick}>
              <CardActionArea>
                <CardMedia className="media" image={d.image} title={d.name} />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {d.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {d.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Share
                </Button>
                <Button size="small" color="primary">
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </div>
        );
      })}
    </div>
  );
};

export default List;
