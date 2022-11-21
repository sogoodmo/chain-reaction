interface CardProps {
  heading: string;
  content: string;
}

const Card = (props: CardProps) => (
  <div className="rounded-3xl border">
    <h2 className="text-3xl font-bold leading-10 text-white">
      {props.heading}
    </h2>
    <h3 className="px-2 text-xl text-neutral-400">{props.content}</h3>
  </div>
);

export default Card;
