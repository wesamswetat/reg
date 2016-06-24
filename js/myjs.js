/**
 * @author Wesam
 */

function confrim1() {
	var pass1 = document.getElementById("pass1").value;
	var pass2 = document.getElementById("pass2").value;

	if (pass1 != pass2) {
		alert("pass and confirm pass not match");
	}
}

