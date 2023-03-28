const shapes = [
  {
    id: "circle",
    value: "Circle",
    calc: "1.Enter Radius",
    value_calc:"RADIUS",
    radius_form: "r",
    area_form: " πr²",
    perimeter_form: "2πr",
    area: function (radius) {
      return 3.14 * radius * radius;
    },
    perimeter: function (radius) {
      return 2 * 3.14 * radius;
    }
  },
  {
    id: "triangle",
    value: "Equilateral Triangle",
    calc: "2.Enter Side(Base and Height)",
    value_calc:"SIDE",
    radius_form: "s",
    area_form: "0.433*s*s",
    perimeter_form: "3*s",
    area: function (side) {
      return 0.433 * side * side;
    },
    perimeter: function (side) {
      return side * 3;
    }

  },
  {
    id: "square",
    value: "Square",
    calc: "3.Enter Side",
    value_calc:"SIDE",
    radius_form: "s",
    area_form: "s*s",
    perimeter_form: "4*s",
    area: function (side) {
      return side * side;
    },
    perimeter: function (side) {
      return 4 * side;
    }
  },
  // {
  //   id: "rectangle",
  //   value: "Rectangle",
  //   calc: "4.Enter Side",
  //   radius_form: "s",
  //   area_form: "s*s",
  //   perimeter: "4*s",
  //   area: function (side) {
  //     return side * side;
  //   },
  //   perimeter: function (side) {
  //     return 4 * side;
  //   }
  // },




];

shapes_container = document.getElementById("shapes-container");
//making calculation page as none
calculation = document.getElementById("calculation");
calculation.style.display = "none";
// making last-section as none
result = document.getElementById("result");
result.style.display = "none";

for (temp in shapes) {
  let diff_shapes = document.createElement("div");
  shapes_container.append(diff_shapes);
  diff_shapes.setAttribute("id", shapes[temp].id);
  diff_shapes.setAttribute("class", "shape");
  tick=document.createElement("div");
  tick.classList.add("tick");
  diff_shapes.append(tick);

}

// next button
Next_button = document.createElement("button");
Next_button.setAttribute("class", "next-button");
Next_button.innerHTML = "NEXT";
Next_button.style.display = "none";
shapes_container.append(Next_button);
let count=0;
// Loop through the shapes container elements and add click event listeners
shapes_container = document.querySelectorAll(".shape");
const prev="square";
shapes_container.forEach(element => {

  element.addEventListener("click", function (event) {
    // prev=current;
    const clicked = event.target;
    const shape = shapes.find(shape => shape.id === clicked.id);
    current=clicked.id;
    // current
    console.log("current"+current);
   let console_val= document.getElementById(current).firstChild.style.display="block";
   console.log(console_val);
    // prev
    let prev = localStorage.getItem("myShapeId");
   console.log("prev"+ prev);
    localStorage.setItem("myShapeId", clicked.id);
    count++;
    if(count!=1)
    document.getElementById(prev).firstChild.style.display="none";

    
    document.getElementById("heading_calc").innerHTML = shape.calc;
    Next_button.style.display = "block";

  });
});

Next_button.addEventListener("click", button);

function button() {
  let shapeData = localStorage.getItem("myShapeId");
  console.log(shapeData);
  shapes.forEach((shape, index) => {
    const heading = document.getElementById("heading_calc");
    if (localStorage.getItem("myShapeId") === shape.id) {
      heading.innerHTML = shapes[index].calc;
    }
  });
  document.getElementById("shapes-container").setAttribute("style", "display : none;");
  document.getElementById("calculation").setAttribute("style", "display:block;");
}


// Add click event listener for the calc button
Calcbutton = document.getElementById("calc-button");
Calcbutton.addEventListener("click", function () {
  radius = document.getElementById("calc_form").value;
  localStorage.setItem("radius", radius);
  document.getElementById("calculation").style.display = "none";
  document.getElementById("result").style.display = "block";
  End_result = localStorage.getItem("shapes_clicked");
  shapes.forEach((shape, index) => {
    if (localStorage.getItem("myShapeId") === shape.id) {
      const display_shape = `<div id="${shape.id}" class="shape"></div>`;
      document.getElementById("display_shapes").innerHTML = display_shape;
      document.getElementById("display_result").innerHTML = shapes[index].value;

      // Create the table
      let table = document.createElement("table");
      let row1 = document.createElement("tr");
      let row2 = document.createElement("tr");
      let row3 = document.createElement("tr");

      // Set IDs for the rows
      row1.setAttribute("id", "row1");
      row2.setAttribute("id", "row2");
      row3.setAttribute("id", "row3");

      // Append the rows to the table
      table.append(row1);
      table.append(row2);
      table.append(row3);

      // Append the table to the calculation display
      document.querySelector("#display_calculation").append(table);

      // Create the cells for the first row
      let calc_name1 = document.createElement("td");
      let calc_result1 = document.createElement("td");
      let calc_form1 = document.createElement("td");

      // Add content to the cells
      calc_name1.innerHTML = shapes[index].value_calc;
      calc_name1.setAttribute("class", "calc_name");
      calc_result1.setAttribute("class", "calc_result");
      calc_result1.innerHTML = radius + " cm";
      calc_form1.setAttribute("class", "calc_form");
      calc_form1.innerHTML = shapes[index].radius_form;

      // Append the cells to the first row
      row1.append(calc_name1);
      row1.append(calc_form1);
      row1.append(calc_result1);

      // Calculate and display the area
      let area = shapes[index].area(radius);
      area = area.toFixed(2);

      // Create the cells for the second row
      let calc_name2 = document.createElement("td");
      let calc_result2 = document.createElement("td");
      let calc_form2 = document.createElement("td");

      // Add content to the cells
      calc_name2.innerHTML = "AREA";
      calc_name2.setAttribute("class", "calc_name");
      calc_result2.setAttribute("class", "calc_result");
      calc_result2.innerHTML = area + " sq cm";
      calc_form2.setAttribute("class", "calc_form");
      calc_form2.innerHTML = shapes[index].area_form;

      // Append the cells to the second row
      row2.append(calc_name2);
      row2.append(calc_form2);
      row2.append(calc_result2);

      // Calculate and display the perimeter
      let perimeter = shapes[index].perimeter(radius);
      perimeter = perimeter.toFixed(2);

      // Create the cells for the third row
      let calc_name3 = document.createElement("td");
      let calc_result3 = document.createElement("td");
      let calc_form3 = document.createElement("td");

      // Add content to the cells
      calc_name3.innerHTML = "PERIMETER";
      calc_name3.setAttribute("class", "calc_name");
      calc_result3.setAttribute("class", "calc_result");
      calc_result3.innerHTML = perimeter + " cm";
      calc_form3.setAttribute("class", "calc_form");
      calc_form3.innerHTML = shapes[index].perimeter_form;

      // Append the cells to the third row
      row3.append(calc_name3);
      row3.append(calc_form3);
      row3.append(calc_result3);


    }
  });
});

// Add click event listener for the result button
resultbutton = document.getElementById("result-button");
resultbutton.addEventListener("click", function () {
  document.getElementById("result").style.display = "none";
  location.reload();

  document.getElementById("shapes-container").style.display = "block";

  document.getElementById("button").style.display = "none";
});


