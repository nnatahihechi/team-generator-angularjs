import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //create a state for new members
  newMemberName = ""
  members: string[] = [];
  errorMessage = "";
  numofTeams: number | "" = 0
  teams: string[][] = []

  onInput(member: string) {
    this.newMemberName = member;
  }

  onNumberOfTeamsInput(value: string) {
    this.numofTeams = Number(value);
  }

  addMember() {
    // check if the new member name is empty
    //here we have the names of all the members stored
    if (!this.newMemberName) {
      this.errorMessage = "Name can not be empty"
      return
    };

    this.errorMessage = ""
    this.members.push(this.newMemberName)
    this.newMemberName = ""
    console.log("show members", this.members)
  }

  generateTeams() {
    if (!this.numofTeams || this.numofTeams <= 0) {
      this.errorMessage = "Invalid number of teams"
      return
    }

    if (this.members.length < this.numofTeams) {
      this.errorMessage = "not enough members"
      return
    }
    this.errorMessage = ""
    const allMembers = [...this.members]
    while (allMembers.length) {
      for (let i = 0; i < this.numofTeams; i++) {
        const randomIndex = Math.floor(Math.random() * allMembers.length)
        const member = allMembers.splice(randomIndex, 1)[0];
        if (!member) break;
        if (this.teams[i]) {
          this.teams[i].push(member)
        } else {
          this.teams[i] = [member]
        }
      }
      // console.log("teams ooooooo",this.teams)
    }

    this.members = []
    this.numofTeams = ""
  }
}
