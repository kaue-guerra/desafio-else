import { useContext, useState } from 'react';
import { Input, Table, Button, Tooltip, Modal, Form } from 'antd';
import { EditOutlined, DeleteOutlined, PlusOutlined } from '@ant-design/icons';
import './style.css';


import { db } from '../../firebase-config'
import { collection, addDoc, doc, deleteDoc } from '@firebase/firestore';
import { CarsContext } from '../../context/CarsContext';

const { Search } = Input;

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

export function Admin() {
    const cars = useContext(CarsContext)

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [brand, setBrand] = useState('')
    const [model, setModel] = useState('')
    const [year, setYear] = useState('')
    const [price, setPrice] = useState('')
    const [color, setColor] = useState('')
    const [mileage, setMileage] = useState(0)
    const [licensePlate, setLicensePlate] = useState('')
    const [city, setCity] = useState('')


    const columns = [
        {
            title: 'Marca',
            dataIndex: 'brand',
            key: 'brand',
        },
        {
            title: 'Modelo',
            dataIndex: 'model',
            key: 'model',
        },
        {
            title: 'Ano',
            dataIndex: 'year',
            key: 'year',
        },
        {
            title: 'Preço',
            key: 'price',
            dataIndex: 'price',
        },
        {
            title: 'Ações',
            key: 'action',
            render: (car: Car) => (
                <>
                    <Tooltip title="Editar anúncio">
                        <Button type='primary' style={{ marginRight: '1rem' }}>
                            <EditOutlined />
                        </Button>
                    </Tooltip>
                    <Tooltip title="Deletar anúncio">
                        <Button danger onClick={() => deleteCar(car.id)}>
                            <DeleteOutlined />
                        </Button>
                    </Tooltip>
                </>
            )
        },
    ]

    const data = cars.map(car => (

        {
            id: car.id,
            brand: car.brand,
            model: car.model,
            year: car.year,
            price: car.price,
        }
    ))

    const showModal = () => {
        setIsModalVisible(true);
    };

    async function deleteCar(id: string) {
        const carDoc = doc(db, "cars", id);
        await deleteDoc(carDoc)
    }

    const createUser = async () => {
        const carsCollectionRef = collection(db, "cars");
        await addDoc(carsCollectionRef, { brand: brand, model: model, year: year, price: price, color: color, mileage: mileage, licensePlate: licensePlate, city: city })
        setIsModalVisible(false);
    }

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    return (
        <>
            <div className="content">

                <h1>Administrar Anúncios</h1>
                <Search
                    placeholder="Pesquisar anúncio"
                    allowClear
                    enterButton="Pesquisar"
                    size="large"
                />
                <div className='tableContainer'>
                    <Button style={{ marginBottom: "1rem" }} onClick={showModal}>Novo Anúncio</Button>
                    <Table columns={columns} dataSource={data} />
                </div>
            </div>
            <Modal
                title="Novo Anúncio"
                centered
                visible={isModalVisible}
                onCancel={handleCancel}
                width={800}
                footer={[
                    <Button type='primary' key='submit' htmlType='submit' onClick={createUser}>Cadastrar</Button>
                ]}
            >
                <Form
                    labelCol={{ span: 4 }}
                    wrapperCol={{ span: 14 }}
                    layout="horizontal"
                >
                    <Form.Item label="Marca">
                        <Input value={brand} onChange={event => setBrand(event.target.value)} />
                    </Form.Item>
                    <Form.Item label="Modelo">
                        <Input value={model} onChange={event => setModel(event.target.value)} />
                    </Form.Item>
                    <Form.Item label="Ano">
                        <Input value={year} onChange={event => setYear(event.target.value)} />
                    </Form.Item>
                    <Form.Item label="Preço">
                        <Input value={price} onChange={event => setPrice(event.target.value)} />
                    </Form.Item>
                    <Form.Item label="Cor">
                        <Input value={color} onChange={event => setColor(event.target.value)} />
                    </Form.Item>
                    <Form.Item label="Km Rodados">
                        <Input value={mileage} onChange={event => setMileage(Number(event.target.value))} />
                    </Form.Item>
                    <Form.Item label="Placa">
                        <Input value={licensePlate} onChange={event => setLicensePlate(event.target.value)} />
                    </Form.Item>
                    <Form.Item label="Cidade">
                        <Input value={city} onChange={event => setCity(event.target.value)} />
                    </Form.Item>
                    <Form.Item label="Fotos">
                        <Button
                            type="dashed"
                            style={{ width: '60%' }}
                            icon={<PlusOutlined />}
                        >
                            Adicionar fotos
                        </Button>
                    </Form.Item>

                </Form>
            </Modal>
        </>
    )
}