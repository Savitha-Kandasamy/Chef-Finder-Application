import React from 'react'

function Bchef() {
    const handleSubmit = (e)=>{
       alert("Booking successful");
    }
  return (
    <div> 
         <div class="container">
      <form onSubmit={handleSubmit}>
        <h4>Book Now</h4>
        <div class="input">
          <div class="input-box">
            <input type="text" placeholder="First Name" class="name" required />
            <ion-icon name="person" class="icon"></ion-icon>
          </div>
          <div class="input-box">
            <input type="text" placeholder="Last Name" class="name" required />
            <ion-icon name="person" class="icon"></ion-icon>
          </div>
        </div>

        <div class="input">
          <div class="input-box">
            <input
              type="email"
              placeholder="Enter your Email Address"
              class="name"
              required
            />
            <ion-icon name="mail" class="icon"></ion-icon>
          </div>
        </div>
        <div class="input">
          <div class="input-box">
            <input
              type="name"
              placeholder="Enter the chef name"
              class="name"
              required
            />
            <ion-icon name="mail" class="icon"></ion-icon>
          </div>
        </div>
        <div class="input">
          <div class="input-box">
            <input
              type="location"
              placeholder="Enter your Location"
              class="name"
              required
            />
            <ion-icon name="mail" class="icon"></ion-icon>
          </div>
        </div>

        <div class="input">
          <div class="input-box">
            <h4>Date of the event</h4>
            <input type="date" class="dob" />
          </div>

          <div class="input-box">
            <h4>Gender</h4>
            <input type="checkbox" id="male" name="genderm" class="check-box" />
            <label for="male">Male</label>

            <input
              type="checkbox"
              id="female"
              name="genderf"
              class="check-box"
            />
            <label for="female">Female</label>

            <input
              type="checkbox"
              id="other"
              name="gender0"
              class="check-box"
            />
            <label for="other">Other</label>
          </div>
        </div>

        <div class="input">
          <div class="input-box">
              <h4>Payment Method</h4>

              <input type="radio" name="pay" id="credit" class="radio"/>
              <label for="credit"><span><ion-icon name="card" class="radio-icon"></ion-icon>Credit Card</span></label>

              <input type="radio" name="pay" id="enaira" class="radio"/>
              <label for="enaira"><span><ion-icon name="cash" class="radio-icon"></ion-icon>E-naira</span></label>
          </div>
        </div>

        <div class="input">
            <div class="input-box">
                <input type="tel" placeholder="Card Number" class="name"/>
                <ion-icon name="cash-outline" class="icon"></ion-icon>
            </div>
        </div>

        <div class="input">
            <div class="input-box">
                <input type="number" placeholder="Card CVV" class="name"/>
                <ion-icon name="card-outline" class="icon"></ion-icon>
            </div>

            <div class="input-box">
                <select>
                    <option>Jan</option>
                    <option>Feb</option>
                    <option>Mar</option>
                    <option>Apr</option>
                    <option>May</option>
                    <option>Jun</option>
                    <option>Jul</option>
                    <option>Aug</option>
                    <option>Sept</option>
                    <option>Oct</option>
                    <option>Nov</option>
                    <option>Dec</option>
                </select>

                <select>
                    <option> 2022</option>
                    <option> 2023</option>
                    <option> 2024</option>
                </select>
            </div>
        </div>

        <div class="input">
            <div class="input-box">
                <button type="submit">BOOK NOW</button>
            </div>
        </div>
      </form>
    </div>

 
    <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
<script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
</div>
 
  )
}

export default Bchef

 