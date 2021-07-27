function Article({ data }) {
  const { title, date } = data;

  return (
    <div>
      <small className="article_date d-block">{date}</small>
      <a
        href="https://hackernoon.com/css-basics-how-to-take-a-control-gm6k3vxd"
        className="article_title text-black"
        target="blank"
      >
        {title}
      </a>
      <hr></hr>
    </div>
  );
}

export default Article;
