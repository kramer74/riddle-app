import {Component, EventEmitter, Output, OnInit} from '@angular/core';
import {Riddle} from "../shared/riddle";
import {GameEvent} from "../shared/gameevent";
import {RiddleService} from "../shared/riddle.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-riddle',
  templateUrl: './riddle.component.html',
  styleUrls: ['./riddle.component.scss']
})
export class RiddleComponent implements OnInit {

  public gameevent: GameEvent;

  @Output()
  titleClicked = new EventEmitter<string>();

  constructor(private route: ActivatedRoute, private riddleservice: RiddleService) {
  }

  ngOnInit() {
    this.riddleservice.getData();
    
  }

  public toggleVisibility() {
    this.riddleservice.openGame();
    this.riddleservice.getEvent();
  }
}
