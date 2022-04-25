import Article from './Article';
import Footer from './Footer';
import Project from './Project';
import projects from '../utils/projects';
import articles from '../utils/articles';

function ScrollSide() {
 
  return (
    <aside>
      {projects.map((project) => (
        <Project key={project.order} data={project} />
      ))}

      <section className="articles p-md-5">
        <h4 className="articles font-weight-bold mb-1">ARTICLES</h4>
        <hr></hr>
        {articles.map((article) => (
          <Article key={article.id} data={article} />
        ))}
      </section>
      <Footer />
    </aside>
  );
}

export default ScrollSide;
