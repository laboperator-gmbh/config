import { defineConfig } from 'eslint/config';

import baseConfig from './base.js';
import importConfig from './import.js';

export default defineConfig(baseConfig, importConfig);
