import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() { }

  async getHardwareStatus(): Promise<{cpu: number, mem: number, disk: number}>{
    // retorna um valor fake apenas para testar os status no head
    const hardwareUsagePercent = {
      cpu: Math.random() * (100 - 1) +1,
      mem: Math.random() * (100 - 1) +1,
      disk: Math.random() * (100 - 1) +1,
    }
    return hardwareUsagePercent
  }
}
