import logo from './logo.svg';
import idIcon from './img/id-badge.svg';
import frameIcon from './img/frame.svg'
import marketingIcon from './img/currency.svg'
import webdevIcon from './img/palette.svg'
import './App.css';
import Hello from './comp/article/Article.jsx';
import './comp/hello/Hello.css';
import Article from './comp/article/Article.jsx'
import Recipe from './comp/recipe/Recipe.jsx'

function App() {
  return (
    <div className="App">
      <nav className="hello-container">
        <article className="hello-text">
          <p className='hello-subtext'>Hello There</p>
          <h1 className='hello.heading'>We Are Glint</h1>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum iusto assumenda ipsam laborum sint cumque ratione dolore perferendis voluptas, neque rem culpa eum aperiam, explicabo ducimus distinctio quis optio. Saepe expedita non tenetur iure et, necessitatibus quasi architecto totam, id enim quo possimus voluptatibus praesentium pariatur consequatur, cumque officia rerum ex. Modi veniam ex odit perferendis vitae, ducimus aspernatur voluptatum, maiores corporis repudiandae, ullam quod alias nostrum! Neque a animi hic quasi incidunt aut quaerat odio maiores doloremque quisquam nihil vitae distinctio obcaecati totam, laboriosam sunt fuga? Consequatur molestias rem quisquam error officiis blanditiis? Dolor porro perspiciatis amet quos ad!
          <section className="hello-num-container">
            <Hello num='127' text='Awards Received' />
            <Hello num='1505' text='Cups Of Coffee' />
            <Hello num='109' text='Projects Completed' />
            <Hello num='102' text='Happy Clients' />
          </section>
        </article>
      </nav>

      <main className='main-container'>

        <p className='main-subtext'>What We Do</p>
        <h2 className='main-heading'>We've got everything yout need to launch and grow your business</h2>

        <Article
          src={idIcon}
          alt='Id Icon'
          text='Brand Identity'
          content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id nibh tortor id aliquet. Condimentum id venenatis a condimentum vitae sapien pellentesque habitant morbi.'
        />

        <Article
          src={frameIcon}
          alt='Frame Icon'
          text='Illustration'
          content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id nibh tortor id aliquet. Condimentum id venenatis a condimentum vitae sapien pellentesque habitant morbi.'
        />

        <Article
          src={marketingIcon}
          alt='Marketing Icon'
          text='Marketing'
          content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id nibh tortor id aliquet. Condimentum id venenatis a condimentum vitae sapien pellentesque habitant morbi.'
        />

        <Article
          src={webdevIcon}
          alt='Palette Icon'
          text='Web Design'
          content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id nibh tortor id aliquet. Condimentum id venenatis a condimentum vitae sapien pellentesque habitant morbi.'
        />

        <section className='recipe-container'>
          <Recipe
            name='Lorem Ipsum'
            src='https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
            content='Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut'
            price='$17,96'
          />

          <Recipe
            name='Lorem Ipsum'
            src='https://images.unsplash.com/photo-1606787366850-de6330128bfc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
            content='Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut'
            price='$15,99'
          />

          <Recipe
            name='Lorem Ipsum'
            src='https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
            content='Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut'
            price='$14,98'
          />

          <Recipe
            name='Lorem Ipsum'
            src='https://images.unsplash.com/photo-1493770348161-369560ae357d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
            content='Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut'
            price='$14,98'
          />

          <Recipe
            name='Lorem Ipsum'
            src='https://images.unsplash.com/photo-1499028344343-cd173ffc68a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
            content='Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut'
            price='$15,99'
          />

          <Recipe
            name='Lorem Ipsum'
            src='https://images.unsplash.com/photo-1473093295043-cdd812d0e601?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
            content='Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut'
            price='$12,99'
          />

          <Recipe
            name='Lorem Ipsum'
            src='https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
            content='Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut'
            price='$12,99'
          />

          <Recipe
            name='Lorem Ipsum'
            src='https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
            content='Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut'
            price='$ 10,99'
          />
        </section>
      </main>
    </div>
  );
}

export default App;
