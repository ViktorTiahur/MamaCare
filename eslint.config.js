import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import importPlugin from 'eslint-plugin-import'
import path from 'path'

export default tseslint.config(
  { ignores: ['dist'] },
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parser: tseslint.parser,             // щоб rules для TS працювали коректно
      parserOptions: {
        projectService: true,              // читає твій tsconfig
        tsconfigRootDir: process.cwd(),
      },
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      import: importPlugin,
    },
    settings: {
      'import/resolver': {
        // читає alias/paths із tsconfig.app.json
        typescript: {
          project: path.resolve('./tsconfig.app.json'),
        },
        // щоб import/no-unresolved знав про .scss та інші розширення
        node: {
          extensions: [
            '.js', '.jsx', '.ts', '.tsx', '.d.ts', '.json',
            '.scss', '.css'
          ],
        },
      },
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],

      // ігноруємо імпорти з query-постфиксами, які resolver не вміє обробляти
      'import/no-unresolved': ['error', {
        ignore: ['\\.svg\\?react$', '\\.svg\\?url$']
      }],

      'import/order': ['warn', {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
        pathGroups: [{ pattern: '@/**', group: 'internal' }],
        pathGroupsExcludedImportTypes: ['builtin'],
        alphabetize: { order: 'asc', caseInsensitive: true },
        'newlines-between': 'always',
      }],
    },
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
  },
)
