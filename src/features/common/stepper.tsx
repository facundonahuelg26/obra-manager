import { Button } from '@heroui/button'
import { Card } from '@heroui/card'
import { Divider } from '@heroui/divider'
import { Tab, Tabs } from '@heroui/tabs'
import { useState } from 'react'
import RenderIcon from './render-icon'

const Stepper = () => {
  const [step, setStep] = useState(0)
  const steps = ['Datos generales', 'Datos del cliente', 'Otros datos']

  return (
    <Card>
      <Tabs
        selectedKey={step.toString()}
        onSelectionChange={(key) => setStep(Number(key))}
        isVertical
        disableCursorAnimation
      >
        {steps.map((label, i) => (
          <Tab
            key={i.toString()}
            className='h-16'
            title={
              <div className='w-64 flex items-start gap-4 relative'>
                {/* Paso: círculo + número al lado + label */}
                <div className='flex items-center gap-2'>
                  {/* Círculo */}
                  <div
                    className={`
                        w-6 h-6 flex items-center justify-center rounded-full text-md font-bold
                        ${
                          i < step
                            ? 'bg-primary text-white' // completado
                            : i === step
                            ? 'border-4 border-primary' // activo
                            : 'border-4 border-default' // pendiente
                        }
                    `}
                  >
                    {i < step ? <RenderIcon dataIcon='gg:check' /> : ''}
                  </div>

                  {/* Número y label */}
                  <div className='flex flex-col'>
                    <div className='flex items-center gap-1'>
                      {/* Número afuera del círculo */}
                      <span className='text-lg font-semibold'>{i + 1}</span>

                      {/* Label */}
                      <span className='text-md font-semibold'>{label}</span>
                    </div>
                  </div>
                </div>

                {/* Divider vertical entre círculos */}
                {i < steps.length - 1 && (
                  <div className='absolute left-[11px] top-[32px] flex justify-center'>
                    <Divider
                      orientation='vertical'
                      className={`h-8 w-1 ${i < step ? 'bg-primary' : ''}`}
                    />
                  </div>
                )}
              </div>
            }
          >
            {/* Contenido del paso */}
            <div className='p-4'>
              <p>Contenido de {label}</p>
              <div className='flex justify-between mt-4'>
                <Button
                  isDisabled={step === 0}
                  variant='ghost'
                  className='font-medium'
                  onClick={() => setStep((s) => s - 1)}
                >
                  Anterior
                </Button>
                <Button
                  color='primary'
                  className='font-medium'
                  onClick={() => {
                    if (step < steps.length - 1) setStep((s) => s + 1)
                  }}
                >
                  {step < steps.length - 1 ? 'Siguiente' : 'Finalizar'}
                </Button>
              </div>
            </div>
          </Tab>
        ))}
      </Tabs>
    </Card>
  )
}

export default Stepper
