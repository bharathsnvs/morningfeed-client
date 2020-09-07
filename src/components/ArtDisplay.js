import React from "react";
import { Divider, Image, Item } from "semantic-ui-react";


function ArtDisplay({ stream }) {
  const allImages = stream && [...stream[0].contents, ...stream[1].contents];
  console.log("ART to show", allImages);

  const shuffled = allImages.sort(() => 0.5 - Math.random());
  const selected = shuffled.slice(0, 10);

  return (
    <div>
      <div style={{ marginLeft: 15, marginTop: 15 }}>
        <br />
        <Item.Group size="large" relaxed>
          {stream &&
            selected.map((item) => (
              <Item>
                {item.imageUrl ? (<Item.Image src={item.imageUrl} size="large" />) : <div>None</div>}
                
                <Item.Content>
                  <Item.Header>{item.title}</Item.Header>
                  <Item.Meta>
                    <a className="price" href={item.imageUrl} target="_blank">
                      Source
                    </a>
                  </Item.Meta>
                </Item.Content>
              </Item>
            ))}
        </Item.Group>
      </div>
    </div>
  );
}

export default ArtDisplay;
