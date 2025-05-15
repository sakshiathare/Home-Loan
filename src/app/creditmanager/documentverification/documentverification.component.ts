import { CommonService } from 'src/app/Service/common.service';
import { Component, OnInit } from '@angular/core';
import { Docmodel } from 'src/app/model/docmodel';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-documentverification',
  templateUrl: './documentverification.component.html',
  styleUrls: ['./documentverification.component.css']
})
export class DocumentverificationComponent implements OnInit {
  retrievedDoc: Docmodel[] = [];
  verificationForm: FormGroup;

  constructor(
    private commonService: CommonService, 
    private actRout: ActivatedRoute, 
    private formbuilder: FormBuilder, 
    private loc: Location
  ) { }

  ngOnInit(): void {
    this.initializeForm();
    this.loadDocumentData();
  }

  private initializeForm(): void {
    this.verificationForm = this.formbuilder.group({
      addressProof: ['', Validators.required],
      itr: ['', Validators.required],
      pancard: ['', Validators.required],
      adharcard: ['', Validators.required],
      signature: ['', Validators.required],
      photo: ['', Validators.required],
      thumb: ['', Validators.required],
      bankcheck: ['', Validators.required],
      propertydetails: ['', Validators.required],
      salaryslip: ['', Validators.required]
    });
  }

  private loadDocumentData(): void {
    this.actRout.paramMap.subscribe(param1 => {
      const id = parseInt(param1.get('documentid'));
      this.commonService.getDocSingle(id).subscribe(
        (list: Docmodel[]) => {
          this.retrievedDoc = list;
        },
        error => {
          console.error('Error loading document data:', error);
        }
      );
    });
  }

  back(): void {
    this.loc.back();
  }
}