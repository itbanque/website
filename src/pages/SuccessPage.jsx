import { useEffect, useState } from 'react';
import { successStories } from '../data/siteData';

export default function SuccessPage() {
  const [index, setIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState(null);

  function prevStory() {
    setIndex((value) => (value - 1 + successStories.length) % successStories.length);
  }

  function nextStory() {
    setIndex((value) => (value + 1) % successStories.length);
  }

  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === 'ArrowRight') {
        nextStory();
      }
      if (event.key === 'ArrowLeft') {
        prevStory();
      }
    }

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  return (
    <section className="container section">
      <div className="section-heading">
        <h1>Success Stories</h1>
        <p>Selected delivery outcomes from multi-domain AI programs.</p>
      </div>

      <div className="carousel">
        <div
          className="carousel-stage"
          onTouchStart={(event) => setTouchStartX(event.touches[0].clientX)}
          onTouchEnd={(event) => {
            if (touchStartX === null) return;
            const deltaX = event.changedTouches[0].clientX - touchStartX;
            if (deltaX > 50) prevStory();
            if (deltaX < -50) nextStory();
            setTouchStartX(null);
          }}
        >
          <div className="carousel-track" style={{ transform: `translateX(-${index * 100}%)` }}>
            {successStories.map((story) => (
              <article className="story-slide" key={story.title}>
                <div className="story-card">
                  <h2>{story.title}</h2>
                  <p className="story-lead">{story.lead}</p>
                  <ul>
                    {story.body.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <div className="story-tags">
                    {story.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>

          <button type="button" className="carousel-arrow left" aria-label="Previous story" onClick={prevStory}>
            &lt;
          </button>
          <button type="button" className="carousel-arrow right" aria-label="Next story" onClick={nextStory}>
            &gt;
          </button>
        </div>

        <div className="carousel-controls" aria-label="Select story">
          <div className="dot-row">
            {successStories.map((story, storyIndex) => (
              <button
                key={story.title}
                type="button"
                className={storyIndex === index ? 'dot active' : 'dot'}
                aria-label={`Go to story ${storyIndex + 1}`}
                onClick={() => setIndex(storyIndex)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
