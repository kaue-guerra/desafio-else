import { createContext, ReactNode, useEffect, useState } from 'react';
import { db } from '../firebase-config'
import { collection, getDocs } from '@firebase/firestore';

interface Car {
    id: string;
    brand: string;
    model: string;
    year: string;
    price: number;
    color: string;
    mileage: number;
    licensePlate: string;
    city: string;
    img1: string;
    img2: string;
    img3: string;
    created_at: Date;
}

interface Cars {
    Cars: Car[];
}

interface CarsProviderProps {
    children: ReactNode
}

export const CarsContext = createContext<Car[]>([])

export function CarsProvider({ children }: CarsProviderProps) {
    const [cars, setCars] = useState<Cars[] | any>([]);
    const carsCollectionRef = collection(db, "cars");

    useEffect(() => {
        const getCars = async () => {
            const data = await getDocs(carsCollectionRef);
            setCars(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };
        getCars();
    }, [cars])

    return (
        <CarsContext.Provider value={cars}>
            {children}
        </CarsContext.Provider>
    )
}