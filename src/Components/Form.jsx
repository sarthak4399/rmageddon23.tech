import React from "react";
import "./Form.css";
import "../style";
const Form = () => {
  return (
    <div>
      <h1>Registration Form</h1>
      <form action="#" method="post" enctype="text/plain">
        <fieldset>
          <legend class="first_legend">Team Details</legend>
          <fieldset class="input_field">
            <legend id="name-legend">Team Name:</legend>
            <input class="req_field" required type="text" />
          </fieldset>
          <fieldset class="input_field">
            <legend id="number-legend">Numbers of members in a team:</legend>
            <select required id="value" onchange="no_of_members(this.value)">
              <option value="2">Choose number of members</option>
              <option value="2">2 Members</option>
              <option value="3">3 Members</option>
              <option value="4">4 Members</option>
            </select>
          </fieldset>
          <fieldset class="check">
            <legend>Game/Games to be registrater</legend>
            <label>
              <input class="inline" value="Retrofeista" type="checkbox" />
              Retrofeista
            </label>
            <label>
              <input class="inline" value="Nijia_Clash" type="checkbox" />
              Nijia Clash
            </label>
            <label>
              <input class="inline" value="Pac_Runner" type="checkbox" />
              Pac Runner
            </label>
          </fieldset>
          <fieldset class="check">
            <legend>Do Your Team wish to attened workshop:</legend>
            <label>
              <input class="inline" name="radiom" type="radio" value="yes" />
              Yes
            </label>
            <label>
              <input class="inline" name="radiom" type="radio" value="no" />
              No
            </label>
          </fieldset>
        </fieldset>

        <fieldset>
          <legend class="first_legend">Team Leader</legend>
          <fieldset class="input_field">
            <legend id="name-legend">Name:</legend>
            <input required type="text" />
          </fieldset>
          <fieldset class="input_field">
            <legend id="number-legend">Contact number:</legend>
            <input required type="number" min="1000000000" max="9999999999" />
          </fieldset>
          <fieldset class="input_field">
            <legend id="email-legend">Email:</legend>
            <input required type="email" />
          </fieldset>
          <fieldset class="input_field">
            <legend id="Rno-legend">Registration number:</legend>
            <input required type="text" />
          </fieldset>
          <fieldset class="input_field">
            <legend>Branch:</legend>
            <select required id="dropdown">
              <option value="none">Choose member's branch</option>
              <option value="cse">Computer Science And Engineering</option>
              <option value="che">Chemical Engineering</option>
              <option value="cie">Civil Engineering</option>
              <option value="ete">
                Electronics And Telecommunication Engineering
              </option>
              <option value="ele">Electrical Engineering</option>
              <option value="int">Information Technology</option>
              <option value="ine">Instrumentation Engineering</option>
              <option value="mee">Mechanical Engineering</option>
              <option value="tet">Textile Technology</option>
              <option value="pre">Producation Engineering</option>
            </select>
          </fieldset>
          <fieldset class="input_field">
            <legend>Year:</legend>
            <select required id="dropdown">
              <option value="none">Choose member's year</option>
              <option value="first">First Year</option>
              <option value="second">Second Year</option>
              <option value="third">Third Year</option>
              <option value="final">Final Year</option>
              <option value="Mfirst">Mtech First Year</option>
              <option value="Mfinal">Mtech Final Year</option>
            </select>
          </fieldset>
        </fieldset>

        <fieldset>
          <legend class="first_legend">Second member</legend>
          <fieldset class="input_field">
            <legend id="name-legend">Name:</legend>
            <input required type="text" />
          </fieldset>
          <fieldset class="input_field">
            <legend id="number-legend">Contact number:</legend>
            <input required type="number" min="1000000000" max="9999999999" />
          </fieldset>
          <fieldset class="input_field">
            <legend id="email-legend">Email:</legend>
            <input required type="email" />
          </fieldset>
          <fieldset class="input_field">
            <legend id="Rno-legend">Registration number:</legend>
            <input required type="text" />
          </fieldset>
          <fieldset class="input_field">
            <legend>Branch:</legend>
            <select required id="dropdown">
              <option value="none">Choose member's branch</option>
              <option value="cse">Computer Science And Engineering</option>
              <option value="che">Chemical Engineering</option>
              <option value="cie">Civil Engineering</option>
              <option value="ete">
                Electronics And Telecommunication Engineering
              </option>
              <option value="ele">Electrical Engineering</option>
              <option value="int">Information Technology</option>
              <option value="ine">Instrumentation Engineering</option>
              <option value="mee">Mechanical Engineering</option>
              <option value="tet">Textile Technology</option>
              <option value="pre">Producation Engineering</option>
            </select>
          </fieldset>
          <fieldset class="input_field">
            <legend>Year:</legend>
            <select required id="dropdown">
              <option value="none">Choose member's year</option>
              <option value="first">First Year</option>
              <option value="second">Second Year</option>
              <option value="third">Third Year</option>
              <option value="final">Final Year</option>
            </select>
          </fieldset>
        </fieldset>

        <fieldset id="fieldset1">
          <legend class="first_legend">Third member</legend>
          <fieldset class="input_field">
            <legend id="name-legend">Name:</legend>
            <input required type="text" />
          </fieldset>
          <fieldset class="input_field">
            <legend id="number-legend">Contact number:</legend>
            <input required type="number" min="1000000000" max="9999999999" />
          </fieldset>
          <fieldset class="input_field">
            <legend id="email-legend">Email:</legend>
            <input required type="email" />
          </fieldset>
          <fieldset class="input_field">
            <legend id="Rno-legend">Registration number:</legend>
            <input required type="text" />
          </fieldset>
          <fieldset class="input_field">
            <legend>Branch:</legend>
            <select required id="dropdown">
              <option value="none">Choose member's branch</option>
              <option value="cse">Computer Science And Engineering</option>
              <option value="che">Chemical Engineering</option>
              <option value="cie">Civil Engineering</option>
              <option value="ete">
                Electronics And Telecommunication Engineering
              </option>
              <option value="ele">Electrical Engineering</option>
              <option value="int">Information Technology</option>
              <option value="ine">Instrumentation Engineering</option>
              <option value="mee">Mechanical Engineering</option>
              <option value="tet">Textile Technology</option>
              <option value="pre">Producation Engineering</option>
            </select>
          </fieldset>
          <fieldset class="input_field">
            <legend>Year:</legend>
            <select required id="dropdown">
              <option value="none">Choose member's year</option>
              <option value="first">First Year</option>
              <option value="second">Second Year</option>
              <option value="third">Third Year</option>
              <option value="final">Final Year</option>
            </select>
          </fieldset>
        </fieldset>

        <fieldset id="fieldset2">
          <legend class="first_legend">Fourth member</legend>
          <fieldset class="input_field">
            <legend id="name-legend">Name:</legend>
            <input required type="text" />
          </fieldset>
          <fieldset class="input_field">
            <legend id="number-legend">Contact number:</legend>
            <input required type="number" min="1000000000" max="9999999999" />
          </fieldset>
          <fieldset class="input_field">
            <legend id="email-legend">Email:</legend>
            <input required type="email" />
          </fieldset>
          <fieldset class="input_field">
            <legend id="Rno-legend">Registration number:</legend>
            <input required type="text" />
          </fieldset>
          <fieldset class="input_field">
            <legend>Branch:</legend>
            <select required id="dropdown">
              <option value="none">Choose member's branch</option>
              <option value="cse">Computer Science And Engineering</option>
              <option value="che">Chemical Engineering</option>
              <option value="cie">Civil Engineering</option>
              <option value="ete">
                Electronics And Telecommunication Engineering
              </option>
              <option value="ele">Electrical Engineering</option>
              <option value="int">Information Technology</option>
              <option value="ine">Instrumentation Engineering</option>
              <option value="mee">Mechanical Engineering</option>
              <option value="tet">Textile Technology</option>
              <option value="pre">Producation Engineering</option>
            </select>
          </fieldset>
          <fieldset class="input_field">
            <legend>Year:</legend>
            <select required id="dropdown">
              <option value="none">Choose member's year</option>
              <option value="first">First Year</option>
              <option value="second">Second Year</option>
              <option value="third">Third Year</option>
              <option value="final">Final Year</option>
            </select>
          </fieldset>
        </fieldset>

        <fieldset class="T_C">
          <legend class="first_legend">Do you agree</legend>
          <label>
            <input required name="checkbox" type="checkbox" value="male" />
            By registering for this event, you agree to share the data mentioned
            in this form or any form henceforth on this event with the organizer
            of this event for further analysis, processing, and outreach. Your
            data will also be used by Rnxg for providing you regular and
            constant updates on this event.
            <a href="https://www.rnxg.co.in/Privicy">Privacy</a> and
            <a href="https://www.rnxg.co.in/Terms">Terms and Condittions.</a>
          </label>
        </fieldset>

        <div id="button_center">
          <button id="button">
            <span></span>
            <span></span>
            <span></span>
            <span></span> <a href="index.html">Back</a>
          </button>
          <button type="submit" id="button">
            <span></span>
            <span></span>
            <span></span>
            <span></span> <a href="#">Sumbit</a>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
