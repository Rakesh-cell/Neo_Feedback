import React from 'react';
import { Avatar, Card, Paragraph } from 'react-native-paper';
import { Rating, AirbnbRating } from 'react-native-ratings';
import { COLORS } from '../constants';


const LeftContent = props => <Avatar.Icon {...props} icon="account-tie" />


const FeedbackCardCustom = ({ feedback }) => {
  return (
    <Card elevation={3} style={{ marginTop: 5, backgroundColor:COLORS.bglightyellow}}>
      <Card.Content style={{paddingTop:-10}} >
        <Card.Title style={{paddingLeft:-10}} title={feedback.name} subtitle={"Roles"} left={LeftContent} />

        <Card.Content style={{paddingLeft:-10}} >
          <Rating
            startingValue={feedback.rating}
            readonly={true}
            imageSize={15}
            onFinishRating={() => {}}
            style={{ alignSelf: 'flex-start',}}
          />

          <Paragraph>{feedback.text}</Paragraph>
        </Card.Content>
      </Card.Content>
    </Card>
  );
};

export default FeedbackCardCustom;