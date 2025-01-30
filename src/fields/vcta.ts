import type { Block, Field } from 'payload'

import {
  FixedToolbarFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

import { linkGroup } from '@/fields/linkGroup'
import { textClasses } from '@/fields/textClasses'

export const VerticalCTAFields: Field[] = [
  {
    name: 'subtitle',
    type: 'text',
  },
  {
    name: 'title',
    type: 'text',
  },
  textClasses({ overrides: { name: 'titleClasses', label: 'Title Classes' } }),
  {
    name: 'description',
    type: 'richText',
    editor: lexicalEditor({
      features: ({ rootFeatures }) => {
        return [...rootFeatures, FixedToolbarFeature(), InlineToolbarFeature()]
      },
    }),
  },
  textClasses({
    overrides: {
      name: 'descriptionClasses',
      label: 'Description Classes',
    },
  }),
  linkGroup({
    appearances: ['default', 'outline'],
    overrides: {
      maxRows: 2,
      required: false,
    },
  }),
  {
    name: 'alignment',
    type: 'select',
    options: ['top', 'center', 'bottom'],
    defaultValue: 'top',
  },
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
