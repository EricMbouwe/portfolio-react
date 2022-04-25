function Article({ data }) {
  const { title, date, link } = data;

  return (
    <div>
      <small className="article_date d-block">{date}</small>
      <a
        href={link}
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
