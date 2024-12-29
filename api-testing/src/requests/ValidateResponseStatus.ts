import { expect } from 'playwright/test';

export async function validateResponseTwoStatus(response: any, status1: number, status2: number) {
    const responseStatus = response.status();
    expect(responseStatus === status1 || responseStatus === status2).toBe(true);
}

