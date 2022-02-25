import { useState } from 'react';
import {
    Input, Table, Button, Popconfirm, message, Tooltip, Modal, Form,
    Radio,
    Select,
    Cascader,
    DatePicker,
    InputNumber,
    TreeSelect,
    Switch,
} from 'antd';
import { EditOutlined, DeleteOutlined, PlusOutlined } from '@ant-design/icons';
import './style.css';

const { Search } = Input;

function confirm(e: any) {
    console.log(e);
    message.success('Anúncio deletado com sucesso');
}


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
        render: () => (
            <>
                <Tooltip title="Editar anúncio">
                    <Button type='primary' style={{ marginRight: '1rem' }}>
                        <EditOutlined />
                    </Button>
                </Tooltip>
                <Popconfirm
                    title="Deseja deletar o anúncio?"
                    onConfirm={confirm}
                    okText="Sim"
                    cancelText="Não"
                >
                    <Tooltip title="Deletar anúncio">
                        <Button danger>
                            <DeleteOutlined />
                        </Button>
                    </Tooltip>
                </Popconfirm>
            </>
        )
    },
];

const data = [
    {
        key: '1',
        brand: 'Renault',
        model: 'Kwid',
        year: '2022',
        price: 'R$ 60.000,00',
    },
    {
        key: '2',
        brand: 'Renault',
        model: 'Kwid',
        year: '2022',
        price: 'R$ 60.000,00',
    },
    {
        key: '3',
        brand: 'Renault',
        model: 'Kwid',
        year: '2022',
        price: 'R$ 60.000,00',
    },
];


export function Admin() {

    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

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
                onOk={handleOk} onCancel={handleCancel}
                width={800}
            >
                <Form
                    labelCol={{ span: 4 }}
                    wrapperCol={{ span: 14 }}
                    layout="horizontal"
                >
                    <Form.Item label="Marca">
                        <Input />
                    </Form.Item>
                    <Form.Item label="Modelo">
                        <Input />
                    </Form.Item>
                    <Form.Item label="Ano">
                        <Input />
                    </Form.Item>
                    <Form.Item label="Preço">
                        <Input />
                    </Form.Item>
                    <Form.Item label="Cor">
                        <Input />
                    </Form.Item>
                    <Form.Item label="Km Rodados">
                        <InputNumber controls={false} />
                    </Form.Item>
                    <Form.Item label="Placa">
                        <Input />
                    </Form.Item>
                    <Form.Item label="Cidade">
                        <Input />
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