import { Component, OnInit } from '@angular/core';
import {SelectItem} from 'primeng/api';
import {GroupService} from '../../services/group.service';
import {GroupDto} from '../../dto/GroupDto';


interface City {
  name: string;
  code: string;
}
@Component({
  selector: 'app-subject-selector',
  templateUrl: './subject-selector.component.html',
  styleUrls: ['./subject-selector.component.css']
})
export class SubjectSelectorComponent implements OnInit {

  groups: SelectItem[];

  constructor(private groupService: GroupService) {
  }

  ngOnInit() {
    this.groupService.getGroups().subscribe(
      (groupsDto: GroupDto[]) => {
        this.groups = this.convertGroupDto2SelectItem(groupsDto);
      },
      (error) => this.groups = [
        {label: 'Select group', value: null},
        {label: 'Group 5', value: 5},
        {label: 'Group 6', value: 6},
        {label: 'Group 7', value: 7},
        {label: 'Group 8', value: 8}
      ]
    );
  }

  convertGroupDto2SelectItem(groupsDto: GroupDto[]): SelectItem[] {
    return [
      {label: 'Select group', value: null},
      ...groupsDto.map(group => ({label: group.name, value: group.id}))
    ];
  }

  onChange($event: any) {
    console.log($event);
  }

}
