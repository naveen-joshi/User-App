import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MemberService } from '../service/member.service';
import { Member } from '../model/member.model';
@Component({
  selector: 'userApp-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.scss'],
})
export class MemberDetailComponent implements OnInit {
  id: number;
  member: Member;

  constructor(
    private route: Router,
    private activatedRoute: ActivatedRoute,
    private memServ: MemberService
  ) {}

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.memServ.viewMember(this.id).subscribe(
      (res) => {
        this.member = res;
      },
      (error) => console.log(error)
    );
  }

  listMembers() {
    this.route.navigate(['/list']);
  }
}
