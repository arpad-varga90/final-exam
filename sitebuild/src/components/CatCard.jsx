export default function CatCard(props) {
  const { name, image, description } = props.catObj;
  console.log(image);
  return (
    <div>
      <img src={image} alt="cute-cat-image" />
      <h2>{name}</h2>
      <p>{description}</p>
    </div>
  );
}
