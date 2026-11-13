
import { describe, it, expect } from 'vitest';
import { hashPassword, comparePassword } from './password.util';

describe('password utilities', () => {

  const password1 = 'Password123';
  const password2 = 'Password456';

  it('Generación de hashes', async () => {
    const hash1 = await hashPassword(password1);
    const hash2 = await hashPassword(password2);

    expect(hash1).toBeTruthy();
    expect(hash2).toBeTruthy();

    expect(typeof hash1).toBe('string');
    expect(typeof hash2).toBe('string');

    expect(hash1).not.toBe(password1);
    expect(hash2).not.toBe(password2);
  });

  it('Contraseña correcta', async () => {
    const hash1 = await hashPassword(password1);
    const hash2 = await hashPassword(password2);

    const result1 = await comparePassword(password1, hash1);
    const result2 = await comparePassword(password2, hash2);

    expect(result1).toBe(true);
    expect(result2).toBe(true);
  });

  it('Contraseña incorrecta', async () => {
    const hash1 = await hashPassword(password1);
    const hash2 = await hashPassword(password2);

    const result1 = await comparePassword(password2, hash1);
    const result2 = await comparePassword(password1, hash2);

    expect(result1).toBe(false);
    expect(result2).toBe(false);
  });

});
