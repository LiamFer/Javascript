type ContainerProps = {
  title: string;
  text: string;
};

export default function Container({ title, text }: ContainerProps) {
  return (
    <>
      <h2>{title}</h2>
      <p>{text}</p>
      <hr />
    </>
  );
}
