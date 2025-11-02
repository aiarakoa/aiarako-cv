/** @jest-environment node */
import { test, expect, describe } from '@jest/globals';
import fs from 'fs';
import path from 'path';
import Ajv from 'ajv/dist/2020.js';
import addFormats from 'ajv-formats';

const fromRoot = (...p) => path.join(process.cwd(), ...p);

const ajv = new Ajv({ allErrors: true, strict: false });
addFormats(ajv);

const load = (rel) => JSON.parse(fs.readFileSync(fromRoot('schemas', rel), 'utf8'));
ajv.addSchema(load('i18n.root.schema.json'));
ajv.addSchema(load('i18n.article.schema.json'));
ajv.addSchema(load('i18n.tag.schema.json'));
ajv.addSchema(load('i18n.label.schema.json'));
ajv.addSchema(load('i18n.section.schema.json'));

test('cv.en-GB.json matches the i18n root contract', () => {
  const data = JSON.parse(fs.readFileSync(fromRoot('public', 'data', 'cv.en-GB.json'), 'utf8'));
  const ok = ajv.validate('urn:cv:i18n:root', data);
  expect(ok).toBe(true);
  if (!ok) console.error(ajv.errors);
});