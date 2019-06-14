import { Component, OnInit } from '@angular/core';
import {SelectItem} from 'primeng/api';
import {GroupService} from '../../services/group.service';
import {GroupDto} from '../../dto/GroupDto';
import {ModuleService} from '../../services/module.service';
import {ModuleDto} from '../../dto/ModuleDto';


@Component({
  selector: 'app-subject-selector',
  templateUrl: './subject-selector.component.html',
  styleUrls: ['./subject-selector.component.css']
})
export class SubjectSelectorComponent implements OnInit {

  groups: SelectItem[];
  modules: SelectItem[];

  constructor(private groupService: GroupService,
              private moduleService: ModuleService) {
  }

  ngOnInit() {
    this.groupService.getGroups().subscribe(
      (groupsDto: GroupDto[]) => {
        this.groups = this.convertGroupDto2SelectItem(groupsDto);
      },
      (error) => this.groups = this.convertGroupDto2SelectItem([
          {name: 'Group 5', id: 5},
          {name: 'Group 6', id: 6},
          {name: 'Group 7', id: 7},
          {name: 'Group 8', id: 8}
        ]
      ));
    console.log(!!this.modules);
  }

  convertGroupDto2SelectItem(groupsDto: GroupDto[]): SelectItem[] {
    return [
      {label: 'Select group', value: null},
      ...groupsDto.map(group => ({label: group.name, value: group.id}))
    ];
  }

  convertModuleDto2SelectItem(modulesDto: ModuleDto[]): SelectItem[] {
    return [
      {label: 'Select module', value: null},
      ...modulesDto.map(module => ({label: module.name, value: module.id}))
    ];
  }

  onGroupSelect($event: any) {
    this.modules = null;
    console.log($event);
    if ($event.value === null) {
      return;
    }
    this.moduleService.getModules($event.value).subscribe(
      (modulesDto: ModuleDto[]) => {
        this.modules = this.convertModuleDto2SelectItem(modulesDto);
      },
      (error: any) => {

        if ($event.value === 5) {
          this.modules = this.convertModuleDto2SelectItem([
            {name: 'Module 1', id: 1},
            {name: 'Module 2', id: 2},
            {name: 'Module 3', id: 3},
            {name: 'Module 4', id: 4}
          ]);
        } else {
          this.modules = this.convertModuleDto2SelectItem([
            {name: 'Module 10', id: 11},
            {name: 'Module 12', id: 21}
          ]);
        }
      }
    );
  }

  onModuleSelect($event: any) {
    console.log($event);
  }

}
