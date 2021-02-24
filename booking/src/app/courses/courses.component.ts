import { CourseService } from './../course.service';
import { COURSES } from './../mock-courses';
import { Component, OnInit } from '@angular/core';
import {Course} from '../course';


export class CoursesComponent implements OnInit {
  selectedCourse:Course;
  courses= COURSES;
  

  
  constructor(private CourseService:CourseService) { }

  ngOnInit(): void {
  }

  onSelect(course:Course): void{
    this.selectedCourse=course;
  }

  getCourses(): void{
    this.CourseService.getCourses().subscribe(courses=>this.courses);
  }

}
