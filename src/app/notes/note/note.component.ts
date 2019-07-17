import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Note} from "../model/note";

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {

  @Input() note: Note;
  @Output() noteCreated: EventEmitter<Note> = new EventEmitter<Note>();
  @Output() noteUpdated: EventEmitter<Note> = new EventEmitter<Note>();
  @Output() noteDeleted: EventEmitter<Note> = new EventEmitter<Note>();

  constructor() {
    /*this.note = {
      id: null,
      title: "",
      description: "",
      eventDate: ""
    };*/
  }

  ngOnInit() {
  }

  createNote() {
    this.noteCreated.emit(this.note);
  }

  updateNote() {
    this.noteUpdated.emit(this.note);
  }

  deleteNote() {
    this.noteDeleted.emit(this.note);
  }
}
