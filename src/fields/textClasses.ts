import deepMerge from '@/utilities/deepMerge'
import { Field } from 'payload'

type textClassesType = (options?: {
  overrides?: Record<string, unknown>
  condition?: (_, siblingData) => boolean
}) => Field
export const textClasses: textClassesType = ({ condition = () => true, overrides = {} } = {}) => {
  const textResult: Field = {
    name: 'textClasses',
    type: 'select',
    label: 'Text Classes',
    hasMany: true,
    admin: {
      condition,
    },
    options: [
      { label: 'Inherit', value: 'text-inherit' },
      { label: 'Current', value: 'text-current' },
      { label: 'Transparent', value: 'text-transparent' },
      { label: 'Black', value: 'text-black' },
      { label: 'White', value: 'text-white' },
      { label: 'Slate 50', value: 'text-slate-50' },
      { label: 'Slate 100', value: 'text-slate-100' },
      { label: 'Slate 200', value: 'text-slate-200' },
      { label: 'Slate 300', value: 'text-slate-300' },
      { label: 'Slate 400', value: 'text-slate-400' },
      { label: 'Slate 500', value: 'text-slate-500' },
      { label: 'Slate 600', value: 'text-slate-600' },
      { label: 'Slate 700', value: 'text-slate-700' },
      { label: 'Slate 800', value: 'text-slate-800' },
      { label: 'Slate 900', value: 'text-slate-900' },
      { label: 'Slate 950', value: 'text-slate-950' },
      { label: 'Gray 50', value: 'text-gray-50' },
      { label: 'Gray 100', value: 'text-gray-100' },
      { label: 'Gray 200', value: 'text-gray-200' },
      { label: 'Gray 300', value: 'text-gray-300' },
      { label: 'Gray 400', value: 'text-gray-400' },
      { label: 'Gray 500', value: 'text-gray-500' },
      { label: 'Gray 600', value: 'text-gray-600' },
      { label: 'Gray 700', value: 'text-gray-700' },
      { label: 'Gray 800', value: 'text-gray-800' },
      { label: 'Gray 900', value: 'text-gray-900' },
      { label: 'Gray 950', value: 'text-gray-950' },
      { label: 'Zinc 50', value: 'text-zinc-50' },
      { label: 'Zinc 100', value: 'text-zinc-100' },
      { label: 'Zinc 200', value: 'text-zinc-200' },
      { label: 'Zinc 300', value: 'text-zinc-300' },
      { label: 'Zinc 400', value: 'text-zinc-400' },
      { label: 'Zinc 500', value: 'text-zinc-500' },
      { label: 'Zinc 600', value: 'text-zinc-600' },
      { label: 'Zinc 700', value: 'text-zinc-700' },
      { label: 'Zinc 800', value: 'text-zinc-800' },
      { label: 'Zinc 900', value: 'text-zinc-900' },
      { label: 'Zinc 950', value: 'text-zinc-950' },
      { label: 'Neutral 50', value: 'text-neutral-50' },
      { label: 'Neutral 100', value: 'text-neutral-100' },
      { label: 'Neutral 200', value: 'text-neutral-200' },
      { label: 'Neutral 300', value: 'text-neutral-300' },
      { label: 'Neutral 400', value: 'text-neutral-400' },
      { label: 'Neutral 500', value: 'text-neutral-500' },
      { label: 'Neutral 600', value: 'text-neutral-600' },
      { label: 'Neutral 700', value: 'text-neutral-700' },
      { label: 'Neutral 800', value: 'text-neutral-800' },
      { label: 'Neutral 900', value: 'text-neutral-900' },
      { label: 'Neutral 950', value: 'text-neutral-950' },
      { label: 'Stone 50', value: 'text-stone-50' },
      { label: 'Stone 100', value: 'text-stone-100' },
      { label: 'Stone 200', value: 'text-stone-200' },
      { label: 'Stone 300', value: 'text-stone-300' },
      { label: 'Stone 400', value: 'text-stone-400' },
      { label: 'Stone 500', value: 'text-stone-500' },
      { label: 'Stone 600', value: 'text-stone-600' },
      { label: 'Stone 700', value: 'text-stone-700' },
      { label: 'Stone 800', value: 'text-stone-800' },
      { label: 'Stone 900', value: 'text-stone-900' },
      { label: 'Stone 950', value: 'text-stone-950' },
      { label: 'Red 50', value: 'text-red-50' },
      { label: 'Red 100', value: 'text-red-100' },
      { label: 'Red 200', value: 'text-red-200' },
      { label: 'Red 300', value: 'text-red-300' },
      { label: 'Red 400', value: 'text-red-400' },
      { label: 'Red 500', value: 'text-red-500' },
      { label: 'Red 600', value: 'text-red-600' },
      { label: 'Red 700', value: 'text-red-700' },
      { label: 'Red 800', value: 'text-red-800' },
      { label: 'Red 900', value: 'text-red-900' },
      { label: 'Red 950', value: 'text-red-950' },
      { label: 'Orange 50', value: 'text-orange-50' },
      { label: 'Orange 100', value: 'text-orange-100' },
      { label: 'Orange 200', value: 'text-orange-200' },
      { label: 'Orange 300', value: 'text-orange-300' },
      { label: 'Orange 400', value: 'text-orange-400' },
      { label: 'Orange 500', value: 'text-orange-500' },
      { label: 'Orange 600', value: 'text-orange-600' },
      { label: 'Orange 700', value: 'text-orange-700' },
      { label: 'Orange 800', value: 'text-orange-800' },
      { label: 'Orange 900', value: 'text-orange-900' },
      { label: 'Orange 950', value: 'text-orange-950' },
      { label: 'Amber 50', value: 'text-amber-50' },
      { label: 'Amber 100', value: 'text-amber-100' },
      { label: 'Amber 200', value: 'text-amber-200' },
      { label: 'Amber 300', value: 'text-amber-300' },
      { label: 'Amber 400', value: 'text-amber-400' },
      { label: 'Amber 500', value: 'text-amber-500' },
      { label: 'Amber 600', value: 'text-amber-600' },
      { label: 'Amber 700', value: 'text-amber-700' },
      { label: 'Amber 800', value: 'text-amber-800' },
      { label: 'Amber 900', value: 'text-amber-900' },
      { label: 'Amber 950', value: 'text-amber-950' },
      { label: 'Yellow 50', value: 'text-yellow-50' },
      { label: 'Yellow 100', value: 'text-yellow-100' },
      { label: 'Yellow 200', value: 'text-yellow-200' },
      { label: 'Yellow 300', value: 'text-yellow-300' },
      { label: 'Yellow 400', value: 'text-yellow-400' },
      { label: 'Yellow 500', value: 'text-yellow-500' },
      { label: 'Yellow 600', value: 'text-yellow-600' },
      { label: 'Yellow 700', value: 'text-yellow-700' },
      { label: 'Yellow 800', value: 'text-yellow-800' },
      { label: 'Yellow 900', value: 'text-yellow-900' },
      { label: 'Yellow 950', value: 'text-yellow-950' },
      { label: 'Lime 50', value: 'text-lime-50' },
      { label: 'Lime 100', value: 'text-lime-100' },
      { label: 'Lime 200', value: 'text-lime-200' },
      { label: 'Lime 300', value: 'text-lime-300' },
      { label: 'Lime 400', value: 'text-lime-400' },
      { label: 'Lime 500', value: 'text-lime-500' },
      { label: 'Lime 600', value: 'text-lime-600' },
      { label: 'Lime 700', value: 'text-lime-700' },
      { label: 'Lime 800', value: 'text-lime-800' },
      { label: 'Lime 900', value: 'text-lime-900' },
      { label: 'Lime 950', value: 'text-lime-950' },
      { label: 'Green 50', value: 'text-green-50' },
      { label: 'Green 100', value: 'text-green-100' },
      { label: 'Green 200', value: 'text-green-200' },
      { label: 'Green 300', value: 'text-green-300' },
      { label: 'Green 400', value: 'text-green-400' },
      { label: 'Green 500', value: 'text-green-500' },
      { label: 'Green 600', value: 'text-green-600' },
      { label: 'Green 700', value: 'text-green-700' },
      { label: 'Green 800', value: 'text-green-800' },
      { label: 'Green 900', value: 'text-green-900' },
      { label: 'Green 950', value: 'text-green-950' },
      { label: 'Emerald 50', value: 'text-emerald-50' },
      { label: 'Emerald 100', value: 'text-emerald-100' },
      { label: 'Emerald 200', value: 'text-emerald-200' },
      { label: 'Emerald 300', value: 'text-emerald-300' },
      { label: 'Emerald 400', value: 'text-emerald-400' },
      { label: 'Emerald 500', value: 'text-emerald-500' },
      { label: 'Emerald 600', value: 'text-emerald-600' },
      { label: 'Emerald 700', value: 'text-emerald-700' },
      { label: 'Emerald 800', value: 'text-emerald-800' },
      { label: 'Emerald 900', value: 'text-emerald-900' },
      { label: 'Emerald 950', value: 'text-emerald-950' },
      { label: 'Teal 50', value: 'text-teal-50' },
      { label: 'Teal 100', value: 'text-teal-100' },
      { label: 'Teal 200', value: 'text-teal-200' },
      { label: 'Teal 300', value: 'text-teal-300' },
      { label: 'Teal 400', value: 'text-teal-400' },
      { label: 'Teal 500', value: 'text-teal-500' },
      { label: 'Teal 600', value: 'text-teal-600' },
      { label: 'Teal 700', value: 'text-teal-700' },
      { label: 'Teal 800', value: 'text-teal-800' },
      { label: 'Teal 900', value: 'text-teal-900' },
      { label: 'Teal 950', value: 'text-teal-950' },
      { label: 'Cyan 50', value: 'text-cyan-50' },
      { label: 'Cyan 100', value: 'text-cyan-100' },
      { label: 'Cyan 200', value: 'text-cyan-200' },
      { label: 'Cyan 300', value: 'text-cyan-300' },
      { label: 'Cyan 400', value: 'text-cyan-400' },
      { label: 'Cyan 500', value: 'text-cyan-500' },
      { label: 'Cyan 600', value: 'text-cyan-600' },
      { label: 'Cyan 700', value: 'text-cyan-700' },
      { label: 'Cyan 800', value: 'text-cyan-800' },
      { label: 'Cyan 900', value: 'text-cyan-900' },
      { label: 'Cyan 950', value: 'text-cyan-950' },
      { label: 'Sky 50', value: 'text-sky-50' },
      { label: 'Sky 100', value: 'text-sky-100' },
      { label: 'Sky 200', value: 'text-sky-200' },
      { label: 'Sky 300', value: 'text-sky-300' },
      { label: 'Sky 400', value: 'text-sky-400' },
      { label: 'Sky 500', value: 'text-sky-500' },
      { label: 'Sky 600', value: 'text-sky-600' },
      { label: 'Sky 700', value: 'text-sky-700' },
      { label: 'Sky 800', value: 'text-sky-800' },
      { label: 'Sky 900', value: 'text-sky-900' },
      { label: 'Sky 950', value: 'text-sky-950' },
      { label: 'Blue 50', value: 'text-blue-50' },
      { label: 'Blue 100', value: 'text-blue-100' },
      { label: 'Blue 200', value: 'text-blue-200' },
      { label: 'Blue 300', value: 'text-blue-300' },
      { label: 'Blue 400', value: 'text-blue-400' },
      { label: 'Blue 500', value: 'text-blue-500' },
      { label: 'Blue 600', value: 'text-blue-600' },
      { label: 'Blue 700', value: 'text-blue-700' },
      { label: 'Blue 800', value: 'text-blue-800' },
      { label: 'Blue 900', value: 'text-blue-900' },
      { label: 'Blue 950', value: 'text-blue-950' },
      { label: 'Indigo 50', value: 'text-indigo-50' },
      { label: 'Indigo 100', value: 'text-indigo-100' },
      { label: 'Indigo 200', value: 'text-indigo-200' },
      { label: 'Indigo 300', value: 'text-indigo-300' },
      { label: 'Indigo 400', value: 'text-indigo-400' },
      { label: 'Indigo 500', value: 'text-indigo-500' },
      { label: 'Indigo 600', value: 'text-indigo-600' },
      { label: 'Indigo 700', value: 'text-indigo-700' },
      { label: 'Indigo 800', value: 'text-indigo-800' },
      { label: 'Indigo 900', value: 'text-indigo-900' },
      { label: 'Indigo 950', value: 'text-indigo-950' },
      { label: 'Violet 50', value: 'text-violet-50' },
      { label: 'Violet 100', value: 'text-violet-100' },
      { label: 'Violet 200', value: 'text-violet-200' },
      { label: 'Violet 300', value: 'text-violet-300' },
      { label: 'Violet 400', value: 'text-violet-400' },
      { label: 'Violet 500', value: 'text-violet-500' },
      { label: 'Violet 600', value: 'text-violet-600' },
      { label: 'Violet 700', value: 'text-violet-700' },
      { label: 'Violet 800', value: 'text-violet-800' },
      { label: 'Violet 900', value: 'text-violet-900' },
      { label: 'Violet 950', value: 'text-violet-950' },
      { label: 'Purple 50', value: 'text-purple-50' },
      { label: 'Purple 100', value: 'text-purple-100' },
      { label: 'Purple 200', value: 'text-purple-200' },
      { label: 'Purple 300', value: 'text-purple-300' },
      { label: 'Purple 400', value: 'text-purple-400' },
      { label: 'Purple 500', value: 'text-purple-500' },
      { label: 'Purple 600', value: 'text-purple-600' },
      { label: 'Purple 700', value: 'text-purple-700' },
      { label: 'Purple 800', value: 'text-purple-800' },
      { label: 'Purple 900', value: 'text-purple-900' },
      { label: 'Purple 950', value: 'text-purple-950' },
      { label: 'Fuchsia 50', value: 'text-fuchsia-50' },
      { label: 'Fuchsia 100', value: 'text-fuchsia-100' },
      { label: 'Fuchsia 200', value: 'text-fuchsia-200' },
      { label: 'Fuchsia 300', value: 'text-fuchsia-300' },
      { label: 'Fuchsia 400', value: 'text-fuchsia-400' },
      { label: 'Fuchsia 500', value: 'text-fuchsia-500' },
      { label: 'Fuchsia 600', value: 'text-fuchsia-600' },
      { label: 'Fuchsia 700', value: 'text-fuchsia-700' },
      { label: 'Fuchsia 800', value: 'text-fuchsia-800' },
      { label: 'Fuchsia 900', value: 'text-fuchsia-900' },
      { label: 'Fuchsia 950', value: 'text-fuchsia-950' },
      { label: 'Pink 50', value: 'text-pink-50' },
      { label: 'Pink 100', value: 'text-pink-100' },
      { label: 'Pink 200', value: 'text-pink-200' },
      { label: 'Pink 300', value: 'text-pink-300' },
      { label: 'Pink 400', value: 'text-pink-400' },
      { label: 'Pink 500', value: 'text-pink-500' },
      { label: 'Pink 600', value: 'text-pink-600' },
      { label: 'Pink 700', value: 'text-pink-700' },
      { label: 'Pink 800', value: 'text-pink-800' },
      { label: 'Pink 900', value: 'text-pink-900' },
      { label: 'Pink 950', value: 'text-pink-950' },
      { label: 'Rose 50', value: 'text-rose-50' },
      { label: 'Rose 100', value: 'text-rose-100' },
      { label: 'Rose 200', value: 'text-rose-200' },
      { label: 'Rose 300', value: 'text-rose-300' },
      { label: 'Rose 400', value: 'text-rose-400' },
      { label: 'Rose 500', value: 'text-rose-500' },
      { label: 'Rose 600', value: 'text-rose-600' },
      { label: 'Rose 700', value: 'text-rose-700' },
      { label: 'Rose 800', value: 'text-rose-800' },
      { label: 'Rose 900', value: 'text-rose-900' },
      { label: 'Rose 950', value: 'text-rose-950' },
      { label: 'XS Text', value: 'text-xs' },
      { label: 'SM Text', value: 'text-sm' },
      { label: 'Base Text', value: 'text-base' },
      { label: 'LG Text', value: 'text-lg' },
      { label: 'XL Text', value: 'text-xl' },
      { label: '2XL Text', value: 'text-2xl' },
      { label: '3XL Text', value: 'text-3xl' },
      { label: '4XL Text', value: 'text-4xl' },
      { label: '5XL Text', value: 'text-5xl' },
      { label: '6XL Text', value: 'text-6xl' },
      { label: '7XL Text', value: 'text-7xl' },
      { label: '8XL Text', value: 'text-8xl' },
      { label: '9XL Text', value: 'text-9xl' },
      { label: '10XL Text', value: 'text-10xl' },
      { label: '11XL Text', value: 'text-11xl' },
      { label: '12XL Text', value: 'text-12xl' },
      { label: '13XL Text', value: 'text-13xl' },
      { label: 'MD XL Text', value: 'md:text-xl' },
      { label: 'MD 2XL Text', value: 'md:text-2xl' },
      { label: 'MD 3XL Text', value: 'md:text-3xl' },
      { label: 'MD 4XL Text', value: 'md:text-4xl' },
      { label: 'MD 5XL Text', value: 'md:text-5xl' },
      { label: 'MD 6XL Text', value: 'md:text-6xl' },
      { label: 'MD 7XL Text', value: 'md:text-7xl' },
      { label: 'MD 8XL Text', value: 'md:text-8xl' },
      { label: 'MD 9XL Text', value: 'md:text-9xl' },
      { label: 'MD 10XL Text', value: 'md:text-10xl' },
      { label: 'MD 11XL Text', value: 'md:text-11xl' },
      { label: 'MD 12XL Text', value: 'md:text-12xl' },
      // LG text options
      { label: 'LG XS Text', value: 'lg:text-xs' },
      { label: 'LG SM Text', value: 'lg:text-sm' },
      { label: 'LG Base Text', value: 'lg:text-base' },
      { label: 'LG XL Text', value: 'lg:text-xl' },
      { label: 'LG 2XL Text', value: 'lg:text-2xl' },
      { label: 'LG 3XL Text', value: 'lg:text-3xl' },
      { label: 'LG 4XL Text', value: 'lg:text-4xl' },
      { label: 'LG 5XL Text', value: 'lg:text-5xl' },
      { label: 'LG 6XL Text', value: 'lg:text-6xl' },
      { label: 'LG 7XL Text', value: 'lg:text-7xl' },
      { label: 'LG 8XL Text', value: 'lg:text-8xl' },
      { label: 'LG 9XL Text', value: 'lg:text-9xl' },
      { label: 'LG 10XL Text', value: 'lg:text-10xl' },
      { label: 'LG 11XL Text', value: 'lg:text-11xl' },
      { label: 'LG 12XL Text', value: 'lg:text-12xl' },
      // XL text options
      { label: 'XL XS Text', value: 'xl:text-xs' },
      { label: 'XL SM Text', value: 'xl:text-sm' },
      { label: 'XL Base Text', value: 'xl:text-base' },
      { label: 'XL XL Text', value: 'xl:text-xl' },
      { label: 'XL 2XL Text', value: 'xl:text-2xl' },
      { label: 'XL 3XL Text', value: 'xl:text-3xl' },
      { label: 'XL 4XL Text', value: 'xl:text-4xl' },
      { label: 'XL 5XL Text', value: 'xl:text-5xl' },
      { label: 'XL 6XL Text', value: 'xl:text-6xl' },
      { label: 'XL 7XL Text', value: 'xl:text-7xl' },
      { label: 'XL 8XL Text', value: 'xl:text-8xl' },
      { label: 'XL 9XL Text', value: 'xl:text-9xl' },
      { label: 'XL 10XL Text', value: 'xl:text-10xl' },
      { label: 'XL 11XL Text', value: 'xl:text-11xl' },
      { label: 'XL 12XL Text', value: 'xl:text-12xl' },

      { label: 'Medium Weight', value: 'font-medium' },
      { label: 'Semi-bold', value: 'font-semibold' },
      { label: 'Bold', value: 'font-bold' },
      { label: 'Extra-bold', value: 'font-extrabold' },
      { label: 'Black Weight', value: 'font-black' },
      { label: 'LG Medium Weight', value: 'lg:font-medium' },
      { label: 'LG Semi-bold', value: 'lg:font-semibold' },
      { label: 'LG Bold', value: 'lg:font-bold' },
      { label: 'LG Extra-bold', value: 'lg:font-extrabold' },
      { label: 'LG Black Weight', value: 'lg:font-black' },
      { label: 'Jost Font', value: 'font-jost' },
      { label: 'Urbanist Font', value: 'font-urbanist' },
      { label: 'Ubuntu Font', value: 'font-ubuntu' },
      { label: 'Inter Font', value: 'font-inter' },
      { label: 'PT None', value: 'pt-0' },
      { label: 'PT XS', value: 'pt-1' },
      { label: 'PT Small', value: 'pt-2' },
      { label: 'PT Medium', value: 'pt-4' },
      { label: 'PT Large', value: 'pt-6' },
      { label: 'PT XL', value: 'pt-8' },
      { label: 'PT 2XL', value: 'pt-10' },
      { label: 'PT 3XL', value: 'pt-12' },
      { label: 'PT 4XL', value: 'pt-16' },
      { label: 'PT 5XL', value: 'pt-20' },
      { label: 'PT 6XL', value: 'pt-24' },
      { label: 'PT 7XL', value: 'pt-32' },
      { label: 'PT 8XL', value: 'pt-40' },
      { label: 'MD PT None', value: 'md:pt-0' },
      { label: 'MD PT XS', value: 'md:pt-1' },
      { label: 'MD PT Small', value: 'md:pt-2' },
      { label: 'MD PT Medium', value: 'md:pt-4' },
      { label: 'MD PT Large', value: 'md:pt-6' },
      { label: 'MD PT XL', value: 'md:pt-8' },
      { label: 'MD PT 2XL', value: 'md:pt-10' },
      { label: 'MD PT 3XL', value: 'md:pt-12' },
      { label: 'MD PT 4XL', value: 'md:pt-16' },
      { label: 'MD PT 5XL', value: 'md:pt-20' },
      { label: 'MD PT 6XL', value: 'md:pt-24' },
      { label: 'MD PT 7XL', value: 'md:pt-32' },
      { label: 'MD PT 8XL', value: 'md:pt-40' },
      { label: 'LG PT None', value: 'lg:pt-0' },
      { label: 'LG PT XS', value: 'lg:pt-1' },
      { label: 'LG PT Small', value: 'lg:pt-2' },
      { label: 'LG PT Medium', value: 'lg:pt-4' },
      { label: 'LG PT Large', value: 'lg:pt-6' },
      { label: 'LG PT XL', value: 'lg:pt-8' },
      { label: 'LG PT 2XL', value: 'lg:pt-10' },
      { label: 'LG PT 3XL', value: 'lg:pt-12' },
      { label: 'LG PT 4XL', value: 'lg:pt-16' },
      { label: 'LG PT 5XL', value: 'lg:pt-20' },
      { label: 'LG PT 6XL', value: 'lg:pt-24' },
      { label: 'LG PT 7XL', value: 'lg:pt-32' },
      { label: 'LG PT 8XL', value: 'lg:pt-40' },
      { label: 'PB None', value: 'pb-0' },
      { label: 'PB XS', value: 'pb-1' },
      { label: 'PB Small', value: 'pb-2' },
      { label: 'PB Medium', value: 'pb-4' },
      { label: 'PB Large', value: 'pb-6' },
      { label: 'PB XL', value: 'pb-8' },
      { label: 'PB 2XL', value: 'pb-10' },
      { label: 'PB 3XL', value: 'pb-12' },
      { label: 'PB 4XL', value: 'pb-16' },
      { label: 'PB 5XL', value: 'pb-20' },
      { label: 'PB 6XL', value: 'pb-24' },
      { label: 'PB 7XL', value: 'pb-32' },
      { label: 'PB 8XL', value: 'pb-40' },
      // Padding Bottom for Medium Screens
      { label: 'PB (md) - None', value: 'md:pb-0' },
      { label: 'PB (md) - XS (1)', value: 'md:pb-1' },
      { label: 'PB (md) - S (2)', value: 'md:pb-2' },
      { label: 'PB (md) - M (4)', value: 'md:pb-4' },
      { label: 'PB (md) - L (6)', value: 'md:pb-6' },
      { label: 'PB (md) - XL (8)', value: 'md:pb-8' },
      { label: 'PB (md) - 2XL (10)', value: 'md:pb-10' },
      { label: 'PB (md) - 3XL (12)', value: 'md:pb-12' },
      { label: 'PB (md) - 4XL (16)', value: 'md:pb-16' },
      { label: 'PB (md) - 5XL (20)', value: 'md:pb-20' },
      { label: 'PB (md) - 6XL (24)', value: 'md:pb-24' },
      { label: 'PB (md) - 7XL (32)', value: 'md:pb-32' },
      { label: 'PB (md) - 8XL (40)', value: 'md:pb-40' },

      // Padding Bottom for Large Screens
      { label: 'PB (lg) - None', value: 'lg:pb-0' },
      { label: 'PB (lg) - XS (1)', value: 'lg:pb-1' },
      { label: 'PB (lg) - S (2)', value: 'lg:pb-2' },
      { label: 'PB (lg) - M (4)', value: 'lg:pb-4' },
      { label: 'PB (lg) - L (6)', value: 'lg:pb-6' },
      { label: 'PB (lg) - XL (8)', value: 'lg:pb-8' },
      { label: 'PB (lg) - 2XL (10)', value: 'lg:pb-10' },
      { label: 'PB (lg) - 3XL (12)', value: 'lg:pb-12' },
      { label: 'PB (lg) - 4XL (16)', value: 'lg:pb-16' },
      { label: 'PB (lg) - 5XL (20)', value: 'lg:pb-20' },
      { label: 'PB (lg) - 6XL (24)', value: 'lg:pb-24' },
      { label: 'PB (lg) - 7XL (32)', value: 'lg:pb-32' },
      { label: 'PB (lg) - 8XL (40)', value: 'lg:pb-40' },

      // Classes for text width from 20% to 100%
      { label: '20% Width', value: 'w-1/5' },
      { label: '1/3 Width', value: 'w-1/3' },
      { label: '40% Width', value: 'w-2/5' },
      { label: '50% Width', value: 'w-1/2' },
      { label: '60% Width', value: 'w-3/5' },
      { label: '70% Width', value: 'w-7/10' },
      { label: '80% Width', value: 'w-4/5' },
      { label: '90% Width', value: 'w-9/10' },
      { label: '100% Width', value: 'w-full' },
      // Classes for text width from 20% to 100% on medium screens
      { label: '20% Width (md)', value: 'md:w-1/5' },
      { label: '1/3 Width (md)', value: 'md:w-1/3' },
      { label: '40% Width (md)', value: 'md:w-2/5' },
      { label: '50% Width (md)', value: 'md:w-1/2' },
      { label: '60% Width (md)', value: 'md:w-3/5' },
      { label: '70% Width (md)', value: 'md:w-7/10' },
      { label: '80% Width (md)', value: 'md:w-4/5' },
      { label: '90% Width (md)', value: 'md:w-9/10' },
      { label: '100% Width (md)', value: 'md:w-full' },
      // Classes for text width from 20% to 100% on large screens
      { label: '20% Width (lg)', value: 'lg:w-1/5' },
      { label: '1/3 Width (lg)', value: 'lg:w-1/3' },
      { label: '40% Width (lg)', value: 'lg:w-2/5' },
      { label: '50% Width (lg)', value: 'lg:w-1/2' },
      { label: '60% Width (lg)', value: 'lg:w-3/5' },
      { label: '70% Width (lg)', value: 'lg:w-7/10' },
      { label: '80% Width (lg)', value: 'lg:w-4/5' },
      { label: '90% Width (lg)', value: 'lg:w-9/10' },
      { label: '100% Width (lg)', value: 'lg:w-full' },
    ],
  }

  return deepMerge(textResult, overrides)
}
