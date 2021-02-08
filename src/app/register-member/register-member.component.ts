import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MemberService } from '../service/member.service';

@Component({
  selector: 'userApp-register-member',
  templateUrl: './register-member.component.html',
  styleUrls: ['./register-member.component.scss'],
})
export class RegisterMemberComponent implements OnInit {
  constructor(
    private route: Router,
    private fb: FormBuilder,
    private memServ: MemberService
  ) {}
  registerForm: FormGroup;

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      id: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      team: ['', Validators.required],
      jobTitle: ['', Validators.required],
      status: ['', Validators.required],
    });
  }

  onSubmit() {
    this.memServ.registerMember(this.registerForm.value).subscribe((res) => {
      console.log(res);
      this.route.navigate(['/']);
    });
  }
}
