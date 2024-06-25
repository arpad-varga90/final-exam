export default function CatCard(props) {
  const { name, image, description } = props.catObj;
  console.log(image);
  return (
    <div className="card">
      <img src={image} alt="cute-cat-image" />
      <div className="content">
        <h2>{name}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}
