import { Button } from '@material-ui/core';

interface ButtonText {
  content?: string;
}

export default function DefaultButton({ content }: ButtonText) {
  return (
    <>
      <Button variant="contained" color="primary">
        {content ? content : 'click'}
      </Button>
    </>
  );
}
