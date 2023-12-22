import { createContext, useContext, useState, useEffect } from "react";

const ModalContext = createContext();

export const useModal = () => {
    return useContext(ModalContext);
}

export const ModalProvider = ({ children }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    }

    const closeModal = () => {
        setIsModalOpen(false);
    }

    useEffect(() => {
        console.log(isModalOpen); 
    }, [isModalOpen])

    return (
        <ModalContext.Provider value={{ isModalOpen, openModal, closeModal }}>
            { children }
        </ModalContext.Provider>
    )
}

