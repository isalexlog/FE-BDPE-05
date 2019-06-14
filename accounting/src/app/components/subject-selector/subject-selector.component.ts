import { Component, OnInit } from '@angular/core';
import {SelectItem} from 'primeng/api';
import {GroupService} from '../../services/group.service';
import {GroupDto} from '../../dto/GroupDto';
import {ModuleService} from '../../services/module.service';
import {ModuleDto} from '../../dto/ModuleDto';
import {SubjectService} from '../../services/subject.service';
import {SubjectDto} from '../../dto/SubjectDto';


@Component({
  selector: 'app-subject-selector',
  templateUrl: './subject-selector.component.html',
  styleUrls: ['./subject-selector.component.css']
})
export class SubjectSelectorComponent implements OnInit {

  groups: SelectItem[];
  modules: SelectItem[];
  subjects: SelectItem[];

  constructor(private groupService: GroupService,
              private moduleService: ModuleService,
              private subjectService: SubjectService) {
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

  convertSubjectDto2SelectItem(subjectDto: SubjectDto[]): SelectItem[] {
    return [
      {label: 'Select subject', value: null},
      ...subjectDto.map(subject => ({label: subject.name, value: subject.id}))
    ];
  }

  onGroupSelect($event: any) {
    this.modules = null;
    this.subjects = null;
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
    this.subjects = null;
    console.log($event);
    if ($event.value === null) {
      return;
    }
    this.subjectService.getSubjects($event.value).subscribe(
      (subjectDto: SubjectDto[]) => {
        this.subjects = this.convertSubjectDto2SelectItem(subjectDto);
      },
      (error: any) => {

        if ($event.value === 2) {
          this.subjects = this.convertSubjectDto2SelectItem([
            {name: 'Subject 1', id: 1},
            {name: 'Subject 2', id: 2},
            {name: 'Subject 3', id: 3},
            {name: 'Subject 4', id: 4}
          ]);
        } else {
          this.subjects = this.convertSubjectDto2SelectItem([
            {name: 'Subject 22', id: 17},
            {name: 'Subject 43', id: 32}
          ]);
        }
      }
    );
  }

  onSubjectSelect($event: any){
    console.log(event);
  }



}
