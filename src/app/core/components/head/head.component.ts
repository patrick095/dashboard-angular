import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../features/services/api.service';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css'],
})
export class HeadComponent implements OnInit {
  public daysOn = 1;
  public osVersion = 'Ubuntu 20.10';
  public CpuUsage = 0;
  public MemUsage = 0;
  public DiskUsage = 0;

  constructor(private ApiService: ApiService) {}

  ngOnInit(): void {
    setInterval(async () => {
      const { cpu, disk, mem } = await this.ApiService.getHardwareStatus();
      this.CpuUsage = cpu;
      this.DiskUsage = disk;
      this.MemUsage = mem;
    }, 5000);
  }
}
