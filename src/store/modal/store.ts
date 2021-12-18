import { createStore, createApi } from 'effector';
import { Modal } from './modal.types';

export const modalStore = createStore<Modal>({
  modalType: undefined,
});

export const { openModal, closeModal } = createApi(modalStore, {
  openModal: (state, modalType: Modal['modalType']) => ({ ...state, modalType }),
  closeModal: (state) => ({ ...state, modalType: undefined }),
});
