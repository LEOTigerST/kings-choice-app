import React from 'react';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import { CreateGameDesktop } from './CreateGameDesktop';
import { CreateGameMobile } from './CreateGameMobile';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export const CreateGameModal: React.FC<Props> = ({ isOpen, onClose }) => {
  const isDesktop = useMediaQuery('(min-width: 768px)');

  if (!isOpen) {
    return null;
  }

  return isDesktop ? <CreateGameDesktop onClose={onClose} /> : <CreateGameMobile onClose={onClose} />;
};
