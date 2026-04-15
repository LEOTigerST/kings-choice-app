import React from 'react';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import { JoinGameDesktop } from './JoinGameDesktop';
import { JoinGameMobile } from './JoinGameMobile';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export const JoinGameModal: React.FC<Props> = ({ isOpen, onClose }) => {
  const isDesktop = useMediaQuery('(min-width: 768px)');

  if (!isOpen) {
    return null;
  }

  return isDesktop ? <JoinGameDesktop onClose={onClose} /> : <JoinGameMobile onClose={onClose} />;
};
