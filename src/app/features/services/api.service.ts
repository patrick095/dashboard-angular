import { Injectable } from '@angular/core';
import { MockyResponse } from '../../core/interfaces/api.interfaces';

@Injectable({
  providedIn: 'root',
})
export class ApiService {

  async getHardwareStatus(): Promise<MockyResponse> {
    const hardwareUsagePercent = {
      cpu: parseFloat((Math.random() * (100 - 1) + 1).toFixed(1)),
      mem: parseFloat((Math.random() * (100 - 1) + 1).toFixed(1)),
      disk: parseFloat((Math.random() * (100 - 1) + 1).toFixed(1)),
    };
    return hardwareUsagePercent;
  }
}
