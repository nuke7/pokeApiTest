import { PropsWithoutRef } from 'react';

export interface CardProps {
  name: string;
  weight: number;
  photo: string;
}

function Card({ props }: PropsWithoutRef <{ props: CardProps }>) {
  return (
    <div
      style={{
        border: '1px solid black',
        padding: '1rem',
      }}
    >

      <div>
        <h3>{props.name}</h3>
        <p>
          Price:
          {' '}
          {props.weight * 100}
        </p>
        <img src={props.photo} alt={props.name} />
      </div>

    </div>
  );
}

export default Card;
