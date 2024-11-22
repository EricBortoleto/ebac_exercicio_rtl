import { fireEvent, render, screen } from '@testing-library/react';
import PostComment from './';

describe('Teste para o componente PostComment', () => {
  it('Deve renderizar o componente corretamente', () => {
    render(<PostComment />);
    expect(screen.getByText('Comentar')).toBeInTheDocument();
  });

  it('Deve adicionar dois comentários', () => {
    render(<PostComment />);

    fireEvent.change(screen.getByTestId('comment-textarea'), {
      target: { value: 'Primeiro comentário' },
    });

    fireEvent.submit(screen.getByTestId('comment-form'));

    expect(screen.getByText('Primeiro comentário')).toBeInTheDocument();

    fireEvent.change(screen.getByTestId('comment-textarea'), {
      target: { value: 'Segundo comentário' },
    });

    fireEvent.submit(screen.getByTestId('comment-form'));

    expect(screen.getByText('Segundo comentário')).toBeInTheDocument();
  });
});
