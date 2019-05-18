import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Modal from 'react-modal';
import Card from '../../components/Card';
import Button from '../../components/Button';
Modal.setAppElement('#root');

const MoreOptionsModal = ({ actions, isOpen, onRequestClose }) => (
  <Modal isOpen={isOpen} style={customStyles} contentLabel="More options modal" onRequestClose={onRequestClose}>
    <ModalCard>
      {actions &&
        actions.map(
          ({ text, onClick, isSevere }, id) =>
            isSevere ? (
              <SevereActionButton key={id} onClick={onClick}>
                {text}
              </SevereActionButton>
            ) : (
              <ActionButton key={id} onClick={onClick}>
                {text}
              </ActionButton>
            )
        )}
    </ModalCard>
  </Modal>
);

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(0,0,0,.5)',
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    transform: 'translate(-50%, -50%)',
    padding: 0,
    borderRadius: '12px',
  },
};

MoreOptionsModal.propTypes = {
  actions: PropTypes.array,
  isOpen: PropTypes.bool,
  onRequestClose: PropTypes.func,
};

const ModalCard = styled(Card)`
  width: 400px;
  display: flex;
  flex-direction: column;
`;

const ActionButton = styled(Button)`
  background-color: transparent;
  border-bottom: 0;
  border-left: 0;
  border-right: 0;
  border-top: 1px solid #efefef;
  color: #000;
  line-height: 1.5;
  font-size: 14px;
  margin: 0;
  min-height: 48px;
  padding: 4px 8px;
  text-align: center;
  user-select: none;
  vertical-align: middle;
`;

const SevereActionButton = styled(ActionButton)`
  color: #ed4956;
  font-weight: 700;
`;

export default MoreOptionsModal;
