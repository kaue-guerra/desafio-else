import { createContext, ReactNode, useContext, useState } from 'react'

interface ModalProviderProps {
    children: ReactNode
}

const ModalContext = createContext({});

const ModalProvider = ({ children }: ModalProviderProps) => {
    const [modalState, setState] = useState({ visible: false });

    const openModal = (payload: any) =>
        setState({ ...payload, visible: true });

    const closeModal = () => setState({ visible: false });

    return (
        <ModalContext.Provider value={{ modalState, openModal, closeModal }}>
            {children}
        </ModalContext.Provider>
    );
};

const useModalContext = () => {
    const context = useContext(ModalContext);
    return context;
};

export { useModalContext, ModalProvider }