/* global React */
const { useState: useStateGallery } = React;

function ProductGallery() {
  const images = [
    'product-images/1-2-1000x1000.webp', // From Ending FAST (now first)
    'product-images/3-1000x1000.webp',  // hero (bottle on stand)
    'product-images/2-1000x1000.webp',  // Conquer Dysfunction
    'product-images/4-1000x1000.webp',  // Unleash Inner Strength
    'product-images/5-1000x1000.webp',  // Purely Natural Safe
    'product-images/6-1000x1000.webp',  // Trusted by Thousands
    'product-images/7-1000x1000.webp',  // Power of 20 Herbs
    'product-images/8-996x1000.webp',   // How to Consume
  ];
  const [active, setActive] = useStateGallery(0);
  const [hover, setHover] = useStateGallery(null);
  const shown = hover != null ? hover : active;

  return (
    <div style={pgStyles.root} className="pg-root">
      <div style={pgStyles.stickyWrap} className="pg-sticky">
        <div style={pgStyles.thumbCol} className="pg-thumbs" onMouseLeave={() => setHover(null)}>
          {images.map((src, i) => (
            <div
              key={src}
              role="button"
              tabIndex={-1}
              onMouseEnter={() => setHover(i)}
              onClick={() => setActive(i)}
              className="pg-thumb"
              style={{ ...pgStyles.thumb, ...(active === i ? pgStyles.thumbActive : {}) }}
            >
              <img src={src} alt="" style={pgStyles.thumbImg} draggable={false} />
            </div>
          ))}
        </div>
        <div style={pgStyles.main} className="pg-main">
          <img src={images[shown]} alt="Black Thunder Active+" style={pgStyles.mainImg} />
        </div>
      </div>
    </div>
  );
}

const pgStyles = {
  root: {
    position: 'relative',
    height: '100%',
  },
  stickyWrap: {
    position: 'sticky',
    top: 24,
    paddingLeft: 100,
  },
  thumbCol: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    width: 84,
    display: 'flex',
    flexDirection: 'column',
    gap: 4,
    overflowY: 'auto',
    overflowX: 'hidden',
    paddingRight: 4,
    scrollbarWidth: 'thin',
    scrollbarColor: '#1a4d2e44 transparent',
  },
  thumb: {
    width: 80,
    height: 80,
    flexShrink: 0,
    border: 'none',
    outline: 'none',
    background: 'transparent',
    borderRadius: 4,
    padding: 0,
    cursor: 'pointer',
    overflow: 'hidden',
    boxShadow: 'none',
    WebkitTapHighlightColor: 'transparent',
    transition: 'box-shadow .15s',
    userSelect: 'none',
  },
  thumbActive: {
    outline: '1.5px solid #d4d4d4',
    outlineOffset: '-1.5px',
  },
  thumbImg: { width: '100%', height: '100%', objectFit: 'cover', display: 'block' },
  main: {
    background: '#fff',
    border: '1px solid #1a4d2e15',
    borderRadius: 4,
    overflow: 'hidden',
    aspectRatio: '1 / 1',
  },
  mainImg: { width: '100%', height: '100%', objectFit: 'cover', display: 'block' },
};

window.ProductGallery = ProductGallery;
