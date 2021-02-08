import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Member } from '../model/member.model';
import { MemberService } from '../service/member.service';

@Component({
  selector: 'userApp-update-member',
  templateUrl: './update-member.component.html',
  styleUrls: ['./update-member.component.scss'],
})
export class UpdateMemberComponent implements OnInit {
  id: number;
  member: Member;

  constructor(
    private route: Router,
    private activatedRoute: ActivatedRoute,
    private memServ: MemberService
  ) {}

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.memServ.viewMember(this.id).subscribe((res) => {
      this.member = res;
    });
  }

  onSubmit() {
    this.memServ.update(this.id, this.member).subscribe(
      (res) => {
        console.log(res);
        this.listMembers();
      },
      (error) => console.log(error)
    );
  }

  listMembers() {
    this.route.navigate(['/list']);
  }
}
