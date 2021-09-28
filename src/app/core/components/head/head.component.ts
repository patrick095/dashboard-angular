import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css'],
})
export class HeadComponent implements OnInit {
  daysOn = 1;
  osVersion = 'Ubuntu 20.10';
  CpuUsage = 0;
  MemUsage = 0;
  DiskUsage = 0;
  constructor(private ApiService: ApiService) {}

  consoleLog(data: any) {
    return console.log(data);
  }

  async ngOnInit() {
    //fake api
    setInterval(async () => {
      let { cpu, disk, mem } = await this.ApiService.getHardwareStatus();
      this.CpuUsage = parseFloat(cpu.toFixed(1));
      this.DiskUsage = parseFloat(disk.toFixed(1));
      this.MemUsage = parseFloat(mem.toFixed(1));
    }, 5000);
  }
}
