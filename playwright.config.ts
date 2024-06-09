import { defineConfig } from '@playwright/test';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config();
dotenv.config({ path: path.resolve(__dirname, '..', '.env') });

export default defineConfig({
  reporter: [['html', { open: 'never', outputFolder: 'html-tests-results' }]],
});