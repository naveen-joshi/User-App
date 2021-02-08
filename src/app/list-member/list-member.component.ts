import { Component, ViewChild, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Member } from '../model/member.model';
import { MemberService } from '../service/member.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'userApp-list-member',
  templateUrl: './list-member.component.html',
  styleUrls: ['./list-member.component.scss'],
})
export class ListMemberComponent implements OnInit {
  @ViewChild(MatSort) sort: MatSort;
  displayedColumns: string[] = [
    'id',
    'firstName',
    'team',
    'jobTitle',
    'action',
  ];
  dataSource: MatTableDataSource<Member>;

  memberList: Member[];
  filterValue: string;
  member: Member;

  constructor(private route: Router, private memServ: MemberService) {}

  ngOnInit(): void {
    this.memServ.getMembers().subscribe((res) => {
      this.memberList = res;
      this.dataSource = new MatTableDataSource(this.memberList);
      console.log(this.memberList);
      this.dataSource.sort = this.sort;
    });
  }

  details(id) {
    this.route.navigate(['/detail', id]);
  }

  update(id: number) {
    this.route.navigate(['/update', id]);
  }

  deleteMember(id: number) {
    this.memServ.delete(id).subscribe(
      (res) => {
        window.scrollTo(0, 0);
      },
      (error) => console.log(error)
    );
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
