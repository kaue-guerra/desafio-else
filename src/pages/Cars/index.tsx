import { Card, Col, Row } from 'antd';
import { Fragment, useContext } from 'react';
import { CarsContext } from '../../context/CarsContext';
import { useModalContext } from '../../context/ModalContext';

import './style.css';


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


export function Cars() {

    const cars = useContext(CarsContext)
    const { openModal }: any = useModalContext
    const testModal = (car: Car) => openModal(car)

    return (
        <div className="card-wrapper">
            <Row gutter={16}>
                {cars?.map((car, key) => {
                    return (
                        <Fragment key={car.id}>
                            <Col span={8}>
                                <Card key={car.id} onClick={() => testModal(car)} cover={
                                    <img
                                        style={{ maxWidth: '300px', padding: '10px', height: 'auto' }}
                                        alt="example"
                                        src={`${car.img1}`}
                                    />
                                }
                                    title={`${car.brand} ${car.model}`} hoverable bordered={false} style={{ height: '450px' }}>
                                    <span className='infoCar'>Preço: {car.price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })} </span> <br />
                                    <span className='infoCar'>Marca: {car.brand} </span> <br />
                                    <span className='infoCar'>Modelo: {car.model} </span> <br />
                                    <span className='infoCar'>Ano: {car.year} </span> <br />
                                    <span className='infoCar'>Vizualições: 3</span>
                                </Card>
                            </Col>
                        </Fragment>
                    )
                })}
            </Row>
        </div>
    )
}