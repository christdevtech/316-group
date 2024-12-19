import type { Block, Field } from 'payload'

import {
  FixedToolbarFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

import { linkGroup } from '../../fields/linkGroup'
import { textColorPickerAll } from '@/fields/textColorPicker'

export const VerticalCTAFields: Field[] = [
  {
    name: 'subtitle',
    type: 'text',
  },
  {
    name: 'title',
    type: 'text',
  },
  { name: 'padTheTitle', type: 'checkbox', defaultValue: false },
  textColorPickerAll({
    overrides: {
      label: 'Title Colour',
      name: 'titleColour',
    },
  }),
  {
    name: 'description',
    type: 'richText',
    editor: lexicalEditor({
      features: ({ rootFeatures }) => {
        return [...rootFeatures, FixedToolbarFeature(), InlineToolbarFeature()]
      },
    }),
  },
  linkGroup({
    appearances: ['default', 'outline'],
    overrides: {
      maxRows: 2,
      required: false,
    },
  }),
]

export const VerticalCallToAction: Block = {
  slug: 'vcta',
  interfaceName: 'VerticalCallToActionBlock',
  fields: VerticalCTAFields,
  labels: {
    plural: 'Vertical Calls to Action',
    singular: 'Vertical Call to Action',
  },
}
