/* eslint-disable react/destructuring-assignment */
type CardProps = {
  name: string;
  weight: number;
  photo: string;
};

// eslint-disable-next-line import/prefer-default-export
export function Card(props: CardProps): JSX.Element {
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
