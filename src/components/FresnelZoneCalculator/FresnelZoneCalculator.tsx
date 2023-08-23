import { useState } from 'react'
// Antd
import { Button, Card, Divider, Select, Space, Tooltip, Typography } from 'antd'
// Styles
import './styles/styles.css'
// Components
import { NumericInput } from './components'
// Icons
import { InfoCircleOutlined } from '@ant-design/icons'

const FresnelZoneCalculator = () => {
  const [frequency, setFrequency] = useState(2.4)
  const [distance, setDistance] = useState(0)
  const [radius, setRadius] = useState(0)

  const options = [
    {
      value: '2.4',
      label: '2.4 GHz'
    },
    {
      value: '5.8',
      label: '5.8 GHz'
    }
  ]

  const handleFrequencyChange = (value: string) => {
    setFrequency(Number(value))
  }

  const handleDistanceChange = (value: string) => {
    setDistance(Number(value))
  }

  const handleClean = () => {
    setDistance(0)
    setRadius(0)
  }

  const handleCalculate = () => {
    const radius = 8.656 * Math.sqrt(distance / frequency)
    setRadius(radius)
  }

  return (
    <div className='container'>
      <Space direction='vertical'>
        <Card
          title='Fresnel Zone Calculator'
          className='card'
        >
          <div
            className='input-container'
          >
            <NumericInput
              value={distance.toString()}
              onChange={handleDistanceChange}
            />
            <Divider type='vertical' className='divider' />
            <Space.Compact
              className='select-container'
            >
              <Select
                className='select'
                options={options}
                defaultValue={options[0].value}
                onChange={handleFrequencyChange}
              />
              <Tooltip title="Seleccione la frecuencia">
                <InfoCircleOutlined />
              </Tooltip>
            </Space.Compact>
          </div>
          <div
            className='button-container'
          >
            <Button
              className='button'
              onClick={handleClean}
            >
              Limpiar
            </Button>
            <Button
              className='button'
              type='primary'
              onClick={handleCalculate}
            >
              Calcular
            </Button>
          </div>
          <Typography.Text
            className='text'
          >
            El radio de la zona de Fresnel es: {radius.toFixed(2)} metros
          </Typography.Text>
        </Card>
        <div
          className='footer'
        >
          Autor: Sebastian Marzari
        </div>
      </Space>
    </div>
  )
}

export default FresnelZoneCalculator