class Card extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {
        this.innerHTML = `
        <div class="row">
        <div class="col-md-4">
          <div class="card mb-4 box-shadow">
            <img class="card-img-top" data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail" alt="Thumbnail [100%x225]" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22520%22%20height%3D%22225%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20520%20225%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_18eaf8e7186%20text%20%7B%20fill%3A%23eceeef%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A26pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_18eaf8e7186%22%3E%3Crect%20width%3D%22520%22%20height%3D%22225%22%20fill%3D%22%2355595c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22172.37890625%22%20y%3D%22124.2%22%3EThumbnail%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" data-holder-rendered="true" style="height: 225px; width: 100%; display: block;">
            <div class="card-body">
              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Donate</button>

                <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                  <div class="offcanvas-header">
                    <h5 id="offcanvasRightLabel">Offcanvas right</h5>
                    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                  </div>
                  <div class="offcanvas-body">
                    <div class="container">
                    <form class="form row row-lg-12">
                        <div class="form-group">
                            <label for="exampleInputEmail1">How much do you want to donate?</label>
                            <input type="text" class="form-control" id="organization-name" aria-describedby="donateamount" placeholder="Enter funds amount">
                        </div>

                        <p>Do you want to donate things instead?</p>
                       

                    
                        <div class="form-check">
                            <input type="checkbox" class="form-check-input" id="Food">
                            <label class="form-check-label" for="food">Food</label>
                        </div>
                
                        <div class="form-check">
                            <input type="checkbox" class="form-check-input" id="Clothing">
                            <label class="form-check-label" for="clothing">Clothing</label>
                            </div>
                            <div class="form-check">
                            <input type="checkbox" class="form-check-input" id="Stationeries">
                            <label class="form-check-label" for="stationery">Stationeries</label>
                            </div>
                        <button type="submit" id="submit" class="btn btn-primary">Submit</button>
                        </form>
                    </div>
                  </div>
                </div>
                </div>
                <small class="text-muted">9 mins</small>
              </div>
            </div>
          </div>
        </div>
        `;
      }
    
  }
  
  customElements.define('card-component', Card);