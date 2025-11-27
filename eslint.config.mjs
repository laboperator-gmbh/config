import { defineConfig } from 'eslint/config';
import nodeConfig from '@laboperator-gmbh/eslint-config-node';

export default defineConfig(nodeConfig, { ignores: ['dist'] });
