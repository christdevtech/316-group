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
    hasMany: true,
    admin: {
      condition,
    },
    options: [
      // ------------------------
      // 1) COLORS (no screen-size prefixes)
      // ------------------------
      { label: 'Color - Inherit', value: 'text-inherit' },
      { label: 'Color - Current', value: 'text-current' },
      { label: 'Color - Transparent', value: 'text-transparent' },
      { label: 'Color - Black', value: 'text-black' },
      { label: 'Color - White', value: 'text-white' },

      // Slate
      { label: 'Color - Slate 50', value: 'text-slate-50' },
      { label: 'Color - Slate 100', value: 'text-slate-100' },
      { label: 'Color - Slate 200', value: 'text-slate-200' },
      { label: 'Color - Slate 300', value: 'text-slate-300' },
      { label: 'Color - Slate 400', value: 'text-slate-400' },
      { label: 'Color - Slate 500', value: 'text-slate-500' },
      { label: 'Color - Slate 600', value: 'text-slate-600' },
      { label: 'Color - Slate 700', value: 'text-slate-700' },
      { label: 'Color - Slate 800', value: 'text-slate-800' },
      { label: 'Color - Slate 900', value: 'text-slate-900' },
      { label: 'Color - Slate 950', value: 'text-slate-950' },

      // Gray
      { label: 'Color - Gray 50', value: 'text-gray-50' },
      { label: 'Color - Gray 100', value: 'text-gray-100' },
      { label: 'Color - Gray 200', value: 'text-gray-200' },
      { label: 'Color - Gray 300', value: 'text-gray-300' },
      { label: 'Color - Gray 400', value: 'text-gray-400' },
      { label: 'Color - Gray 500', value: 'text-gray-500' },
      { label: 'Color - Gray 600', value: 'text-gray-600' },
      { label: 'Color - Gray 700', value: 'text-gray-700' },
      { label: 'Color - Gray 800', value: 'text-gray-800' },
      { label: 'Color - Gray 900', value: 'text-gray-900' },
      { label: 'Color - Gray 950', value: 'text-gray-950' },

      // Zinc
      { label: 'Color - Zinc 50', value: 'text-zinc-50' },
      { label: 'Color - Zinc 100', value: 'text-zinc-100' },
      { label: 'Color - Zinc 200', value: 'text-zinc-200' },
      { label: 'Color - Zinc 300', value: 'text-zinc-300' },
      { label: 'Color - Zinc 400', value: 'text-zinc-400' },
      { label: 'Color - Zinc 500', value: 'text-zinc-500' },
      { label: 'Color - Zinc 600', value: 'text-zinc-600' },
      { label: 'Color - Zinc 700', value: 'text-zinc-700' },
      { label: 'Color - Zinc 800', value: 'text-zinc-800' },
      { label: 'Color - Zinc 900', value: 'text-zinc-900' },
      { label: 'Color - Zinc 950', value: 'text-zinc-950' },

      // Neutral
      { label: 'Color - Neutral 50', value: 'text-neutral-50' },
      { label: 'Color - Neutral 100', value: 'text-neutral-100' },
      { label: 'Color - Neutral 200', value: 'text-neutral-200' },
      { label: 'Color - Neutral 300', value: 'text-neutral-300' },
      { label: 'Color - Neutral 400', value: 'text-neutral-400' },
      { label: 'Color - Neutral 500', value: 'text-neutral-500' },
      { label: 'Color - Neutral 600', value: 'text-neutral-600' },
      { label: 'Color - Neutral 700', value: 'text-neutral-700' },
      { label: 'Color - Neutral 800', value: 'text-neutral-800' },
      { label: 'Color - Neutral 900', value: 'text-neutral-900' },
      { label: 'Color - Neutral 950', value: 'text-neutral-950' },

      // Stone
      { label: 'Color - Stone 50', value: 'text-stone-50' },
      { label: 'Color - Stone 100', value: 'text-stone-100' },
      { label: 'Color - Stone 200', value: 'text-stone-200' },
      { label: 'Color - Stone 300', value: 'text-stone-300' },
      { label: 'Color - Stone 400', value: 'text-stone-400' },
      { label: 'Color - Stone 500', value: 'text-stone-500' },
      { label: 'Color - Stone 600', value: 'text-stone-600' },
      { label: 'Color - Stone 700', value: 'text-stone-700' },
      { label: 'Color - Stone 800', value: 'text-stone-800' },
      { label: 'Color - Stone 900', value: 'text-stone-900' },
      { label: 'Color - Stone 950', value: 'text-stone-950' },

      // Red
      { label: 'Color - Red 50', value: 'text-red-50' },
      { label: 'Color - Red 100', value: 'text-red-100' },
      { label: 'Color - Red 200', value: 'text-red-200' },
      { label: 'Color - Red 300', value: 'text-red-300' },
      { label: 'Color - Red 400', value: 'text-red-400' },
      { label: 'Color - Red 500', value: 'text-red-500' },
      { label: 'Color - Red 600', value: 'text-red-600' },
      { label: 'Color - Red 700', value: 'text-red-700' },
      { label: 'Color - Red 800', value: 'text-red-800' },
      { label: 'Color - Red 900', value: 'text-red-900' },
      { label: 'Color - Red 950', value: 'text-red-950' },

      // Orange
      { label: 'Color - Orange 50', value: 'text-orange-50' },
      { label: 'Color - Orange 100', value: 'text-orange-100' },
      { label: 'Color - Orange 200', value: 'text-orange-200' },
      { label: 'Color - Orange 300', value: 'text-orange-300' },
      { label: 'Color - Orange 400', value: 'text-orange-400' },
      { label: 'Color - Orange 500', value: 'text-orange-500' },
      { label: 'Color - Orange 600', value: 'text-orange-600' },
      { label: 'Color - Orange 700', value: 'text-orange-700' },
      { label: 'Color - Orange 800', value: 'text-orange-800' },
      { label: 'Color - Orange 900', value: 'text-orange-900' },
      { label: 'Color - Orange 950', value: 'text-orange-950' },

      // Amber
      { label: 'Color - Amber 50', value: 'text-amber-50' },
      { label: 'Color - Amber 100', value: 'text-amber-100' },
      { label: 'Color - Amber 200', value: 'text-amber-200' },
      { label: 'Color - Amber 300', value: 'text-amber-300' },
      { label: 'Color - Amber 400', value: 'text-amber-400' },
      { label: 'Color - Amber 500', value: 'text-amber-500' },
      { label: 'Color - Amber 600', value: 'text-amber-600' },
      { label: 'Color - Amber 700', value: 'text-amber-700' },
      { label: 'Color - Amber 800', value: 'text-amber-800' },
      { label: 'Color - Amber 900', value: 'text-amber-900' },
      { label: 'Color - Amber 950', value: 'text-amber-950' },

      // Yellow
      { label: 'Color - Yellow 50', value: 'text-yellow-50' },
      { label: 'Color - Yellow 100', value: 'text-yellow-100' },
      { label: 'Color - Yellow 200', value: 'text-yellow-200' },
      { label: 'Color - Yellow 300', value: 'text-yellow-300' },
      { label: 'Color - Yellow 400', value: 'text-yellow-400' },
      { label: 'Color - Yellow 500', value: 'text-yellow-500' },
      { label: 'Color - Yellow 600', value: 'text-yellow-600' },
      { label: 'Color - Yellow 700', value: 'text-yellow-700' },
      { label: 'Color - Yellow 800', value: 'text-yellow-800' },
      { label: 'Color - Yellow 900', value: 'text-yellow-900' },
      { label: 'Color - Yellow 950', value: 'text-yellow-950' },

      // Lime
      { label: 'Color - Lime 50', value: 'text-lime-50' },
      { label: 'Color - Lime 100', value: 'text-lime-100' },
      { label: 'Color - Lime 200', value: 'text-lime-200' },
      { label: 'Color - Lime 300', value: 'text-lime-300' },
      { label: 'Color - Lime 400', value: 'text-lime-400' },
      { label: 'Color - Lime 500', value: 'text-lime-500' },
      { label: 'Color - Lime 600', value: 'text-lime-600' },
      { label: 'Color - Lime 700', value: 'text-lime-700' },
      { label: 'Color - Lime 800', value: 'text-lime-800' },
      { label: 'Color - Lime 900', value: 'text-lime-900' },
      { label: 'Color - Lime 950', value: 'text-lime-950' },

      // Green
      { label: 'Color - Green 50', value: 'text-green-50' },
      { label: 'Color - Green 100', value: 'text-green-100' },
      { label: 'Color - Green 200', value: 'text-green-200' },
      { label: 'Color - Green 300', value: 'text-green-300' },
      { label: 'Color - Green 400', value: 'text-green-400' },
      { label: 'Color - Green 500', value: 'text-green-500' },
      { label: 'Color - Green 600', value: 'text-green-600' },
      { label: 'Color - Green 700', value: 'text-green-700' },
      { label: 'Color - Green 800', value: 'text-green-800' },
      { label: 'Color - Green 900', value: 'text-green-900' },
      { label: 'Color - Green 950', value: 'text-green-950' },

      // Emerald
      { label: 'Color - Emerald 50', value: 'text-emerald-50' },
      { label: 'Color - Emerald 100', value: 'text-emerald-100' },
      { label: 'Color - Emerald 200', value: 'text-emerald-200' },
      { label: 'Color - Emerald 300', value: 'text-emerald-300' },
      { label: 'Color - Emerald 400', value: 'text-emerald-400' },
      { label: 'Color - Emerald 500', value: 'text-emerald-500' },
      { label: 'Color - Emerald 600', value: 'text-emerald-600' },
      { label: 'Color - Emerald 700', value: 'text-emerald-700' },
      { label: 'Color - Emerald 800', value: 'text-emerald-800' },
      { label: 'Color - Emerald 900', value: 'text-emerald-900' },
      { label: 'Color - Emerald 950', value: 'text-emerald-950' },

      // Teal
      { label: 'Color - Teal 50', value: 'text-teal-50' },
      { label: 'Color - Teal 100', value: 'text-teal-100' },
      { label: 'Color - Teal 200', value: 'text-teal-200' },
      { label: 'Color - Teal 300', value: 'text-teal-300' },
      { label: 'Color - Teal 400', value: 'text-teal-400' },
      { label: 'Color - Teal 500', value: 'text-teal-500' },
      { label: 'Color - Teal 600', value: 'text-teal-600' },
      { label: 'Color - Teal 700', value: 'text-teal-700' },
      { label: 'Color - Teal 800', value: 'text-teal-800' },
      { label: 'Color - Teal 900', value: 'text-teal-900' },
      { label: 'Color - Teal 950', value: 'text-teal-950' },

      // Cyan
      { label: 'Color - Cyan 50', value: 'text-cyan-50' },
      { label: 'Color - Cyan 100', value: 'text-cyan-100' },
      { label: 'Color - Cyan 200', value: 'text-cyan-200' },
      { label: 'Color - Cyan 300', value: 'text-cyan-300' },
      { label: 'Color - Cyan 400', value: 'text-cyan-400' },
      { label: 'Color - Cyan 500', value: 'text-cyan-500' },
      { label: 'Color - Cyan 600', value: 'text-cyan-600' },
      { label: 'Color - Cyan 700', value: 'text-cyan-700' },
      { label: 'Color - Cyan 800', value: 'text-cyan-800' },
      { label: 'Color - Cyan 900', value: 'text-cyan-900' },
      { label: 'Color - Cyan 950', value: 'text-cyan-950' },

      // Sky
      { label: 'Color - Sky 50', value: 'text-sky-50' },
      { label: 'Color - Sky 100', value: 'text-sky-100' },
      { label: 'Color - Sky 200', value: 'text-sky-200' },
      { label: 'Color - Sky 300', value: 'text-sky-300' },
      { label: 'Color - Sky 400', value: 'text-sky-400' },
      { label: 'Color - Sky 500', value: 'text-sky-500' },
      { label: 'Color - Sky 600', value: 'text-sky-600' },
      { label: 'Color - Sky 700', value: 'text-sky-700' },
      { label: 'Color - Sky 800', value: 'text-sky-800' },
      { label: 'Color - Sky 900', value: 'text-sky-900' },
      { label: 'Color - Sky 950', value: 'text-sky-950' },

      // Blue
      { label: 'Color - Blue 50', value: 'text-blue-50' },
      { label: 'Color - Blue 100', value: 'text-blue-100' },
      { label: 'Color - Blue 200', value: 'text-blue-200' },
      { label: 'Color - Blue 300', value: 'text-blue-300' },
      { label: 'Color - Blue 400', value: 'text-blue-400' },
      { label: 'Color - Blue 500', value: 'text-blue-500' },
      { label: 'Color - Blue 600', value: 'text-blue-600' },
      { label: 'Color - Blue 700', value: 'text-blue-700' },
      { label: 'Color - Blue 800', value: 'text-blue-800' },
      { label: 'Color - Blue 900', value: 'text-blue-900' },
      { label: 'Color - Blue 950', value: 'text-blue-950' },

      // Indigo
      { label: 'Color - Indigo 50', value: 'text-indigo-50' },
      { label: 'Color - Indigo 100', value: 'text-indigo-100' },
      { label: 'Color - Indigo 200', value: 'text-indigo-200' },
      { label: 'Color - Indigo 300', value: 'text-indigo-300' },
      { label: 'Color - Indigo 400', value: 'text-indigo-400' },
      { label: 'Color - Indigo 500', value: 'text-indigo-500' },
      { label: 'Color - Indigo 600', value: 'text-indigo-600' },
      { label: 'Color - Indigo 700', value: 'text-indigo-700' },
      { label: 'Color - Indigo 800', value: 'text-indigo-800' },
      { label: 'Color - Indigo 900', value: 'text-indigo-900' },
      { label: 'Color - Indigo 950', value: 'text-indigo-950' },

      // Violet
      { label: 'Color - Violet 50', value: 'text-violet-50' },
      { label: 'Color - Violet 100', value: 'text-violet-100' },
      { label: 'Color - Violet 200', value: 'text-violet-200' },
      { label: 'Color - Violet 300', value: 'text-violet-300' },
      { label: 'Color - Violet 400', value: 'text-violet-400' },
      { label: 'Color - Violet 500', value: 'text-violet-500' },
      { label: 'Color - Violet 600', value: 'text-violet-600' },
      { label: 'Color - Violet 700', value: 'text-violet-700' },
      { label: 'Color - Violet 800', value: 'text-violet-800' },
      { label: 'Color - Violet 900', value: 'text-violet-900' },
      { label: 'Color - Violet 950', value: 'text-violet-950' },

      // Purple
      { label: 'Color - Purple 50', value: 'text-purple-50' },
      { label: 'Color - Purple 100', value: 'text-purple-100' },
      { label: 'Color - Purple 200', value: 'text-purple-200' },
      { label: 'Color - Purple 300', value: 'text-purple-300' },
      { label: 'Color - Purple 400', value: 'text-purple-400' },
      { label: 'Color - Purple 500', value: 'text-purple-500' },
      { label: 'Color - Purple 600', value: 'text-purple-600' },
      { label: 'Color - Purple 700', value: 'text-purple-700' },
      { label: 'Color - Purple 800', value: 'text-purple-800' },
      { label: 'Color - Purple 900', value: 'text-purple-900' },
      { label: 'Color - Purple 950', value: 'text-purple-950' },

      // Fuchsia
      { label: 'Color - Fuchsia 50', value: 'text-fuchsia-50' },
      { label: 'Color - Fuchsia 100', value: 'text-fuchsia-100' },
      { label: 'Color - Fuchsia 200', value: 'text-fuchsia-200' },
      { label: 'Color - Fuchsia 300', value: 'text-fuchsia-300' },
      { label: 'Color - Fuchsia 400', value: 'text-fuchsia-400' },
      { label: 'Color - Fuchsia 500', value: 'text-fuchsia-500' },
      { label: 'Color - Fuchsia 600', value: 'text-fuchsia-600' },
      { label: 'Color - Fuchsia 700', value: 'text-fuchsia-700' },
      { label: 'Color - Fuchsia 800', value: 'text-fuchsia-800' },
      { label: 'Color - Fuchsia 900', value: 'text-fuchsia-900' },
      { label: 'Color - Fuchsia 950', value: 'text-fuchsia-950' },

      // Pink
      { label: 'Color - Pink 50', value: 'text-pink-50' },
      { label: 'Color - Pink 100', value: 'text-pink-100' },
      { label: 'Color - Pink 200', value: 'text-pink-200' },
      { label: 'Color - Pink 300', value: 'text-pink-300' },
      { label: 'Color - Pink 400', value: 'text-pink-400' },
      { label: 'Color - Pink 500', value: 'text-pink-500' },
      { label: 'Color - Pink 600', value: 'text-pink-600' },
      { label: 'Color - Pink 700', value: 'text-pink-700' },
      { label: 'Color - Pink 800', value: 'text-pink-800' },
      { label: 'Color - Pink 900', value: 'text-pink-900' },
      { label: 'Color - Pink 950', value: 'text-pink-950' },

      // Rose
      { label: 'Color - Rose 50', value: 'text-rose-50' },
      { label: 'Color - Rose 100', value: 'text-rose-100' },
      { label: 'Color - Rose 200', value: 'text-rose-200' },
      { label: 'Color - Rose 300', value: 'text-rose-300' },
      { label: 'Color - Rose 400', value: 'text-rose-400' },
      { label: 'Color - Rose 500', value: 'text-rose-500' },
      { label: 'Color - Rose 600', value: 'text-rose-600' },
      { label: 'Color - Rose 700', value: 'text-rose-700' },
      { label: 'Color - Rose 800', value: 'text-rose-800' },
      { label: 'Color - Rose 900', value: 'text-rose-900' },
      { label: 'Color - Rose 950', value: 'text-rose-950' },

      // ------------------------
      // 2) FONT SIZE (and screen-size variants)
      // ------------------------
      { label: 'Size - XS', value: 'text-xs' },
      { label: 'Size - SM', value: 'text-sm' },
      { label: 'Size - Base', value: 'text-base' },
      { label: 'Size - LG', value: 'text-lg' },
      { label: 'Size - XL', value: 'text-xl' },
      { label: 'Size - 2XL', value: 'text-2xl' },
      { label: 'Size - 3XL', value: 'text-3xl' },
      { label: 'Size - 4XL', value: 'text-4xl' },
      { label: 'Size - 5XL', value: 'text-5xl' },
      { label: 'Size - 6XL', value: 'text-6xl' },
      { label: 'Size - 7XL', value: 'text-7xl' },
      { label: 'Size - 8XL', value: 'text-8xl' },
      { label: 'Size - 9XL', value: 'text-9xl' },
      { label: 'Size - 10XL', value: 'text-10xl' },
      { label: 'Size - 11XL', value: 'text-11xl' },
      { label: 'Size - 12XL', value: 'text-12xl' },
      { label: 'Size - 13XL', value: 'text-13xl' },

      // MD size variants
      { label: 'MD: Size - XL', value: 'md:text-xl' },
      { label: 'MD: Size - 2XL', value: 'md:text-2xl' },
      { label: 'MD: Size - 3XL', value: 'md:text-3xl' },
      { label: 'MD: Size - 4XL', value: 'md:text-4xl' },
      { label: 'MD: Size - 5XL', value: 'md:text-5xl' },
      { label: 'MD: Size - 6XL', value: 'md:text-6xl' },
      { label: 'MD: Size - 7XL', value: 'md:text-7xl' },
      { label: 'MD: Size - 8XL', value: 'md:text-8xl' },
      { label: 'MD: Size - 9XL', value: 'md:text-9xl' },
      { label: 'MD: Size - 10XL', value: 'md:text-10xl' },
      { label: 'MD: Size - 11XL', value: 'md:text-11xl' },
      { label: 'MD: Size - 12XL', value: 'md:text-12xl' },

      // LG size variants
      { label: 'LG: Size - XS', value: 'lg:text-xs' },
      { label: 'LG: Size - SM', value: 'lg:text-sm' },
      { label: 'LG: Size - Base', value: 'lg:text-base' },
      { label: 'LG: Size - XL', value: 'lg:text-xl' },
      { label: 'LG: Size - 2XL', value: 'lg:text-2xl' },
      { label: 'LG: Size - 3XL', value: 'lg:text-3xl' },
      { label: 'LG: Size - 4XL', value: 'lg:text-4xl' },
      { label: 'LG: Size - 5XL', value: 'lg:text-5xl' },
      { label: 'LG: Size - 6XL', value: 'lg:text-6xl' },
      { label: 'LG: Size - 7XL', value: 'lg:text-7xl' },
      { label: 'LG: Size - 8XL', value: 'lg:text-8xl' },
      { label: 'LG: Size - 9XL', value: 'lg:text-9xl' },
      { label: 'LG: Size - 10XL', value: 'lg:text-10xl' },
      { label: 'LG: Size - 11XL', value: 'lg:text-11xl' },
      { label: 'LG: Size - 12XL', value: 'lg:text-12xl' },

      // XL size variants
      { label: 'XL: Size - XS', value: 'xl:text-xs' },
      { label: 'XL: Size - SM', value: 'xl:text-sm' },
      { label: 'XL: Size - Base', value: 'xl:text-base' },
      { label: 'XL: Size - XL', value: 'xl:text-xl' },
      { label: 'XL: Size - 2XL', value: 'xl:text-2xl' },
      { label: 'XL: Size - 3XL', value: 'xl:text-3xl' },
      { label: 'XL: Size - 4XL', value: 'xl:text-4xl' },
      { label: 'XL: Size - 5XL', value: 'xl:text-5xl' },
      { label: 'XL: Size - 6XL', value: 'xl:text-6xl' },
      { label: 'XL: Size - 7XL', value: 'xl:text-7xl' },
      { label: 'XL: Size - 8XL', value: 'xl:text-8xl' },
      { label: 'XL: Size - 9XL', value: 'xl:text-9xl' },
      { label: 'XL: Size - 10XL', value: 'xl:text-10xl' },
      { label: 'XL: Size - 11XL', value: 'xl:text-11xl' },
      { label: 'XL: Size - 12XL', value: 'xl:text-12xl' },

      // ------------------------
      // 3) WEIGHT
      // ------------------------
      { label: 'Weight - Medium', value: 'font-medium' },
      { label: 'Weight - Semibold', value: 'font-semibold' },
      { label: 'Weight - Bold', value: 'font-bold' },
      { label: 'Weight - Extrabold', value: 'font-extrabold' },
      { label: 'Weight - Black', value: 'font-black' },

      // LG weight variants
      { label: 'LG: Weight - Medium', value: 'lg:font-medium' },
      { label: 'LG: Weight - Semibold', value: 'lg:font-semibold' },
      { label: 'LG: Weight - Bold', value: 'lg:font-bold' },
      { label: 'LG: Weight - Extrabold', value: 'lg:font-extrabold' },
      { label: 'LG: Weight - Black', value: 'lg:font-black' },

      // ------------------------
      // 4) FONT FAMILY
      // ------------------------
      { label: 'Font - Jost', value: 'font-jost' },
      { label: 'Font - Urbanist', value: 'font-urbanist' },
      { label: 'Font - Ubuntu', value: 'font-ubuntu' },
      { label: 'Font - Inter', value: 'font-inter' },

      // ------------------------
      // 5) PADDING TOP (PT)
      // ------------------------
      { label: 'PT - None', value: 'pt-0' },
      { label: 'PT - XS', value: 'pt-1' },
      { label: 'PT - Small', value: 'pt-2' },
      { label: 'PT - Medium', value: 'pt-4' },
      { label: 'PT - Large', value: 'pt-6' },
      { label: 'PT - XL', value: 'pt-8' },
      { label: 'PT - 2XL', value: 'pt-10' },
      { label: 'PT - 3XL', value: 'pt-12' },
      { label: 'PT - 4XL', value: 'pt-16' },
      { label: 'PT - 5XL', value: 'pt-20' },
      { label: 'PT - 6XL', value: 'pt-24' },
      { label: 'PT - 7XL', value: 'pt-32' },
      { label: 'PT - 8XL', value: 'pt-40' },

      // MD padding top
      { label: 'MD: PT - None', value: 'md:pt-0' },
      { label: 'MD: PT - XS', value: 'md:pt-1' },
      { label: 'MD: PT - Small', value: 'md:pt-2' },
      { label: 'MD: PT - Medium', value: 'md:pt-4' },
      { label: 'MD: PT - Large', value: 'md:pt-6' },
      { label: 'MD: PT - XL', value: 'md:pt-8' },
      { label: 'MD: PT - 2XL', value: 'md:pt-10' },
      { label: 'MD: PT - 3XL', value: 'md:pt-12' },
      { label: 'MD: PT - 4XL', value: 'md:pt-16' },
      { label: 'MD: PT - 5XL', value: 'md:pt-20' },
      { label: 'MD: PT - 6XL', value: 'md:pt-24' },
      { label: 'MD: PT - 7XL', value: 'md:pt-32' },
      { label: 'MD: PT - 8XL', value: 'md:pt-40' },

      // LG padding top
      { label: 'LG: PT - None', value: 'lg:pt-0' },
      { label: 'LG: PT - XS', value: 'lg:pt-1' },
      { label: 'LG: PT - Small', value: 'lg:pt-2' },
      { label: 'LG: PT - Medium', value: 'lg:pt-4' },
      { label: 'LG: PT - Large', value: 'lg:pt-6' },
      { label: 'LG: PT - XL', value: 'lg:pt-8' },
      { label: 'LG: PT - 2XL', value: 'lg:pt-10' },
      { label: 'LG: PT - 3XL', value: 'lg:pt-12' },
      { label: 'LG: PT - 4XL', value: 'lg:pt-16' },
      { label: 'LG: PT - 5XL', value: 'lg:pt-20' },
      { label: 'LG: PT - 6XL', value: 'lg:pt-24' },
      { label: 'LG: PT - 7XL', value: 'lg:pt-32' },
      { label: 'LG: PT - 8XL', value: 'lg:pt-40' },

      // ------------------------
      // 6) PADDING BOTTOM (PB)
      // ------------------------
      { label: 'PB - None', value: 'pb-0' },
      { label: 'PB - XS', value: 'pb-1' },
      { label: 'PB - Small', value: 'pb-2' },
      { label: 'PB - Medium', value: 'pb-4' },
      { label: 'PB - Large', value: 'pb-6' },
      { label: 'PB - XL', value: 'pb-8' },
      { label: 'PB - 2XL', value: 'pb-10' },
      { label: 'PB - 3XL', value: 'pb-12' },
      { label: 'PB - 4XL', value: 'pb-16' },
      { label: 'PB - 5XL', value: 'pb-20' },
      { label: 'PB - 6XL', value: 'pb-24' },
      { label: 'PB - 7XL', value: 'pb-32' },
      { label: 'PB - 8XL', value: 'pb-40' },

      // MD padding bottom
      { label: 'MD: PB - None', value: 'md:pb-0' },
      { label: 'MD: PB - XS', value: 'md:pb-1' },
      { label: 'MD: PB - Small', value: 'md:pb-2' },
      { label: 'MD: PB - Medium', value: 'md:pb-4' },
      { label: 'MD: PB - Large', value: 'md:pb-6' },
      { label: 'MD: PB - XL', value: 'md:pb-8' },
      { label: 'MD: PB - 2XL', value: 'md:pb-10' },
      { label: 'MD: PB - 3XL', value: 'md:pb-12' },
      { label: 'MD: PB - 4XL', value: 'md:pb-16' },
      { label: 'MD: PB - 5XL', value: 'md:pb-20' },
      { label: 'MD: PB - 6XL', value: 'md:pb-24' },
      { label: 'MD: PB - 7XL', value: 'md:pb-32' },
      { label: 'MD: PB - 8XL', value: 'md:pb-40' },

      // LG padding bottom
      { label: 'LG: PB - None', value: 'lg:pb-0' },
      { label: 'LG: PB - XS', value: 'lg:pb-1' },
      { label: 'LG: PB - Small', value: 'lg:pb-2' },
      { label: 'LG: PB - Medium', value: 'lg:pb-4' },
      { label: 'LG: PB - Large', value: 'lg:pb-6' },
      { label: 'LG: PB - XL', value: 'lg:pb-8' },
      { label: 'LG: PB - 2XL', value: 'lg:pb-10' },
      { label: 'LG: PB - 3XL', value: 'lg:pb-12' },
      { label: 'LG: PB - 4XL', value: 'lg:pb-16' },
      { label: 'LG: PB - 5XL', value: 'lg:pb-20' },
      { label: 'LG: PB - 6XL', value: 'lg:pb-24' },
      { label: 'LG: PB - 7XL', value: 'lg:pb-32' },
      { label: 'LG: PB - 8XL', value: 'lg:pb-40' },

      // ------------------------
      // 7) MARGIN TOP (MT)
      // ------------------------
      // Negative top margins
      { label: 'MT - (-8XL)', value: '-mt-40' },
      { label: 'MT - (-7XL)', value: '-mt-32' },
      { label: 'MT - (-6XL)', value: '-mt-24' },
      { label: 'MT - (-5XL)', value: '-mt-20' },
      { label: 'MT - (-4XL)', value: '-mt-16' },
      { label: 'MT - (-3XL)', value: '-mt-12' },
      { label: 'MT - (-2XL)', value: '-mt-10' },
      { label: 'MT - (-XL)', value: '-mt-8' },
      { label: 'MT - (-L)', value: '-mt-6' },
      { label: 'MT - (-M)', value: '-mt-4' },
      { label: 'MT - (-S)', value: '-mt-2' },
      { label: 'MT - (-XS)', value: '-mt-1' },

      // Positive top margins
      { label: 'MT - None', value: 'mt-0' },
      { label: 'MT - XS', value: 'mt-1' },
      { label: 'MT - S', value: 'mt-2' },
      { label: 'MT - M', value: 'mt-4' },
      { label: 'MT - L', value: 'mt-6' },
      { label: 'MT - XL', value: 'mt-8' },
      { label: 'MT - 2XL', value: 'mt-10' },
      { label: 'MT - 3XL', value: 'mt-12' },
      { label: 'MT - 4XL', value: 'mt-16' },
      { label: 'MT - 5XL', value: 'mt-20' },
      { label: 'MT - 6XL', value: 'mt-24' },
      { label: 'MT - 7XL', value: 'mt-32' },
      { label: 'MT - 8XL', value: 'mt-40' },

      // MD margin top
      { label: 'MD: MT - (-8XL)', value: 'md:-mt-40' },
      { label: 'MD: MT - (-7XL)', value: 'md:-mt-32' },
      { label: 'MD: MT - (-6XL)', value: 'md:-mt-24' },
      { label: 'MD: MT - (-5XL)', value: 'md:-mt-20' },
      { label: 'MD: MT - (-4XL)', value: 'md:-mt-16' },
      { label: 'MD: MT - (-3XL)', value: 'md:-mt-12' },
      { label: 'MD: MT - (-2XL)', value: 'md:-mt-10' },
      { label: 'MD: MT - (-XL)', value: 'md:-mt-8' },
      { label: 'MD: MT - (-L)', value: 'md:-mt-6' },
      { label: 'MD: MT - (-M)', value: 'md:-mt-4' },
      { label: 'MD: MT - (-S)', value: 'md:-mt-2' },
      { label: 'MD: MT - (-XS)', value: 'md:-mt-1' },
      { label: 'MD: MT - None', value: 'md:mt-0' },
      { label: 'MD: MT - XS', value: 'md:mt-1' },
      { label: 'MD: MT - S', value: 'md:mt-2' },
      { label: 'MD: MT - M', value: 'md:mt-4' },
      { label: 'MD: MT - L', value: 'md:mt-6' },
      { label: 'MD: MT - XL', value: 'md:mt-8' },
      { label: 'MD: MT - 2XL', value: 'md:mt-10' },
      { label: 'MD: MT - 3XL', value: 'md:mt-12' },
      { label: 'MD: MT - 4XL', value: 'md:mt-16' },
      { label: 'MD: MT - 5XL', value: 'md:mt-20' },
      { label: 'MD: MT - 6XL', value: 'md:mt-24' },
      { label: 'MD: MT - 7XL', value: 'md:mt-32' },
      { label: 'MD: MT - 8XL', value: 'md:mt-40' },

      // LG margin top
      { label: 'LG: MT - (-8XL)', value: 'lg:-mt-40' },
      { label: 'LG: MT - (-7XL)', value: 'lg:-mt-32' },
      { label: 'LG: MT - (-6XL)', value: 'lg:-mt-24' },
      { label: 'LG: MT - (-5XL)', value: 'lg:-mt-20' },
      { label: 'LG: MT - (-4XL)', value: 'lg:-mt-16' },
      { label: 'LG: MT - (-3XL)', value: 'lg:-mt-12' },
      { label: 'LG: MT - (-2XL)', value: 'lg:-mt-10' },
      { label: 'LG: MT - (-XL)', value: 'lg:-mt-8' },
      { label: 'LG: MT - (-L)', value: 'lg:-mt-6' },
      { label: 'LG: MT - (-M)', value: 'lg:-mt-4' },
      { label: 'LG: MT - (-S)', value: 'lg:-mt-2' },
      { label: 'LG: MT - (-XS)', value: 'lg:-mt-1' },
      { label: 'LG: MT - None', value: 'lg:mt-0' },
      { label: 'LG: MT - XS', value: 'lg:mt-1' },
      { label: 'LG: MT - S', value: 'lg:mt-2' },
      { label: 'LG: MT - M', value: 'lg:mt-4' },
      { label: 'LG: MT - L', value: 'lg:mt-6' },
      { label: 'LG: MT - XL', value: 'lg:mt-8' },
      { label: 'LG: MT - 2XL', value: 'lg:mt-10' },
      { label: 'LG: MT - 3XL', value: 'lg:mt-12' },
      { label: 'LG: MT - 4XL', value: 'lg:mt-16' },
      { label: 'LG: MT - 5XL', value: 'lg:mt-20' },
      { label: 'LG: MT - 6XL', value: 'lg:mt-24' },
      { label: 'LG: MT - 7XL', value: 'lg:mt-32' },
      { label: 'LG: MT - 8XL', value: 'lg:mt-40' },

      // ------------------------
      // 8) MARGIN BOTTOM (MB)
      // ------------------------
      { label: 'MB - (-8XL)', value: '-mb-40' },
      { label: 'MB - 8XL', value: 'mb-40' },
      { label: 'MD: MB - (-8XL)', value: 'md:-mb-40' },
      { label: 'LG: MB - 8XL', value: 'lg:mb-40' },

      // ------------------------
      // 9) WIDTH
      // ------------------------
      { label: 'Width - 20%', value: 'w-1/5' },
      { label: 'Width - 33%', value: 'w-1/3' },
      { label: 'Width - 40%', value: 'w-2/5' },
      { label: 'Width - 50%', value: 'w-1/2' },
      { label: 'Width - 60%', value: 'w-3/5' },
      { label: 'Width - 66%', value: 'w-2/3' },
      { label: 'Width - 70%', value: 'w-7/10' },
      { label: 'Width - 80%', value: 'w-4/5' },
      { label: 'Width - 90%', value: 'w-9/10' },
      { label: 'Width - 100%', value: 'w-full' },

      // MD width variants
      { label: 'MD: Width - 20%', value: 'md:w-1/5' },
      { label: 'MD: Width - 33%', value: 'md:w-1/3' },
      { label: 'MD: Width - 40%', value: 'md:w-2/5' },
      { label: 'MD: Width - 50%', value: 'md:w-1/2' },
      { label: 'MD: Width - 60%', value: 'md:w-3/5' },
      { label: 'MD: Width - 66%', value: 'md:w-2/3' },
      { label: 'MD: Width - 70%', value: 'md:w-7/10' },
      { label: 'MD: Width - 80%', value: 'md:w-4/5' },
      { label: 'MD: Width - 90%', value: 'md:w-9/10' },
      { label: 'MD: Width - 100%', value: 'md:w-full' },

      // LG width variants
      { label: 'LG: Width - 20%', value: 'lg:w-1/5' },
      { label: 'LG: Width - 33%', value: 'lg:w-1/3' },
      { label: 'LG: Width - 40%', value: 'lg:w-2/5' },
      { label: 'LG: Width - 50%', value: 'lg:w-1/2' },
      { label: 'LG: Width - 60%', value: 'lg:w-3/5' },
      { label: 'LG: Width - 70%', value: 'lg:w-7/10' },
      { label: 'LG: Width - 80%', value: 'lg:w-4/5' },
      { label: 'LG: Width - 90%', value: 'lg:w-9/10' },
      { label: 'LG: Width - 100%', value: 'lg:w-full' },

      // ------------------------
      // 10) LINE HEIGHT
      // ------------------------
      { label: 'LH - 1', value: 'leading-3' },
      { label: 'LH - 2', value: 'leading-4' },
      { label: 'LH - 3', value: 'leading-5' },
      { label: 'LH - 4', value: 'leading-6' },
      { label: 'LH - 5', value: 'leading-7' },
      { label: 'LH - 6', value: 'leading-8' },
      { label: 'LH - 7', value: 'leading-9' },
      { label: 'LH - 8', value: 'leading-10' },
      { label: 'LH - 9', value: 'leading-11' },
      { label: 'LH - 10', value: 'leading-12' },
      { label: 'LH - 11', value: 'leading-13' },
      { label: 'LH - 12', value: 'leading-14' },
      { label: 'LH - 13', value: 'leading-15' },
      { label: 'LH - 14', value: 'leading-16' },
      { label: 'LH - 15', value: 'leading-17' },
      { label: 'LH - 16', value: 'leading-18' },
      { label: 'LH - 17', value: 'leading-19' },
      { label: 'LH - 18', value: 'leading-20' },
      { label: 'LH - 19', value: 'leading-21' },
      { label: 'LH - 20', value: 'leading-22' },
      { label: 'LH - 21', value: 'leading-23' },
      { label: 'LH - 22', value: 'leading-24' },
      { label: 'LH - 23', value: 'leading-25' },
      { label: 'LH - 24', value: 'leading-26' },
      { label: 'LH - 25', value: 'leading-27' },
      { label: 'LH - 26', value: 'leading-28' },
      { label: 'LH - 27', value: 'leading-29' },
      { label: 'LH - Relaxed', value: 'leading-relaxed' },
      { label: 'LH - Loose', value: 'leading-loose' },

      // ------------------------
      // 11) ALIGNMENT
      // ------------------------
      { label: 'Align - Left', value: 'text-left' },
      { label: 'Align - Center', value: 'text-center' },
      { label: 'Align - Right', value: 'text-right' },
      { label: 'Align - Justify', value: 'text-justify' },

      // MD alignment
      { label: 'MD: Align - Left', value: 'md:text-left' },
      { label: 'MD: Align - Center', value: 'md:text-center' },
      { label: 'MD: Align - Right', value: 'md:text-right' },
      { label: 'MD: Align - Justify', value: 'md:text-justify' },

      // LG alignment
      { label: 'LG: Align - Left', value: 'lg:text-left' },
      { label: 'LG: Align - Center', value: 'lg:text-center' },
      { label: 'LG: Align - Right', value: 'lg:text-right' },
      { label: 'LG: Align - Justify', value: 'lg:text-justify' },

      // ------------------------
      // 12) TRANSFORM
      // ------------------------
      { label: 'Transform - Uppercase', value: 'uppercase' },
      { label: 'Transform - Lowercase', value: 'lowercase' },
      { label: 'Transform - Capitalize', value: 'capitalize' },
      { label: 'Transform - Normal', value: 'normal-case' },

      // ------------------------
      // 13) DECORATION
      // ------------------------
      { label: 'Decoration - None', value: 'no-underline' },
      { label: 'Decoration - Line Through', value: 'line-through' },
      { label: 'Decoration - Underline', value: 'underline' },
      { label: 'Decoration - Hover Underline', value: 'hover:underline' },

      // ------------------------
      // 14) TRACKING
      // ------------------------
      { label: 'Tracking - Tight', value: 'tracking-tight' },
      { label: 'Tracking - Normal', value: 'tracking-normal' },
      { label: 'Tracking - Wide', value: 'tracking-wide' },
      { label: 'Tracking - Wider', value: 'tracking-wider' },
      { label: 'Tracking - Widest', value: 'tracking-widest' },
    ],
  }

  return deepMerge(textResult, overrides)
}
