import { useEffect, useState } from "react";
import {
  getReviewsById,
  getSerialsReviewsById,
} from "../../services/movies-api";
import moment from "moment/moment";
import { Data, Item, List, Name, Styled, Text } from "./Reviews.styled";
import { Title } from "../Title";

export const Reviews = ({ id, type }) => {
  const [reviews, setReviews] = useState([]);

  if (type) {
    useEffect(() => {
      async function getReviews() {
        try {
          const { results } = await getSerialsReviewsById(id);
          setReviews(results.splice(0, 3));
        } catch (error) {}
      }
      getReviews();
    }, [id]);
  } else {
    useEffect(() => {
      async function getReviews() {
        try {
          const { results } = await getReviewsById(id);
          setReviews(results.splice(0, 3));
        } catch (error) {}
      }
      getReviews();
    }, [id]);
  }

  return (
    <Styled>
      {reviews.length > 0 && (
        <>
          <Title>REVIEWS</Title>
          <List>
            {reviews.map(({ author, content, created_at, id }) => (
              <Item key={id}>
                <Name>{author}</Name>
                <Text>{content}</Text>
                <Data>{moment(created_at).format("MMMM Do YYYY")}</Data>
              </Item>
            ))}
          </List>
        </>
      )}
    </Styled>
  );
};
