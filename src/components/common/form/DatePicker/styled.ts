import styled from 'styled-components';

export const StyledDayPicker = styled.div`
  position: relative;
  width: 100%;
  min-width: 200px;
  font-family: sans-serif;

  --rdp-cell-size: 40px;
  --rdp-accent-color: #80bc00;
  --rdp-background-color: rgba(128, 188, 0, 0.2);
  /* Switch to dark colors for dark themes */
  --rdp-accent-color-dark: #628f01;
  --rdp-background-color-dark: rgba(128, 188, 0, 0.6);
  /* Outline border for focused elements */
  --rdp-outline: 2px solid var(--rdp-accent-color);
  /* Outline border for focused and selected elements */
  --rdp-outline-selected: 2px solid rgba(0, 0, 0, 0.75);

  .rdp-day_outside {
    color: #dddddd;
  }
`;
