import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getQuote } from './quoteSlice';
import './App.css';

export default function App() {
  const text = useSelector((state) => state.quote.text);
  const author = useSelector((state) => state.quote.author);
  const dispatch = useDispatch();

  const updateBackground = () => {
    document.body.style.background =
      '#' + (((1 << 24) * Math.random()) | 0).toString(16).padStart(6, '0');
  };

  useEffect(() => {
    handleClick();
  }, []);

  const handleClick = () => {
    dispatch(getQuote());
    updateBackground();
  };

  return (
    <div className="d-flex min-vh-100 vw-100 justify-content-center align-items-center text-center border">
      <div id="quote-box" className="card shadow w-75">
        <div className="card-body p-5">
          <blockquote id="text" className="blockquote card-text">
            <i className="bi bi-quote"></i>
            {text}
          </blockquote>
          <p id="author" className="blockquote-footer card-text">
            {author}
          </p>
        </div>

        <div className="btn-toolbar justify-content-between m-3">
          <div className="btn-group">
            <a
              id="tweet-quote"
              href="https://twitter.com/intent/tweet"
              target="_blank"
            >
              <button
                id="tweet"
                type="button"
                className="btn btn-danger border"
              >
                <i className="bi bi-twitter"></i>
              </button>
            </a>
          </div>
          <div className="btn-group">
            <button
              id="new-quote"
              type="button"
              className="btn btn-primary text-nowrap"
              onClick={handleClick}
            >
              New Quote
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
