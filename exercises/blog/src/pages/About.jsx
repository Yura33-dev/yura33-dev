import puppy1 from './../assets/puppy-1.jpg';
import puppy2 from './../assets/puppy-2.jpg';
import puppy3 from './../assets/puppy-3.jpg';
import puppy4 from './../assets/puppy-4.jpg';

function AboutPage() {
  return (
    <main>
      <section className="py-8">
        <div className="container m-auto px-5">
          <h1 className="text-4xl mb-4">About us</h1>
          <p className="mb-10 max-w-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde minus
            suscipit possimus doloremque explicabo eius in laborum? Optio, omnis
            dolores soluta voluptatibus labore eveniet dolorum voluptates
            blanditiis voluptatum hic quis!
          </p>
          <div>
            <h2 className="text-2xl mb-4">What we do</h2>
            <ul className="flex gap-2">
              <li className="basis-[calc((100%-1.5rem)_/_4)]">
                <div className="h-60 mb-5">
                  <img
                    src={puppy1}
                    alt="dog"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
              </li>
              <li className="basis-[calc((100%-1.5rem)_/_4)]">
                <div className="h-60 mb-5">
                  <img
                    src={puppy2}
                    alt="dog"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
              </li>
              <li className="basis-[calc((100%-1.5rem)_/_4)]">
                <div className="h-60 mb-5">
                  <img
                    src={puppy3}
                    alt="dog"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
              </li>
              <li className="basis-[calc((100%-1.5rem)_/_4)]">
                <div className="h-60 mb-5">
                  <img
                    src={puppy4}
                    alt="dog"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}

export default AboutPage;
