import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectQuote } from './quoteSlice';
import styles from './Quote.module.css';
import { fetchQuote } from './quoteAPI';

export function Quote() {

  const dispatch = useDispatch();
  dispatch(fetchQuote);
  
  const quote = useSelector(selectQuote);

  return (
    <div class={styles.quote}>
      {quote}
    </div>
  );
}
