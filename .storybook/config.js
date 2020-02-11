import { configure, addDecorator } from '@storybook/react'
import React from 'react'

import '@/assets/sass/app.sass'
import Decorator from './Decorator'
addDecorator(storyFn => <Decorator>{storyFn()}</Decorator>)

const req = require.context('@/', true, /\.stories\.js$/)
configure(req, module )
